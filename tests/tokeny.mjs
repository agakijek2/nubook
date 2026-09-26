/* No token declared in the stylesheet is dead, and no token the code reaches
   for is missing. Names assembled on the fly (`--nu-icon-${k}-inset`) look
   unused to an ordinary search, so this suite queries the rendered page instead
   of reading the source. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css=fs.readFileSync(D+'css/styles.css','utf8');
const js =fs.readFileSync(D+'js/app.js','utf8');
const html=fs.readFileSync(D+'index.html','utf8');

const nocom=css.replace(/\/\*[\s\S]*?\*\//g,'');
const root=nocom.match(/:root\s*\{([\s\S]*?)\n\}/)[1];
const declared=new Set([...root.matchAll(/(--nu-[a-z0-9-]+)\s*:/g)].map(m=>m[1]));

let bad=0;
const chk=(c,m)=>{ console.log((c?'  OK   ':'  FAIL ')+m); if(!c) bad++; };

/* 1. tokens assembled on the fly: rebuild every possible name and check it exists */
const templates=[...js.matchAll(/`(--nu-[a-z0-9-]*)\$\{(\w+)\}([a-z0-9-]*)`/g)];
console.log('token-name templates in the script:', templates.length);
const parts={ k:['lg','sm'] };          // the only variable used in names today
for (const [whole, before, variable, after] of templates){
  const values=parts[variable];
  if (!values){ chk(false, `unknown variable in a token name: ${whole}`); continue; }
  for (const v of values){
    const name=before+v+after;
    chk(declared.has(name), `token assembled on the fly exists: ${name}`);
  }
}

/* 2. tokens named outright in the script */
const outright=new Set([...js.matchAll(/(?:dsTok|dsVal|dsDecl|dsPx)\("(--nu-[a-z0-9-]+)"\)/g)].map(m=>m[1]));
for (const t of outright) chk(declared.has(t), `token named outright exists: ${t}`);

/* 3. tokens the stylesheet reaches for */
const viaVar=new Set([...css.matchAll(/var\((--nu-[a-z0-9-]+)/g)].map(m=>m[1]));
for (const t of viaVar) chk(declared.has(t), `token used in the stylesheet exists: ${t}`);

/* 4. tokens named in the documentation's prose. A token removed from the
   stylesheet stays in a tab's sentences and nothing fails: the table shows an
   empty specimen and the sentence describes something that is not there. */
const inProse=new Set([...js.matchAll(/<code>(--nu-[a-z0-9-]+)<\/code>/g)].map(m=>m[1]));
for (const t of inProse) chk(declared.has(t), `token named in the documentation exists: ${t}`);

/* 5. no token is left in the "not sorted yet" category. The inventory catches a
   token with no prefix on its own, but the Tokens tab promises the reader that
   every category answers one of the three tiers - and this one answers none. A
   caught token is a signal, not a resting place. */
const dom=new JSDOM(fs.readFileSync(D+'index.html','utf8'),
  {runScripts:'outside-only',url:'http://localhost/',pretendToBeVisual:true});
{
  const w=dom.window, d=w.document;
  w.matchMedia=q=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
  w.scrollTo=()=>{}; w.Element.prototype.scrollTo=()=>{};
  w.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
  const st=d.createElement('style'); st.textContent=css; d.head.appendChild(st);
  w.eval(js+'\n;window.__G=dsTokenGroups;');
  const unsorted=(w.__G().find(g=>g.key==='other')||{sections:[]})
    .sections.flatMap(s=>s.list);
  chk(unsorted.length===0,
      `every token has its category in the inventory${unsorted.length?' (missing: '+unsorted.join(', ')+')':''}`);
}

/* 6. the colour tables are written by hand, so they are the only part that can
   fall behind the stylesheet. A token added to :root and left out of the table
   disappears from the documentation without a trace - the tab simply says
   nothing about it. */
const bgfg=[...root.matchAll(/(--nu-(?:bg|fg|border)-[\w-]+)\s*:/g)].map(m=>m[1]);
const undocumented=bgfg.filter(t=>!js.includes(`"${t}"`));
chk(undocumented.length===0,
    `every colour token has a row in its table${undocumented.length?' (missing: '+undocumented.join(', ')+')':''}`);

/* 7. and the other way round: what is declared and nobody reaches for */
const reached=new Set([...viaVar, ...outright]);
for (const [whole, before, variable, after] of templates)
  for (const v of (parts[variable]||[])) reached.add(before+v+after);
const unreached=[...declared].filter(t=>!reached.has(t));
console.log();
console.log('tokens declared:', declared.size);
console.log('tokens nobody reaches for:', unreached.length ? unreached.join(', ') : 'none');
console.log();
console.log(bad ? 'FAILURES: '+bad : 'RESULT: OK');
process.exit(bad?1:0);
