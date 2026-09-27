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
w.eval(fs.readFileSync(D+'js/app.js','utf8')+'\n;window.__S=DS_SECTIONS;window.__L=l=>{LANG=l};window.__I=I18N;');
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
/* The specimens on a component tab are written by hand next to the dictionary
   the shop reads from, so the two drift apart without anything breaking: the
   Badge tab showed "Last copies" and "Unavailable" while the shop said "Last
   pieces" and "Not available". Polish matched, so the rot was invisible to a
   Polish reader - and English is what the shop now opens in. The specimen is
   supposed to be the shop's own badge, so it has to carry the shop's own word. */
{
  const say0=(ok,m)=>{ console.log((ok?'  OK   ':'  FAIL ')+m); if(!ok) bad++; };
  const cls = {'':'new', soon:'soon', last:'last', out:'out', award:'pulitzer'};
  for (const lang of ['en','pl']){
    w.__L(lang);
    const e=d.createElement('div');
    e.innerHTML=S.find(s=>s.id==='badge').body();
    const specimens=[...e.querySelectorAll('.ds-badges .badge')];
    say0(specimens.length===Object.keys(cls).length,
         `${lang}: badge specimens on the tab: ${specimens.length}`);
    for (const sp of specimens){
      const variant=[...sp.classList].filter(c=>c!=='badge')[0]||'';
      const key=cls[variant];
      const want=key && w.__I[lang].status[key];
      say0(!!want && sp.textContent===want,
           `${lang}: .${variant||'badge'} says what the shop says`
           + (sp.textContent===want?'':` (${JSON.stringify(sp.textContent)} vs ${JSON.stringify(want)})`));
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
/* English and euro are the shop's starting point, because the first reader
   usually arrives from a portfolio link written in English. The markup carries
   the English strings too, so there is no flash of the wrong language before the
   script runs, and the pressed switch matches the state it describes. */
const js=fs.readFileSync(D+'js/app.js','utf8');
const html=fs.readFileSync(D+'index.html','utf8');
const dflt=(k)=>(js.match(new RegExp('let '+k+' = "(\\w+)"'))||[])[1];
const say=(ok,m)=>{ console.log((ok?'  OK   ':'  FAIL ')+m); if(!ok) bad++; };
say(dflt('LANG')==='en', `LANG starts at en (${dflt('LANG')})`);
say(dflt('CUR')==='eur', `CUR starts at eur (${dflt('CUR')})`);
say(/id="swEN" aria-pressed="true"/.test(html) && /id="swPL" aria-pressed="false"/.test(html),
    'the language switch in the markup shows EN pressed');
say(/id="swEUR" aria-pressed="true"/.test(html) && /id="swPLN" aria-pressed="false"/.test(html),
    'the currency switch in the markup shows EUR pressed');
say(!/[żźćńółęąśŻŹĆĄŚĘŁÓŃ]/.test(html.replace(/<!--[\s\S]*?-->/g,'').replace(/<title>[\s\S]*?<\/title>/g,'')),
    'no Polish string is left in the markup to flash before the script runs');

/* Right language is not enough: the markup has to carry the same words the
   dictionary does, or the first paint is replaced by a different wording a
   moment later. Compared against a copy of the page that never ran the script. */
const surowy = new JSDOM(html).window.document;
for (const id of ['skipLink','strap','promoCopy','lblFilter','sortLbl','lnkAbout','lnkDesign']){
  const a = (surowy.getElementById(id)||{}).textContent;
  const b = (d.getElementById(id)||{}).textContent;
  say(a===b, `#${id}: the markup says what the dictionary says` + (a===b?'':` (${JSON.stringify(a)} vs ${JSON.stringify(b)})`));
}
say(surowy.getElementById('searchInput').placeholder === d.getElementById('searchInput').placeholder,
    'the search placeholder in the markup matches the dictionary');

console.log(bad? 'FAILURES: '+bad : 'RESULT: every tab renders in both languages');
process.exit(bad?1:0);
