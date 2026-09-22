/* Kazdy rysunek ikony zyje w jednym miejscu: w rejestrze ICONS.
   Test pilnuje, zeby nie wrocil nigdzie indziej, i zeby ikony stojace
   w index.html faktycznie zostaly wypelnione z rejestru. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const js=fs.readFileSync(D+'js/app.js','utf8');
const html=fs.readFileSync(D+'index.html','utf8');
let bad=0; const chk=(c,m)=>{ console.log((c?'  OK   ':'  BLAD ')+m); if(!c) bad++; };

/* 1. zadnego rysunku poza rejestrem */
const i=js.indexOf('const ICONS = {'), j=js.indexOf('\n};', i);
/* Sprawdzamy ikony, a nie kazdy svg: wykres krzywej w zakladce Ruch jest
   rysunkiem liczonym z wartosci, nie ikona, i rejestru nie dotyczy. */
const ikonaZRysunkiem = /<svg[^>]*class="[^"]*ico-(?:lg|sm)[^"]*"[^>]*>\s*<(?:path|circle|rect)/g;
const poza=[...js.matchAll(ikonaZRysunkiem)].filter(m=>m.index<i||m.index>j);
chk(poza.length===0, `ikon z wrysowanym ksztaltem poza rejestrem: ${poza.length}`);
for (const m of poza.slice(0,5)) console.log('        js:'+(js.slice(0,m.index).split('\n').length)+': '+m[0].slice(0,90));
const wHtml=[...html.matchAll(/<path d="|<circle cx="/g)];
chk(wHtml.length===0, `rysunkow w index.html: ${wHtml.length}`);

/* 2. kazda ikona w markupie ma nazwe, ktora rejestr zna */
const dom=new JSDOM(html,{runScripts:'outside-only',url:'http://localhost/',pretendToBeVisual:true});
const w=dom.window;
w.matchMedia=q=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
w.scrollTo=()=>{}; w.Element.prototype.scrollTo=()=>{};
w.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
const puste=[...w.document.querySelectorAll('svg[data-icon]')];
console.log('ikon w markupie:', puste.length);
chk(puste.every(el=>el.innerHTML.trim()===''), 'wszystkie puste przed uruchomieniem skryptu');

w.eval(js+'\n;window.__I=ICONS;window.__icon=icon;window.__S=DS_SECTIONS;');
const REJ=w.__I;
for (const el of puste){
  const n=el.dataset.icon;
  chk(!!REJ[n], `rejestr zna ikone "${n}"`);
}
/* 3. po starcie skryptu kazda jest wypelniona i ma viewBox z rejestru */
const wypelnione=[...w.document.querySelectorAll('svg[data-icon]')];
chk(wypelnione.every(el=>el.innerHTML.trim()!==''), 'wszystkie wypelnione po starcie');
/* Porownuj dane rysunku, nie jego zapis: jsdom serializuje <path/> jako
   <path></path>, wiec porownanie tekstu daje falszywy blad. */
const ksztalt = frag => {
  const d=w.document.createElement('div'); d.innerHTML=`<svg>${frag}</svg>`;
  return [...d.querySelector('svg').children].map(e =>
    e.tagName.toLowerCase()+':'+[...e.attributes].map(a=>a.name+'='+a.value).sort().join(',')
  ).join('|');
};
for (const el of wypelnione){
  const it=REJ[el.dataset.icon];
  const vbOk = el.getAttribute('viewBox')===`0 0 ${it.vb} ${it.vb}`;
  const dOk  = ksztalt(el.innerHTML)===ksztalt(it.d);
  if (!vbOk || !dOk) console.log('        diag', el.dataset.icon, ksztalt(el.innerHTML), 'wobec', ksztalt(it.d));
  chk(vbOk && dOk, `rysunek i siatka zgodne z rejestrem: ${el.dataset.icon}`);
}

/* 4. zakladka pokazuje te same rysunki co sklep */
const S=w.__S;
const tab=S.find(s=>s.id==='icons');
const el=w.document.createElement('div'); el.innerHTML=tab.body();
const wZakladce=[...el.querySelectorAll('.ico-cell svg')];
console.log('okazow w tabeli zestawu:', wZakladce.length);
const uzyte=new Set(wypelnione.map(e=>e.dataset.icon));
for (const sv of wZakladce){
  const k=ksztalt(sv.innerHTML);
  const pasuje=Object.entries(REJ).filter(([n,it])=>ksztalt(it.d)===k).map(([n])=>n);
  chk(pasuje.length>0, `okaz w tabeli pochodzi z rejestru: ${pasuje.join('/')||sv.getAttribute('class')}`);
}
chk(wZakladce.length===Object.keys(REJ).length, `tabela pokazuje wszystkie ${Object.keys(REJ).length} ikon: ${wZakladce.length}`);
console.log();
console.log(bad? 'BLEDOW: '+bad : 'WYNIK: OK');
process.exit(bad?1:0);
