/* The stylesheet is syntactically whole.

   A badly closed comment fails nothing loudly: the browser throws away the rule
   standing after the debris, and a component loses its background or its
   padding. That is exactly how the whole .btn-secondary rule once vanished.
   This suite watches for it. */
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css=fs.readFileSync(D+'css/styles.css','utf8');
let bad=0;
const chk=(ok,what)=>{ console.log((ok?'  OK  ':'  FAIL'),what); if(!ok) bad++; };

/* 1. Comments pair up, one for one. */
const open=(css.match(/\/\*/g)||[]).length, close=(css.match(/\*\//g)||[]).length;
chk(open===close, `comments paired (${open} opened, ${close} closed)`);

/* 2. Nothing outside a comment pretends to be prose. With comments and
      bracketed values stripped, only selectors, declarations and braces are
      left - so a sentence starting with a capital and ending in a full stop
      means a comment has sprung a leak. */
const bare=css.replace(/\/\*[\s\S]*?\*\//g,'');
const prose=[...bare.matchAll(/^[^{}@;:]*\b[a-z]{3,} [a-z]{3,} [a-z]{3,}[^{}:;]*\.\s*$/gm)]
  .map(m=>m[0].trim()).filter(t=>t.length>30);
chk(prose.length===0, prose.length ? `sentences outside a comment: ${JSON.stringify(prose.slice(0,2))}` : 'no prose outside the comments');

/* 3. Braces balance and never dip below zero. */
let depth=0, dipped=false;
for (const ch of bare){ if(ch==='{') depth++; else if(ch==='}'){ depth--; if(depth<0) dipped=true; } }
chk(depth===0 && !dipped, `braces balance (balance ${depth})`);

/* 4. Rules that have to exist and to carry a background and padding - exactly
      what disappeared when a comment sprang a leak. */
for (const sel of ['.btn-primary','.btn-secondary']){
  /* The same selector stands in the sheet more than once - one rule pins a
     token, another builds the component. What counts is that one of them
     builds it. */
  const re=new RegExp('(?:^|\\})\\s*'+sel.replace('.','\\.')+'\\s*\\{([^{}]*)\\}','gm');
  const bodies=[...bare.matchAll(re)].map(m=>m[1]);
  chk(bodies.length>0, `rule ${sel} exists (${bodies.length})`);
  chk(bodies.some(b=>/background\s*:/.test(b)), `${sel} has a background`);
  chk(bodies.some(b=>/padding\s*:[^;]*\s[^;]+/.test(b)), `${sel} has padding with both values`);
}

console.log(bad ? '\nFAILURES: '+bad : '\nRESULT: the stylesheet is whole');
process.exit(bad?1:0);
