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

/* A narrow-screen rule that never runs.

   A media query raises no weight. A selector written inside one loses to the
   same selector written outside it further down the sheet, and losing is
   silent: the phone simply keeps the wide-screen value. That is how the badge
   and field specimens stayed three across on a 320px screen - the rule asking
   for two was there, read fine, and had been dead since the day it was written.

   So: for every declaration inside a max-width query, look for the same
   selector setting the same property later in the sheet at the top level.
   Comments go first, because a comment standing before a rule would otherwise
   be swallowed into its selector, and the selector is taken as everything up to
   the brace however many lines it runs across. */
{
  const src = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const norm = s => s.replace(/\s+/g, ' ').trim();
  const props = body => [...body.matchAll(/(?:^|;)\s*([a-z-]+)\s*:/g)].map(m => m[1]);

  /* Top-level rules: walk the sheet and keep only what is not inside a query. */
  const outside = [];   /* {sel, prop, at} */
  const inside  = [];   /* {sel, prop, at, query} */
  const re = /@media([^{]*)\{|([^{}@]+)\{([^{}]*)\}|\}/g;
  let m, query = null, depth = 0;
  while ((m = re.exec(src))){
    if (m[0][0] === '@'){ query = norm(m[1]); depth = 1; continue; }
    if (m[0] === '}'){ if (depth){ depth = 0; query = null; } continue; }
    if (!m[2]) continue;
    for (const sel of m[2].split(',')){
      const s = norm(sel);
      if (!s) continue;
      for (const p of props(m[3]))
        (query ? inside : outside).push({sel:s, prop:p, at:m.index, query});
    }
  }
  chk(inside.length > 20 && outside.length > 200,
      `declarations read: ${inside.length} inside a query, ${outside.length} outside`);

  const dead = inside.filter(i =>
    /max-width/.test(i.query || '') &&
    outside.some(o => o.sel === i.sel && o.prop === i.prop && o.at > i.at));
  chk(dead.length === 0, dead.length
    ? `narrow-screen rules overridden later in the sheet: ${
        dead.slice(0,4).map(d=>`${d.sel} { ${d.prop} }`).join('; ')}`
    : 'every narrow-screen rule stands after the rule it answers');
}

console.log(bad ? '\nFAILURES: '+bad : '\nRESULT: the stylesheet is whole');
process.exit(bad?1:0);
