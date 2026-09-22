/* Zakladka Dostepnosc: to, co sie w niej cicho psuje.

   Tabela kontrastu przestala dzialac, gdy tokeny koloru przeszly na light-dark()
   i nikt tego nie zobaczyl, bo zakladka renderowala sie dalej - tylko z kreskami
   zamiast liczb. Ten test lapie taki przypadek. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css=fs.readFileSync(D+'css/styles.css','utf8');
const js=fs.readFileSync(D+'js/app.js','utf8');
let bad=0;
const zle=(...a)=>{ console.log('  BLAD:', ...a); bad++; };

function strona({dark=false, reduce=false}={}){
  const html=fs.readFileSync(D+'index.html','utf8').replace('</head>','<style>'+css+'</style></head>');
  const dom=new JSDOM(html,{runScripts:'outside-only',url:'http://localhost/',pretendToBeVisual:true});
  const w=dom.window;
  w.matchMedia=q=>({
    matches: (dark && /prefers-color-scheme:\s*dark/.test(q)) || (reduce && /prefers-reduced-motion/.test(q)),
    addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
  w.scrollTo=()=>{}; w.Element.prototype.scrollTo=()=>{};
  w.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
  /* Czasy skrocone, zeby test trwal chwile, a nie kilka sekund. */
  const st=w.document.documentElement.style;
  [['--nu-motion-quick','4ms'],['--nu-motion-base','4ms'],['--nu-motion-slower','4ms']]
    .forEach(([k,v])=>st.setProperty(k,v));
  w.eval(js+'\n;window.__S=DS_SECTIONS;window.__SC=dsScheme;window.__TYPE=bsType;');
  return w;
}

/* 1. Kazda komorka tabeli kontrastu ma liczbe i werdykt, w obu schematach,
      a liczba zgadza sie z policzona osobno. */
const OCZEK={
  light:{'fg-primary / bg-primary':'18.26','fg-secondary / bg-primary':'4.81',
    'fg-secondary / bg-secondary':'4.26','fg-tertiary / bg-primary':'2.43',
    'fg-inverse / bg-inverse':'18.26','fg-warning / bg-primary':'8.08',
    'fg-alert / bg-primary':'6.54','fg-highlight / bg-highlight':'5.70'},
  dark:{'fg-primary / bg-primary':'16.17','fg-secondary / bg-primary':'7.50',
    'fg-secondary / bg-secondary':'6.46','fg-tertiary / bg-primary':'3.80',
    'fg-inverse / bg-inverse':'16.17','fg-warning / bg-primary':'6.09',
    'fg-alert / bg-primary':'5.89','fg-highlight / bg-highlight':'5.70'}};
const PONIZEJ={light:2, dark:1};
for (const schemat of ['light','dark']){
  const w=strona({dark: schemat==='dark'});
  if (w.__SC()!==schemat) zle('dsScheme() zwraca', w.__SC(), 'zamiast', schemat);
  const el=w.document.createElement('div');
  el.innerHTML=w.__S.find(s=>s.id==='a11y').body();
  const tab=[...el.querySelectorAll('table')].find(t=>t.className.includes('tok-table'));
  const wiersze=[...tab.querySelectorAll('tbody tr')];
  if (wiersze.length!==8) zle('wierszy kontrastu:', wiersze.length, '(oczekiwane 8)');
  let ponizej=0;
  for (const tr of wiersze){
    const para=tr.children[0].textContent.trim(), kom=tr.children[1].textContent.trim();
    if (!/^\d+\.\d\d:1 /.test(kom)) zle(schemat, para, '->', JSON.stringify(kom), '(brak liczby)');
    const licz=kom.split(':1')[0];
    if (OCZEK[schemat][para] && licz!==OCZEK[schemat][para])
      zle(schemat, para, 'daje', licz, 'zamiast', OCZEK[schemat][para]);
    if (/poniżej|below/.test(kom)) ponizej++;
  }
  if (ponizej!==PONIZEJ[schemat]) zle(schemat, 'par ponizej AA:', ponizej, '(oczekiwane', PONIZEJ[schemat]+')');
  console.log(`kontrast ${schemat}: ${wiersze.length} par, ${ponizej} ponizej AA`);
}

/* 2. Radio i pola zgody rysuja obwodke sklepu, a nie przegladarki. */
const bezKomentarzy=css.replace(/\/\*[\s\S]*?\*\//g,'');
for (const sel of ['.opt input:focus-visible','.consent input:focus-visible']){
  const re=new RegExp('[^{}]*'+sel.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'[^{}]*\\{([^{}]*)\\}');
  const m=bezKomentarzy.match(re);
  if (!m || !/outline:var\(--nu-focus-ring\)/.test(m[1].replace(/\s/g,''))) zle('brak reguly fokusu dla', sel);
}
console.log('fokus radio i pol zgody: reguly obecne');

/* 3. Przy ograniczonym ruchu ksiegarka podaje caly tekst naraz, a bez niego
      odslania go linia po linii.

      jsdom nie liczy ukladu, wiec kazde slowo ma zerowa geometrie i wszystkie
      wpadlyby do jednej linii. Podstawiamy wiec wlasne prostokaty: pierwsze trzy
      slowa na jednej wysokosci, pozostale na drugiej - dwie linie, tak jak
      zlamalaby je przegladarka. */
for (const reduce of [false,true]){
  const w=strona({reduce});
  let n=0;
  Object.defineProperty(w.HTMLElement.prototype,'getBoundingClientRect',{configurable:true,
    value(){
      if (!this.classList || !this.classList.contains('bs-w')) return {top:0,bottom:40,height:40};
      if (this.__i===undefined) this.__i = n++;
      const linia = this.__i < 3 ? 0 : 1;
      return {top: linia*20, bottom: (linia+1)*20, height:20};
    }});
  const box=w.document.createElement('div');
  box.className='bs-text';
  w.document.body.appendChild(box);
  w.__TYPE(box, '<p>jedno dwa trzy cztery piec</p>', null);
  const slowa=[...box.querySelectorAll('.bs-w')];
  const odrazu=slowa.filter(s=>s.classList.contains('is-in')).length;
  /* Bez sprawdzania stanu w polowie drogi, bo to zalezaloby od zegara. Liczy sie
     sam podzial: przy ograniczonym ruchu tekst stoi caly od pierwszej chwili,
     a bez niego nie stoi ani slowo - pierwsza linia czeka jeden odstep, zeby
     panel mial fory na miejsce, ktore otwiera. */
  if (reduce && odrazu!==slowa.length) zle('przy reduce od razu widocznych', odrazu, 'z', slowa.length);
  if (!reduce && odrazu!==0) zle('bez reduce nic nie ma byc widoczne od razu, a jest', odrazu);
  await new Promise(r=>setTimeout(r, 200));
  const potem=slowa.filter(s=>s.classList.contains('is-in')).length;
  if (potem!==slowa.length) zle('po wszystkim widocznych', potem, 'z', slowa.length);
  console.log(`bsType reduce=${reduce}: od razu ${odrazu}/${slowa.length}, potem ${potem}/${slowa.length}`);
}

console.log(bad ? 'BLEDOW: '+bad : 'WYNIK: Dostepnosc opisuje to, co robi kod');
process.exit(bad?1:0);
