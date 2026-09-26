/* Every icon drawing lives in one place: the ICONS registry.
   This suite makes sure none has come back anywhere else, and that the icons
   standing in index.html are really filled from the registry. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const js=fs.readFileSync(D+'js/app.js','utf8');
const html=fs.readFileSync(D+'index.html','utf8');
let bad=0; const chk=(c,m)=>{ console.log((c?'  OK   ':'  FAIL ')+m); if(!c) bad++; };

/* 1. no drawing outside the registry */
const i=js.indexOf('const ICONS = {'), j=js.indexOf('\n};', i);
/* We check icons, not every svg: the curve plot in the Motion tab is a drawing
   computed from values, not an icon, and the registry does not govern it. */
const iconWithShape = /<svg[^>]*class="[^"]*ico-(?:lg|sm)[^"]*"[^>]*>\s*<(?:path|circle|rect)/g;
const outside=[...js.matchAll(iconWithShape)].filter(m=>m.index<i||m.index>j);
chk(outside.length===0, `icons with a shape drawn outside the registry: ${outside.length}`);
for (const m of outside.slice(0,5)) console.log('        js:'+(js.slice(0,m.index).split('\n').length)+': '+m[0].slice(0,90));
const inHtml=[...html.matchAll(/<path d="|<circle cx="/g)];
chk(inHtml.length===0, `drawings in index.html: ${inHtml.length}`);

/* 2. every icon in the markup carries a name the registry knows */
const dom=new JSDOM(html,{runScripts:'outside-only',url:'http://localhost/',pretendToBeVisual:true});
const w=dom.window;
w.matchMedia=q=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
w.scrollTo=()=>{}; w.Element.prototype.scrollTo=()=>{};
w.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
const empty=[...w.document.querySelectorAll('svg[data-icon]')];
console.log('icons in the markup:', empty.length);
chk(empty.every(el=>el.innerHTML.trim()===''), 'all empty before the script runs');

w.eval(js+'\n;window.__I=ICONS;window.__icon=icon;window.__S=DS_SECTIONS;');
const REG=w.__I;
for (const el of empty){
  const n=el.dataset.icon;
  chk(!!REG[n], `the registry knows the icon "${n}"`);
}
/* 3. once the script has started, each one is filled and carries the
      registry's viewBox */
const filled=[...w.document.querySelectorAll('svg[data-icon]')];
chk(filled.every(el=>el.innerHTML.trim()!==''), 'all filled after the script starts');
/* Compare the drawing's data, not its serialisation: jsdom writes <path/> as
   <path></path>, so comparing the text gives a false failure. */
const shape = frag => {
  const d=w.document.createElement('div'); d.innerHTML=`<svg>${frag}</svg>`;
  return [...d.querySelector('svg').children].map(e =>
    e.tagName.toLowerCase()+':'+[...e.attributes].map(a=>a.name+'='+a.value).sort().join(',')
  ).join('|');
};
for (const el of filled){
  const it=REG[el.dataset.icon];
  const vbOk = el.getAttribute('viewBox')===`0 0 ${it.vb} ${it.vb}`;
  const dOk  = shape(el.innerHTML)===shape(it.d);
  if (!vbOk || !dOk) console.log('        diag', el.dataset.icon, shape(el.innerHTML), 'against', shape(it.d));
  chk(vbOk && dOk, `drawing and grid match the registry: ${el.dataset.icon}`);
}

/* 4. the tab shows the same drawings as the shop */
const S=w.__S;
const tab=S.find(s=>s.id==='icons');
const el=w.document.createElement('div'); el.innerHTML=tab.body();
const inTab=[...el.querySelectorAll('.ico-cell svg')];
console.log('specimens in the set table:', inTab.length);
for (const sv of inTab){
  const k=shape(sv.innerHTML);
  const matches=Object.entries(REG).filter(([n,it])=>shape(it.d)===k).map(([n])=>n);
  chk(matches.length>0, `the specimen comes from the registry: ${matches.join('/')||sv.getAttribute('class')}`);
}
chk(inTab.length===Object.keys(REG).length, `the table shows all ${Object.keys(REG).length} icons: ${inTab.length}`);
console.log();
console.log(bad? 'FAILURES: '+bad : 'RESULT: OK');
process.exit(bad?1:0);
