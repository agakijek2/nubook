/* Drabina krokow stoi w dwoch miejscach: w skrypcie, skad czyta ja zakladka,
   i w docs/roadmap.md, skad czyta ja kazdy, kto oglada repozytorium. Dwie kopie
   planu rozjezdzaja sie w pierwszym tygodniu, w ktorym nikt nie patrzy - wiec
   porownuje je test, a nie dobre checi. */
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const js  = fs.readFileSync(D+'js/app.js','utf8');
const md  = fs.readFileSync(D+'docs/roadmap.md','utf8');
const html= fs.readFileSync(D+'index.html','utf8');

let bad=0;
const chk=(c,m)=>{ console.log((c?'  OK   ':'  BLAD ')+m); if(!c) bad++; };

/* 1. kroki w skrypcie */
const blok = js.match(/const DS_ROADMAP = \[([\s\S]*?)\n\];/);
chk(!!blok, 'DS_ROADMAP istnieje');
const wSkrypcie = [...(blok?blok[1]:'').matchAll(/\{ n:"(\d\d)", state:"(\w+)", doc:(null|"[^"]+")/g)]
  .map(m=>({n:m[1], state:m[2], doc:m[3]==='null'?null:m[3].slice(1,-1)}));
chk(wSkrypcie.length>0, `kroki odczytane ze skryptu (${wSkrypcie.length})`);

/* 2. kroki w markdownie: wiersze tabeli drabiny */
const wMd = [...md.matchAll(/^\|\s*\**(\d\d)\**\s*\|\s*\**([^|*]+)\**\s*\|\s*\**([^|*]+?)\**\s*\|/gm)]
  .map(m=>({n:m[1], tytul:m[2].trim(), stan:m[3].trim()}));
chk(wMd.length>0, `kroki odczytane z roadmap.md (${wMd.length})`);

/* 3. ten sam zbior numerow, w tej samej kolejnosci */
const a=wSkrypcie.map(s=>s.n).join(','), b=wMd.map(s=>s.n).join(',');
chk(a===b, `ta sama drabina w obu miejscach${a===b?'':`\n         skrypt: ${a}\n         markdown: ${b}`}`);

/* 4. ten sam stan. Markdown pisze go proza, wiec mapujemy na te same cztery. */
const zeSlow = s => /^done/.test(s) ? 'done'
              : /in progress/.test(s) ? 'now'
              : /^next/.test(s) ? 'next' : 'later';
for (const krok of wMd){
  const w = wSkrypcie.find(x=>x.n===krok.n); if(!w) continue;
  chk(zeSlow(krok.stan)===w.state, `krok ${krok.n}: stan zgodny (${w.state})`);
}

/* 5. zamkniety krok ma zapis decyzji, i ten plik istnieje */
for (const s of wSkrypcie){
  if (s.state!=='done'){ chk(s.doc===null, `krok ${s.n}: niezamkniety nie udaje, ze ma zapis`); continue; }
  chk(!!s.doc, `krok ${s.n}: zamkniety ma zapis decyzji`);
  if (s.doc) chk(fs.existsSync(D+'docs/'+s.doc), `krok ${s.n}: plik ${s.doc} istnieje`);
}

/* 6. zakladki i wejscie do nich. Plan i spis dokumentow to dwa tematy, wiec
   stoja jako dwie zakladki, obie przed reszta dokumentacji: czytelniczka, ktora
   wchodzi ze stopki, ma najpierw zobaczyc, co to za projekt i jak daleko jest. */
chk(/id:"roadmap", label:\{en:"Roadmap",pl:"Roadmapa"\}/.test(js), 'zakladka Roadmapa jest w dokumentacji');
chk(/id:"documents", label:\{en:"Documents",pl:"Dokumenty"\}/.test(js), 'zakladka Dokumenty jest w dokumentacji');
const kolejnosc = [...js.matchAll(/\{ group:\{[^}]*\}, id:"([\w-]+)"/g)].map(m=>m[1]);
chk(kolejnosc[0]==='overview' && kolejnosc[1]==='roadmap' && kolejnosc[2]==='documents',
    `Roadmapa i Dokumenty stoja zaraz po Wprowadzeniu (${kolejnosc.slice(0,3).join(' · ')})`);
chk(/dsRoadmapRows\(\)/.test(js), 'zakladka czyta drabine z jednego zrodla, nie przepisuje jej');
/* Spis dokumentow stoi w calosci w swojej zakladce, a nie w polowie w obu. */
const ciala = id => {
  const i = js.indexOf(`id:"${id}"`);
  const nast = kolejnosc[kolejnosc.indexOf(id)+1];
  const j = nast ? js.indexOf(`id:"${nast}"`) : js.length;
  return js.slice(i, j>i? j : js.length);
};
chk((ciala('documents').match(/dsDocTable\(/g)||[]).length===3,
    'wszystkie trzy tabele dokumentow stoja w zakladce Dokumenty');
chk(!/dsDocTable\(/.test(ciala('roadmap')), 'zakladka Roadmapa nie trzyma juz spisu dokumentow');
chk(/#design\/documents/.test(ciala('roadmap')), 'Roadmapa prowadzi do Dokumentow');
chk(/#design\/roadmap/.test(ciala('documents')), 'Dokumenty prowadza do Roadmapy');
chk(/id="lnkAbout" href="#design\/roadmap"/.test(html), 'stopka sklepu prowadzi do tej zakladki');
chk(/aboutProject:"About this project"/.test(js) && /aboutProject:"O tym projekcie"/.test(js),
    'napis w stopce jest w obu jezykach');

/* 7. adres repozytorium jest w jednym miejscu, a nie wklejony przy kazdym kroku */
chk((js.match(/github\.com\/<user>\/<repo>/g)||[]).length===1,
    'adres repozytorium stoi raz, a linki krokow sie z niego sklejaja');

/* 8. spis dokumentow. Martwy link w sekcji, ktora ma dowodzic rzetelnosci, jest
   gorszy niz brak sekcji - wiec kazdy plik musi istniec, w obu jezykach.
   Objetosc tez jest sprawdzana: liczba, ktorej nikt nie weryfikuje, po cichu
   przestaje byc prawdziwa, a czytelniczka otwierajaca cztery tysiace slow
   w przekonaniu, ze to akapit, nie wraca. */
const spis = js.match(/const DS_DOCS = \[([\s\S]*?)\n\];/);
chk(!!spis, 'DS_DOCS istnieje');
const dok = [...(spis?spis[1]:'').matchAll(
  /\{ cat:"(\w+)", file:"([^"]+)"(?:, filePl:"([^"]+)")?, words:(\d+)(?:, wordsPl:(\d+))?/g)]
  .map(m=>({cat:m[1], file:m[2], filePl:m[3]||null, words:+m[4], wordsPl:m[5]?+m[5]:null}));
chk(dok.length>0, `dokumentow w spisie (${dok.length})`);
const licz = p => fs.readFileSync(D+'docs/'+p,'utf8').trim().split(/\s+/).length;
/* Polszczyzna mowi to samo krocej, wiec jedna liczba nie moze byc prawdziwa
   w obu jezykach: kazda kopia ma wlasna, i kazda jest sprawdzana osobno. */
for (const x of dok){
  for (const [p, podane] of [[x.file, x.words], [x.filePl, x.wordsPl ?? x.words]]){
    if (!p) continue;
    if (!fs.existsSync(D+'docs/'+p)){ chk(false, `plik ${p} istnieje`); continue; }
    chk(true, `plik ${p} istnieje`);
    const n = licz(p), blad = Math.abs(n - podane) / podane;
    chk(blad <= 0.05, `${p}: podana objetosc ${podane} wobec ${n} (${Math.round(blad*100)}%)`);
  }
}
/* kazda procedura ma obie wersje jezykowe, bo zakladka wskazuje ta, w ktorej
   czytelniczka akurat jest */
for (const x of dok.filter(d=>d.cat==='procedures'))
  chk(!!x.filePl, `${x.file}: ma odpowiednik po polsku`);
chk(!/decision-architecture/.test(spis?spis[1]:''),
    'zapisy decyzji nie sa wymienione drugi raz');

/* Ksztalt tabeli: nazwa jest nazwa, a nie linkiem - kolumna nazw ma sie czytac
   jako lista tego, co istnieje, a nie jako kolumna rzeczy do klikniecia.
   Wejscie stoi na koncu i pokazuje sciezke, zeby bylo wiadomo, co sie otwiera. */
const tab = js.match(/function dsDocTable\(cat\)\{([\s\S]*?)\n\}/);
chk(!!tab, 'dsDocTable istnieje');
if (tab){
  chk(/<td class="spec doc-name">\$\{x\.t\[/.test(tab[1]),
      'nazwa stoi we wlasnej komorce jako tekst');
  const iNazwa=tab[1].indexOf('doc-name'), iOpis=tab[1].indexOf('${x.d['),
        iLink=tab[1].indexOf('<a class="link');
  chk(iNazwa<iOpis && iOpis<iLink, 'kolejnosc kolumn: nazwa, opis, objetosc, wejscie');
  chk(!/<a[^>]*>\$\{x\.t\[/.test(tab[1]), 'nazwa nie jest linkiem');
  chk(/<code>\$\{plik\}<\/code>/.test(tab[1]), 'wejscie pokazuje sciezke pliku');
  chk(/<th>\$\{L\("Repository","Repozytorium"\)\}<\/th>\s*\n?\s*<\/tr>/.test(tab[1]),
      'ostatnia kolumna nazywa sie Repozytorium');
}

console.log();
console.log(bad ? 'BLEDOW: '+bad : 'WYNIK: OK');
process.exit(bad?1:0);
