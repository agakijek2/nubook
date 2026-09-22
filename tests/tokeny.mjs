/* Zaden token zadeklarowany w arkuszu nie jest martwy, i zaden token, po ktory
   siega kod, nie jest nieistniejacy. Nazwy sklejane w locie (`--nu-icon-${k}-inset`)
   wygladaja na nieuzywane przy zwyklym wyszukiwaniu, wiec test odpytuje
   wyrenderowana strone zamiast czytac zrodlo. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css=fs.readFileSync(D+'css/styles.css','utf8');
const js =fs.readFileSync(D+'js/app.js','utf8');
const html=fs.readFileSync(D+'index.html','utf8');

const nocom=css.replace(/\/\*[\s\S]*?\*\//g,'');
const root=nocom.match(/:root\s*\{([\s\S]*?)\n\}/)[1];
const zadeklarowane=new Set([...root.matchAll(/(--nu-[a-z0-9-]+)\s*:/g)].map(m=>m[1]));

let bad=0;
const chk=(c,m)=>{ console.log((c?'  OK   ':'  BLAD ')+m); if(!c) bad++; };

/* 1. tokeny sklejane w locie: odtworz kazda mozliwa nazwe i sprawdz, czy istnieje */
const szablony=[...js.matchAll(/`(--nu-[a-z0-9-]*)\$\{(\w+)\}([a-z0-9-]*)`/g)];
console.log('szablonow nazw tokenow w skrypcie:', szablony.length);
const czesci={ k:['lg','sm'] };          // jedyna zmienna uzywana dzis w nazwach
for (const [pelny, przed, zmienna, po] of szablony){
  const war=czesci[zmienna];
  if (!war){ chk(false, `nieznana zmienna w nazwie tokenu: ${pelny}`); continue; }
  for (const w of war){
    const nazwa=przed+w+po;
    chk(zadeklarowane.has(nazwa), `token sklejany w locie istnieje: ${nazwa}`);
  }
}

/* 2. tokeny nazwane wprost w skrypcie */
const wprost=new Set([...js.matchAll(/(?:dsTok|dsVal|dsDecl|dsPx)\("(--nu-[a-z0-9-]+)"\)/g)].map(m=>m[1]));
for (const t of wprost) chk(zadeklarowane.has(t), `token nazwany wprost istnieje: ${t}`);

/* 3. tokeny, po ktore siega arkusz */
const przezVar=new Set([...css.matchAll(/var\((--nu-[a-z0-9-]+)/g)].map(m=>m[1]));
for (const t of przezVar) chk(zadeklarowane.has(t), `token uzyty w arkuszu istnieje: ${t}`);

/* 4. tokeny wymienione z nazwy w tekscie dokumentacji. Token usuniety z arkusza
   zostaje w prozie zakladki i nic sie nie wywala: tabela pokazuje pusta probke,
   a zdanie opisuje cos, czego nie ma. */
const wProzie=new Set([...js.matchAll(/<code>(--nu-[a-z0-9-]+)<\/code>/g)].map(m=>m[1]));
for (const t of wProzie) chk(zadeklarowane.has(t), `token wymieniony w dokumentacji istnieje: ${t}`);

/* 5. zaden token nie zostaje w kategorii "Jeszcze nieprzypisane". Spis sam
   lapie token bez przedrostka, ale zakladka Tokeny obiecuje czytelniczce, ze
   kazda kategoria odpowiada jednemu z trzech poziomow - a ta kategoria nie
   odpowiada zadnemu. Zlapany token jest sygnalem, nie stanem docelowym. */
const dom=new JSDOM(fs.readFileSync(D+'index.html','utf8'),
  {runScripts:'outside-only',url:'http://localhost/',pretendToBeVisual:true});
{
  const w=dom.window, d=w.document;
  w.matchMedia=q=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
  w.scrollTo=()=>{}; w.Element.prototype.scrollTo=()=>{};
  w.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
  const st=d.createElement('style'); st.textContent=css; d.head.appendChild(st);
  w.eval(js+'\n;window.__G=dsTokenGroups;');
  const nieprzypisane=(w.__G().find(g=>g.key==='other')||{sections:[]})
    .sections.flatMap(s=>s.list);
  chk(nieprzypisane.length===0,
      `kazdy token ma swoja kategorie w spisie${nieprzypisane.length?' (bez: '+nieprzypisane.join(', ')+')':''}`);
}

/* 6. tabele koloru sa pisane recznie, wiec jako jedyne moga zostac w tyle za
   arkuszem. Token dopisany do :root i pominiety w tabeli znika z dokumentacji
   bez sladu - zakladka po prostu o nim milczy. */
const bgfg=[...root.matchAll(/(--nu-(?:bg|fg|border)-[\w-]+)\s*:/g)].map(m=>m[1]);
const nieopisane=bgfg.filter(t=>!js.includes(`"${t}"`));
chk(nieopisane.length===0,
    `kazdy token koloru ma wiersz w tabeli${nieopisane.length?' (bez: '+nieopisane.join(', ')+')':''}`);

/* 7. i odwrotnie: co jest zadeklarowane, a po co nikt nie siega */
const siegane=new Set([...przezVar, ...wprost]);
for (const [pelny, przed, zmienna, po] of szablony)
  for (const w of (czesci[zmienna]||[])) siegane.add(przed+w+po);
const niesiegane=[...zadeklarowane].filter(t=>!siegane.has(t));
console.log();
console.log('tokenow zadeklarowanych:', zadeklarowane.size);
console.log('tokenow, po ktore nikt nie siega:', niesiegane.length ? niesiegane.join(', ') : 'brak');
console.log();
console.log(bad ? 'BLEDOW: '+bad : 'WYNIK: OK');
process.exit(bad?1:0);
