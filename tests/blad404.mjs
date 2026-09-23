/* Strona pod nieznanym adresem jest jedynym widokiem, ktorego nikt nigdy nie
   oglada celowo - wiec psuje sie i nikt tego nie zauwaza. Najgrozniejsze sa tu
   sciezki wzgledne: 404 podaje sie pod dowolnie glebokim adresem, wiec
   "css/styles.css" znajdzie arkusz tylko w korzeniu, a wszedzie indziej da
   strone bez stylow. */
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const html = fs.readFileSync(D+'404.html','utf8');

let bad=0;
const chk=(c,m)=>{ console.log((c?'  OK   ':'  BLAD ')+m); if(!c) bad++; };

/* 1. Kazdy wlasny odnosnik liczy sie od korzenia. Zewnetrzne (fonts.googleapis)
   zostawiamy w spokoju. */
const adresy = [...html.matchAll(/(?:href|src)="([^"#][^"]*)"/g)].map(m=>m[1])
  .filter(a => !/^https?:/.test(a));
chk(adresy.length>0, `odnosnikow do sprawdzenia: ${adresy.length}`);
for (const a of adresy)
  chk(a.startsWith('/'), `${a} liczy sie od korzenia`);

/* 2. ...i kazdy z nich wskazuje na plik, ktory istnieje. */
for (const a of adresy.filter(a=>a!=='/'))
  chk(fs.existsSync(D + a.replace(/^\//,'').split('#')[0]),
      `${a} wskazuje na istniejacy plik`);

/* 3. Ten sam arkusz co sklep, a nie wlasna kopia regul. */
chk(/href="\/css\/styles\.css"/.test(html), 'strona bierze arkusz sklepu');

/* 4. Komponenty z systemu, nie wymyslone na te jedna strone. */
for (const k of ['mark','btn-primary','foot-link link'])
  chk(html.includes(`class="${k}"`), `uzywa komponentu .${k.split(' ')[0]}`);
/* Jedna droga, jeden przycisk. Wyjscie do dokumentacji stoi w stopce, tak jak
   w calym sklepie, wiec powtorzone przy tytule bylo drugim wyjsciem z tego
   samego miejsca. */
chk((html.match(/class="btn-primary"/g)||[]).length===1,
    'przy tytule stoi dokladnie jeden przycisk');
chk(!/class="link in-text"/.test(html),
    'do dokumentacji prowadzi stopka, nie osobny link przy tytule');

/* 5. Wlasne reguly tej strony nie moga wpisywac wartosci, ktore sa tokenami. */
const styl = (html.match(/<style>([\s\S]*?)<\/style>/)||['',''])[1];
const wpisane = [...styl.matchAll(/:\s*(\d+(?:\.\d+)?(?:px|rem))/g)]
  .map(m=>m[1]).filter(v => v!=='0px');
chk(wpisane.length===0, `zadnej dlugosci wpisanej z reki${wpisane.length?` (${wpisane.join(', ')})`:''}`);
chk(!/#[0-9a-fA-F]{3,6}\b/.test(styl), 'zadnej barwy wpisanej z reki');

/* 6. Oba jezyki. Polski stoi w markupie, angielski dokłada skrypt - wiec obie
   wersje musza byc kompletne, inaczej czytelniczka po angielsku dostaje
   pol strony po polsku. */
const skryptBlok = (html.match(/<script>([\s\S]*?)<\/script>/)||['',''])[1];
/* Skrypt siega po elementy skrotem `tekst("id")`, ale rownie dobrze moglby
   wolac getElementById wprost - lapiemy oba zapisy. Bez tego zmiana skrotu
   wyciszylaby ten test po cichu, zamiast go zepsuc. */
const podmiany = [...new Set(
  [...skryptBlok.matchAll(/(?:getElementById|tekst)\("(\w+)"\)/g)].map(m=>m[1])
)];
chk(podmiany.length >= 5,
    `skrypt podmienia napisy w ${podmiany.length} miejscach (spodziewane co najmniej 5)`);
for (const id of podmiany)
  chk(new RegExp(`id="${id}"`).test(html), `element #${id} istnieje w markupie`);
chk(/p\.lang !== "en"/.test(html), 'polski jest domyslny, tak jak w sklepie');
chk(/nubook\.prefs\.v1/.test(html), 'czyta ten sam klucz preferencji co sklep');
chk(/documentElement\.lang = "en"/.test(html), 'przelaczenie jezyka zmienia tez atrybut lang');
chk(/data-scheme/.test(html), 'schemat jasny albo ciemny idzie za wyborem czytelniczki');

/* 6b. Naglowek i stopka sa te same co w sklepie: strona bledu ma byc czescia
   sklepu, a nie osobna kartka. Przelaczniki zostaja poza nia - kontrolka, ktora
   nie dziala, jest gorsza niz jej brak. */
chk(/<header>[\s\S]*class="logo"[\s\S]*class="mark"[\s\S]*class="strap"[\s\S]*<\/header>/.test(html),
    'naglowek niesie znak i podpis, tak jak w sklepie');
chk(/<footer class="site-foot">/.test(html), 'stopka jest stopka sklepu');
chk(/class="foot-link link"/.test(html), 'stopka ma oba linki zaplecza');
chk(!/class="chip"/.test(html) && !/btn-tertiary/.test(html),
    'zadnej martwej kontrolki: przelaczniki i ikony zostaja w sklepie');

/* 6c. Typografia z tokenow, a nie dobrana na oko. */
chk(/\.nf h1\{[^}]*font:var\(--nu-type-h1\)/.test(styl), 'naglowek bierze --nu-type-h1');
chk(/\.nf p\{[^}]*font:var\(--nu-type-body-l\)/.test(styl), 'tekst pod nim bierze --nu-type-body-l');
/* Ta sama barwa co akapit wprowadzajacy w dokumentacji. Gdyby ktos zmienil ja
   tam, to zdanie zostaloby samo - wiec porownujemy z arkuszem, a nie z pamiecia. */
const arkusz = fs.readFileSync(D+'css/styles.css','utf8');
const ledeBarwa = (arkusz.match(/\.ds \.ds-lede\{[^}]*color:(var\(--[\w-]+\))/)||[])[1];
chk(!!ledeBarwa, `barwa akapitu wprowadzajacego odczytana z arkusza (${ledeBarwa})`);
chk(!!ledeBarwa && new RegExp(`\\.nf p\\{[^}]*color:${ledeBarwa.replace(/[()]/g,'\\$&')}`).test(styl),
    'zdanie pod tytulem ma te sama barwe co akapit wprowadzajacy w dokumentacji');
chk(/text-align:center/.test(styl) && /align-items:center/.test(styl),
    'tresc jest wysrodkowana');

/* 7. Strona bledu nie ma czego szukac w wynikach wyszukiwania. */
chk(/<meta name="robots" content="noindex">/.test(html), 'noindex jest');

/* 8. Bez dlugiego myslnika, jak reszta tekstow. */
chk(!/—/.test(html.replace(/nubook\. — /g,'')), 'zadnego dlugiego myslnika w tresci');

console.log();
console.log(bad ? 'BLEDOW: '+bad : 'WYNIK: OK');
process.exit(bad?1:0);
