/* Przeplyw widgetu ksiegarki: oddech, wypisywanie, zamykanie. Czasy skrocone,
   zeby test trwal sekunde - sprawdzamy przeplyw, nie tempo. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const dom=new JSDOM(fs.readFileSync(D+'index.html','utf8'),
  {runScripts:'outside-only',url:'http://localhost/?bs=slow#/',pretendToBeVisual:true});
const w=dom.window, d=w.document;
w.matchMedia=q=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
w.scrollTo=()=>{}; w.Element.prototype.scrollTo=()=>{};
w.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
const r=d.documentElement.style;
[['--nu-motion-instant','2ms'],['--nu-motion-quick','4ms'],['--nu-motion-base','4ms'],
 ['--nu-motion-slow','4ms'],['--nu-motion-slower','4ms'],['--nu-motion-hold','60ms'],
 ['--nu-motion-stagger','20ms']].forEach(([k,v])=>r.setProperty(k,v));
w.eval(fs.readFileSync(D+'js/app.js','utf8')
  +'\n;window.__B=BOOKS;window.__pick=bsPick;window.__sync=bsSync;window.__shut=bsShut;window.__fill=bsFill;window.__show=bsShow;window.__ava=bsAvaEl;window.__seen=bsSeen;window.__said=bsSaid;window.__i18n=I18N;');
const dot=()=>d.querySelector('#bsAva .bs-dot');
const R=()=>[...d.querySelectorAll('.bs-why')];
const B=n=>d.getElementById('bsText'+n);
const sleep=ms=>new Promise(res=>setTimeout(res,ms));
let bad=0; const chk=(c,m)=>{ console.log((c?'  OK   ':'  BLAD ')+m); if(!c) bad++; };

/* Aplikacja konczy wlasny start asynchronicznie, a route() przebudowuje panel.
   Sterowanie wnetrzem przed koncem startu podstawia wezly, ktorych zaraz nie
   bedzie - stad odczekanie, zanim test cokolwiek klika. */
await sleep(300);
const book=w.__B.find(b=>b.s==='out');
console.log('ksiazka niedostepna:', book.t);
w.__sync(book);
/* Otwarcie przez nacisniecie znaku, czyli ta sama droga co u czytelniczki. */
w.__ava.click();
chk(R().length===2, 'dwa wiersze z przyciskiem "dlaczego": '+R().length);

w.__pick(0);
chk(dot().classList.contains('is-working'), 'znak oddycha od razu po klikniecu');
chk(B(0).getAttribute('aria-busy')==='true' && B(0).querySelector('.bs-sk'), 'kreski stanu oczekiwania i aria-busy');

await sleep(70);
const words=[...B(0).querySelectorAll('.bs-w')];
chk(words.length>20, 'tekst rozbity na slowa: '+words.length);
chk(B(0).getAttribute('aria-busy')===null, 'aria-busy zdjete, gdy slowa zaczely wchodzic');
chk(words.some(s=>!s.classList.contains('is-in')), 'wypisywanie jeszcze trwa');
chk(dot().classList.contains('is-working'), 'znak oddycha NADAL, w trakcie wypisywania');
chk(/<strong|<ul|<li/.test(B(0).innerHTML), 'znaczniki w tekscie nienaruszone');

await sleep(words.length*8+400);
chk(words.length>0 && words.every(s=>s.classList.contains('is-in')), 'wszystkie slowa weszly');
chk(!dot().classList.contains('is-working'), 'znak przestal oddychac po ostatnim slowie');

w.__pick(1);
chk(dot().classList.contains('is-working'), 'drugi wiersz: znak znow oddycha');
chk(B(0).innerHTML==='' && B(0).hidden, 'pierwszy wiersz zamkniety i wyczyszczony');
chk(R()[0].getAttribute('aria-expanded')==='false' && R()[1].getAttribute('aria-expanded')==='true', 'otwarty dokladnie jeden wiersz');
w.__pick(1);
chk(R()[1].getAttribute('aria-expanded')==='false', 'ponowne klikniecie zamyka');
chk(!dot().classList.contains('is-working'), 'zamkniecie gasi znak');

w.__pick(0);
chk(!B(0).querySelector('.bs-sk'), 'odpowiedz juz podana: bez kresek');
chk(!dot().classList.contains('is-working'), 'i bez oddychania');
chk(B(0).innerHTML.length>100, 'tekst stoi od razu w calosci');
w.__shut();
chk(!dot().classList.contains('is-working'), 'zamkniecie panelu gasi znak');

/* Zwloka po wejsciu na strone nie moze przebudowac panelu, ktory czytelniczka
   otworzyla sama - przebudowa czysci liste i zabiera odpowiedz w polowie. */
const b2=w.__B.filter(x=>x.s==='out')[0];
w.__sync(null); w.__sync(b2);
w.__ava.click();
w.__pick(0);
const przed=B(0).innerHTML.length;
await sleep(200);
chk(B(0).innerHTML.length>=przed && !B(0).hidden, 'zwloka nie przebudowala otwartego panelu');
chk(R()[0].getAttribute('aria-expanded')==='true', 'wiersz nadal otwarty po uplywie zwloki');

/* Oddech nalezy do oferty, ktora przychodzi sama. Przywolanie schowanej to
   sprawka czytelniczki i nic sie nie wylicza, a znak jest wtedy pod jej
   kursorem i juz swieci. */
const mysli=()=>dot().classList.contains('is-thinking');
w.__shut();
chk(!mysli(), 'zamkniecie zdejmuje stan myslenia ze znacznika');
w.__ava.click();
chk(!mysli(), 'przywolanie dymka przez znak nie uruchamia oddechu');
chk(d.getElementById('bsPanel').hidden===false, 'ale dymek sie otwiera');

/* Ta sama ksiazka, ale widziana pierwszy raz: dymek otwiera sie sam. */
w.__shut(); w.__sync(null); w.__seen.clear();
w.__sync(book);
chk(!mysli(), 'przed uplywem zwloki znak nie oddycha');
await sleep(120);
chk(d.getElementById('bsPanel').hidden===false, 'dymek otworzyl sie sam po zwloce');
chk(mysli(), 'i wzial jeden oddech');
await sleep(120);
chk(!mysli(), 'stan myslenia schodzi po skonczonym oddechu');

/* Lista propozycji jest stanem domyslnym: dymek otwiera sie z nia, bez
   zadnego przycisku rozwijajacego po drodze. */
w.__shut(); w.__sync(null); w.__seen.clear(); w.__sync(book);
await sleep(120);            // dymek otwiera sie sam i bierze oddech
const lista=d.getElementById('bsList');
chk(!d.getElementById('bsPanel').hidden, 'dymek jest otwarty');
chk(lista.hidden===false, 'lista propozycji jest widoczna od razu');
chk(lista.querySelectorAll('.bs-why').length>0, 'i ma w sobie propozycje');
chk(!d.getElementById('bsMore'), 'przycisku rozwijajacego nie ma w ogole');
chk(!('bsMore' in w.__i18n.pl) && !('bsMore' in w.__i18n.en), 'ani jego napisu w slownikach');
chk(!('bsLess' in w.__i18n.pl) && !('bsLess' in w.__i18n.en), 'ani napisu zwijania');
await sleep(120);            // oddech dobiega konca
chk(!mysli(), 'punkt wyjscia: znak nie oddycha');

/* Wiersz odpowiedzi: oddech przy otwarciu, a gdy odpowiedz sie oblicza,
   oddychanie bez konca ma pierwszenstwo. */
w.__said.clear();            // odpowiedz jeszcze nie padla w tej wizycie
w.__pick(0);
chk(dot().classList.contains('is-working'), 'otwarcie odpowiedzi: oddychanie bez konca');
chk(mysli(), 'stan myslenia tez jest ustawiony, ale nie on rzadzi');
w.__pick(0);
chk(!dot().classList.contains('is-working') && !mysli(), 'zamkniecie wiersza zdejmuje oba stany');

console.log(bad? '\nBLEDOW: '+bad : '\nWYNIK: OK');
process.exit(bad?1:0);
