/* Ksiegarka w trybie zwyklym, czyli bez ?bs=slow.

   ksiegarka.mjs otwiera strone w trybie slow i przez to sprawdzal wylacznie
   sciezke ze szkieletem. Sciezka bez zwloki - ta, ktora widzi kazda
   czytelniczka - wstawiala tekst w calosci, bez slow opakowanych w .bs-w,
   a te sa tym, co odslania kolejne linie. Odpowiedz byla wiec pusta.
   Ten test chodzi ta wlasnie sciezka. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css=fs.readFileSync(D+'css/styles.css','utf8');
const html=fs.readFileSync(D+'index.html','utf8').replace('</head>','<style>'+css+'</style></head>');
const dom=new JSDOM(html,{runScripts:'outside-only',url:'http://localhost/',pretendToBeVisual:true});
const w=dom.window, d=w.document;
w.matchMedia=q=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
w.scrollTo=()=>{}; w.Element.prototype.scrollTo=()=>{};
w.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
const r=d.documentElement.style;
[['--nu-motion-instant','2ms'],['--nu-motion-quick','4ms'],['--nu-motion-base','4ms'],
 ['--nu-motion-slower','4ms'],['--nu-motion-hold','60ms']].forEach(([k,v])=>r.setProperty(k,v));
w.eval(fs.readFileSync(D+'js/app.js','utf8')
  +'\n;window.__B=BOOKS;window.__pick=bsPick;window.__sync=bsSync;window.__show=bsShow;'
  +'window.__off=bsOffer;window.__slow=BS_SLOW;window.__lines=bsLines;');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let bad=0;
const chk=(ok,co)=>{ console.log((ok?'  OK  ':'  BLAD'),co); if(!ok) bad++; };

chk(w.__slow===false, 'punkt wyjscia: strona otwarta bez ?bs=slow');

const book=w.__B.find(b=>b.s==='out' && w.__off(b));
chk(!!book, 'jest ksiazka niedostepna z propozycjami');
w.__sync(book); w.__show(true);
await sleep(50);

const wiersze=[...d.querySelectorAll('.bs-why')];
chk(wiersze.length>0, 'dymek ma wiersze "dlaczego akurat ta"');

w.__pick(0);
/* Znak oddycha przez cala odpowiedz, takze wtedy, gdy nie ma na co czekac
   i tekst od razu zaczyna sie skladac. */
chk(d.querySelector('#bsAva .bs-dot').classList.contains('is-working'),
    'znak oddycha od poczatku skladania tekstu, bez zadnej zwloki');
const box=d.getElementById('bsText0');
/* Pudelko ma pelna wysokosc od razu: slowa trzymaja swoje miejsce od poczatku,
   wiec panel nie rozsuwa sie linia po linii, a pod tekstem jest puste pole. */
chk((box.style.height||'')==='', 'pudelko nie ma wpisywanej wysokosci - stoi w swojej od razu');
chk(!box.classList.contains('is-arriving'), 'i nie jest przycinane');
await sleep(600);
chk(box.hidden===false, 'pudelko odpowiedzi jest odkryte');
chk(!d.querySelector('#bsAva .bs-dot').classList.contains('is-working'),
    'po ostatniej linii znak przestaje oddychac');

const slowa=[...box.querySelectorAll('.bs-w')];
chk(slowa.length>0, 'tekst jest rozbity na slowa (.bs-w)');
chk(slowa.every(s=>s.classList.contains('is-in')), 'wszystkie slowa zostaly odsloniete');

/* Nic nie zostaje poza widokiem po skonczonym wejsciu. */
const akapity=[...box.querySelectorAll('p, li')];
chk(akapity.length>0, 'odpowiedz ma akapity');
const schowane=akapity.filter(p=>w.getComputedStyle(p).display==='none');
chk(schowane.length===0, `zaden akapit nie jest schowany (schowanych: ${schowane.length} z ${akapity.length})`);

/* Odpowiedz juz podana w tej wizycie wraca od razu: bez zwloki i bez
   odslaniania, bo przygladanie sie drugi raz pisaniu tego samego to patrzenie
   na czekanie, ktorego nie ma. */
w.__pick(0); w.__pick(0);
const znowu=d.getElementById('bsText0');
chk(znowu.textContent.trim().length>0, 'powtorne otwarcie pokazuje tekst natychmiast');
chk(znowu.querySelectorAll('.bs-w').length===0, 'i nie rozbija go na slowa, bo nie ma czego odslaniac');
chk(!znowu.querySelector('.bs-sk'), 'ani nie pokazuje szkieletu');
await sleep(600);
chk(znowu.textContent.trim().length>0, 'i tekst nadal tam stoi');


/* Slowa grupuja sie w linie po zmierzonej gornej krawedzi.

   Podstawiamy wlasna geometrie, bo jsdom nie liczy ukladu: piec slow, trzy
   pierwsze na jednej wysokosci, dwa pozostale na drugiej. */
{
  const gora=300, wys=20;
  const box=d.createElement('div');
  box.className='bs-text';
  d.body.appendChild(box);
  box.getBoundingClientRect=()=>({top:gora, bottom:gora+2*wys, height:2*wys});
  let n=0;
  Object.defineProperty(w.HTMLElement.prototype,'getBoundingClientRect',{configurable:true,
    value(){
      if (!this.classList || !this.classList.contains('bs-w')) return {top:0,bottom:0,height:0};
      if (this.__i===undefined) this.__i = n++;
      const linia = this.__i < 3 ? 0 : 1;
      return {top: gora + linia*wys, bottom: gora + (linia+1)*wys, height: wys};
    }});
  const ls=w.__lines(box, [...Array(5)].map(()=>{
    const s=d.createElement('span'); s.className='bs-w'; box.appendChild(s); return s;
  }));
  chk(ls.length===2, `zmierzono dwie linie (jest ${ls.length})`);
  chk(ls[0].length===3, `pierwsza linia ma trzy slowa (ma ${ls[0].length})`);
  chk(ls[1].length===2, `druga ma dwa (ma ${ls[1].length})`);
}

console.log(bad ? '\nBLEDOW: '+bad : '\nWYNIK: odpowiedz widac takze bez trybu slow');
process.exit(bad?1:0);
