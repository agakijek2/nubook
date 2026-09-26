/* Every documentation tab renders in both languages. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const dom=new JSDOM(fs.readFileSync(D+'index.html','utf8'),
  {runScripts:'outside-only',url:'http://localhost/',pretendToBeVisual:true});
const w=dom.window, d=w.document;
w.matchMedia=q=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
w.scrollTo=()=>{}; w.Element.prototype.scrollTo=()=>{};
w.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
w.eval(fs.readFileSync(D+'js/app.js','utf8')+'\n;window.__S=DS_SECTIONS;window.__L=l=>{LANG=l};');
const S=w.__S;
let bad=0;
for (const lang of ['pl','en']){
  w.__L(lang);
  for (const s of S){
    let out;
    try{ out=s.body(); }catch(e){ console.log('FAIL', lang, s.id, e.message); bad++; continue; }
    if (/undefined/.test(out)){ console.log('undefined in', lang, s.id); bad++; }
    if (/—/.test(out)){ console.log('em dash in', lang, s.id); bad++; }
    const el=d.createElement('div'); el.innerHTML=out;
    const h1=el.querySelector('h1');
    if (!h1){ console.log('no h1 in', lang, s.id); bad++; continue; }
    /* Every tab opens the same way: a title, and under it one lede sentence in
       the ds-lede style. A tab that opens with an ordinary paragraph looks as
       though somebody else wrote it. */
    const first = h1.nextElementSibling;
    if (!first || first.tagName!=='P' || !first.classList.contains('ds-lede')){
      console.log('no ds-lede under h1 in', lang, s.id,
                  '(found: '+(first? first.tagName.toLowerCase()+'.'+first.className : 'nothing')+')');
      bad++;
    }
  }
}
w.__L('pl');
const box=(id)=>{const e=d.createElement('div'); e.innerHTML=S.find(s=>s.id===id).body(); return e;};
const m=box('motion'), t=[...m.querySelectorAll('table')];
console.log('tabs:', S.length);
console.log('Motion, rows per table:', t.map(x=>x.querySelectorAll('tbody tr').length).join(' / '));
console.log('Avatar, specification rows:', box('avatar').querySelectorAll('table')[1].querySelectorAll('tbody tr').length);
const col=box('colour');
console.log('Colour, token tables:', [...col.querySelectorAll('table.tok-table')].map(x=>x.querySelectorAll('tbody tr').length).join(' / '));
console.log('Colour, primitives:', col.querySelectorAll('table')[0].querySelectorAll('tbody tr').length);
console.log(bad? 'FAILURES: '+bad : 'RESULT: every tab renders in both languages');
process.exit(bad?1:0);
