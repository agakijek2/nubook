/* Kazda zakladka dokumentacji renderuje sie w obu jezykach. */
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
    try{ out=s.body(); }catch(e){ console.log('BLAD', lang, s.id, e.message); bad++; continue; }
    if (/undefined/.test(out)){ console.log('undefined w', lang, s.id); bad++; }
    if (/—/.test(out)){ console.log('dlugi myslnik w', lang, s.id); bad++; }
    const el=d.createElement('div'); el.innerHTML=out;
    const h1=el.querySelector('h1');
    if (!h1){ console.log('brak h1 w', lang, s.id); bad++; continue; }
    /* Kazda zakladka zaczyna sie tak samo: tytul, a pod nim jedno zdanie
       wprowadzajace w stylu ds-lede. Zakladka, ktora zaczyna sie zwyklym
       akapitem, wyglada na pisana przez kogos innego. */
    const pierwszy = h1.nextElementSibling;
    if (!pierwszy || pierwszy.tagName!=='P' || !pierwszy.classList.contains('ds-lede')){
      console.log('brak ds-lede pod h1 w', lang, s.id,
                  '(jest: '+(pierwszy? pierwszy.tagName.toLowerCase()+'.'+pierwszy.className : 'nic')+')');
      bad++;
    }
  }
}
w.__L('pl');
const box=(id)=>{const e=d.createElement('div'); e.innerHTML=S.find(s=>s.id===id).body(); return e;};
const m=box('motion'), t=[...m.querySelectorAll('table')];
console.log('zakladek:', S.length);
console.log('Ruch, wierszy w tabelach:', t.map(x=>x.querySelectorAll('tbody tr').length).join(' / '));
console.log('Awatar, wierszy specyfikacji:', box('avatar').querySelectorAll('table')[1].querySelectorAll('tbody tr').length);
const kol=box('colour');
console.log('Kolor, tabele tokenow:', [...kol.querySelectorAll('table.tok-table')].map(x=>x.querySelectorAll('tbody tr').length).join(' / '));
console.log('Kolor, prymitywow:', kol.querySelectorAll('table')[0].querySelectorAll('tbody tr').length);
console.log(bad? 'BLEDOW: '+bad : 'WYNIK: wszystkie zakladki renderuja sie w obu jezykach');
process.exit(bad?1:0);
