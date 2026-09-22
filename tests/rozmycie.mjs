/* Trzy zmiany designowe naraz: skala rozmycia, rozmycie pod warstwa modalna,
   wejscie kafli z rozmyciem i powrot ze szczegolow jako odwrocone otwarcie.
   Test pilnuje rzeczy, ktorych nie widac az do chwili, gdy ktos je zepsuje:
   ze zadna sila rozmycia nie jest wpisana recznie, ze oba tla modalne robia
   to samo, i ze powrot ma wszystkie trzy zabezpieczenia. */
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css=fs.readFileSync(D+'css/styles.css','utf8');
const js =fs.readFileSync(D+'js/app.js','utf8');
const nocom=css.replace(/\/\*[\s\S]*?\*\//g,'');
const root=nocom.match(/:root\s*\{([\s\S]*?)\n\}/)[1];

let bad=0;
const chk=(c,m)=>{ console.log((c?'  OK   ':'  BLAD ')+m); if(!c) bad++; };

/* regula szuka selektora i klamry bez wzgledu na lamanie linii, bo selektory
   w tym arkuszu bywaja rozpisane na kilka wierszy */
const regula = sel => {
  const re=new RegExp('(^|[},])\\s*'+sel.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\s*\\{([^}]*)\\}','m');
  const m=nocom.match(re);
  return m ? m[2].replace(/\s+/g,' ').trim() : null;
};

/* 1. skala istnieje i jest trzystopniowa */
const stopnie=['--nu-blur-sm','--nu-blur-md','--nu-blur-lg','--nu-blur-xl'];
const wartosci={};
for (const t of stopnie){
  const m=root.match(new RegExp(t+'\\s*:\\s*([^;]+);'));
  chk(!!m, `stopien ${t} zadeklarowany`);
  if (m) wartosci[t]=m[1].trim();
}
const px=t=>parseFloat(wartosci[t]);
const rosnie=stopnie.every((t,i)=>i===0 || px(stopnie[i-1])<px(t));
chk(rosnie, `skala rosnie: ${stopnie.map(t=>wartosci[t]).join(' < ')}`);

/* 2. zadna sila rozmycia nie jest wpisana recznie. blur(0) to zero, nie sila. */
const reczne=[...nocom.matchAll(/blur\(\s*([0-9.]+)(px|rem|em)\s*\)/g)].filter(m=>parseFloat(m[1])!==0);
chk(reczne.length===0, `zadna sila rozmycia nie jest wpisana recznie${reczne.length?' ('+reczne.map(m=>m[0]).join(', ')+')':''}`);
chk(!/--bs-blur/.test(css), 'lokalna zmienna --bs-blur zdjeta na rzecz tokenu');

/* 3. kazdy stopien ma uzycie: skala bez uzycia to martwy token */
for (const t of stopnie)
  chk(new RegExp('blur\\(var\\('+t+'\\)\\)').test(nocom), `${t} jest uzyty`);

/* 4. oba tla modalne zaslaniaja tak samo: rozmycie dochodzi razem z przyciemnieniem,
   a nie skokiem pod przezroczystym jeszcze tlem */
for (const sel of ['.sheet-backdrop','.drawer-backdrop']){
  const spoczynek=regula(sel), otwarte=regula(sel+'.open');
  chk(/backdrop-filter\s*:\s*blur\(\s*0\s*\)/.test(spoczynek||''), `${sel} startuje bez rozmycia`);
  chk(/transition\s*:[^;]*backdrop-filter/.test(spoczynek||''),     `${sel} przechodzi rozmyciem, nie skokiem`);
  chk(/backdrop-filter\s*:\s*blur\(var\(--nu-blur-md\)\)/.test(otwarte||''), `${sel}.open bierze --nu-blur-md`);
  chk(/-webkit-backdrop-filter/.test(otwarte||''), `${sel}.open ma odmiane webkit`);
}

/* 5. wejscie kafli: rozmycie w klatce poczatkowej, ustepuje przy reduced motion */
const klatki=nocom.match(/@keyframes cardIn\s*\{([\s\S]*?)\n\s*\}/);
chk(!!klatki && /blur\(var\(--nu-blur-sm\)\)/.test(klatki[1]), 'cardIn zaczyna od --nu-blur-sm');
chk(!!klatki && /blur\(0\)/.test(klatki[1]),                   'cardIn konczy sie na ostrym');
chk(!!klatki && !/translateY\(\s*\d/.test(klatki[1]),          'cardIn nie ma odleglosci wpisanej recznie');
const redukcja=nocom.match(/@media\s*\(prefers-reduced-motion:reduce\)\s*\{([^}]*\.grid\.mosaic[^}]*)\}/);
chk(!!redukcja && /animation\s*:\s*none/.test(redukcja[1]), 'mozaika ustepuje przy reduced motion');
/* krzywa powiekszenia ma cztery piate drogi za soba w pierwszej cwiartce czasu:
   dobra dla kafla lecacego przez ekran, zla dla rozmycia, ktore ma byc widziane */
const mozaika=regula('.grid.mosaic .card');
chk(!!mozaika, 'regula mozaiki znaleziona');
chk(/animation\s*:[^;]*ease-out/.test(mozaika||''), 'mozaika idzie krzywa ease-out');
chk(!/--nu-ease-zoom/.test(mozaika||''),            'mozaika nie idzie krzywa powiekszenia');

const mos=js.match(/if \(firstVisit\)\{([\s\S]*?)\n  \}/);
chk(!!mos && /motionMs\("--nu-motion-stagger"\)/.test(mos[1]),
    'starty kart nadal rozkladaja sie w --nu-motion-stagger');
chk(!!mos && !/\+ \d{2,}/.test(mos[1]), 'domkniecie mozaiki nie ma liczby wpisanej recznie');

/* 5b. karta ksiazki: to, co ksiazka ma do powiedzenia, wchodzi z rozmycia tak
   samo jak linie ksiegarki - tym samym stopniem, bo to tez sa slowa */
/* Slowa biora stopien slow, a przycisk stopien obrazu: pelny ksztalt rozmyty
   tak mocno jak zdanie rozlewa sie w plame zamiast miekngc. */
chk(/filter:blur\(var\(--nu-blur-lg\)\)/.test(regula('.p-info.p-enter')||''),
    'informacje o ksiazce: wejscie ze stopnia slow');
chk(/filter:blur\(var\(--nu-blur-sm\)\)/.test(regula('.p-cta.p-enter-cta')||''),
    'przycisk: wejscie ze stopnia obrazu, bo jest ksztaltem, nie zdaniem');
for (const [sel, nazwa] of [['.p-info.p-enter-in','informacje'],
                            ['.p-cta.p-enter-cta-in','przycisk']]){
  const r=regula(sel);
  chk(/filter:blur\(0\)/.test(r||'') && /transition:[\s\S]*filter/.test(r||''),
      `${nazwa}: wyostrzenie przejsciem, nie skokiem`);
}
/* Jedna odleglosc na cale wejscie: linia ksiegarki, karta w siatce, tytul
   i przycisk podnosza sie o ten sam stopien, wiec jedna odleglosc znaczy jedno. */
for (const sel of ['.p-info.p-enter','.p-cta.p-enter-cta']){
  const r=regula(sel)||'';
  chk(/transform:translateY\(var\(--nu-space-nano\)\)/.test(r), `${sel}: podnosi sie o stopien ze skali`);
}
for (const sel of ['.p-info.p-enter-in','.p-cta.p-enter-cta-in']){
  const r=regula(sel)||'';
  chk(/transform:none/.test(r) && /transition:[\s\S]*transform/.test(r),
      `${sel}: dochodzi na miejsce przejsciem`);
}

/* 6. blok u gory okna: rampa siega w tresc tylko wtedy, gdy cos za nia
   przechodzi, a kolumna filtrow zatrzymuje sie na krawedzi bloku i stoi nad
   rampa, zamiast pod nia wpadac */
const zaslona=regula('.masthead-veil'), zaslonaPo=regula('body.is-scrolled .masthead-veil');
chk(/bottom:\s*0/.test(zaslona||''),  'w spoczynku rampa nie siega ponizej bloku');
chk(/bottom:\s*calc\(-1 \* var\(--nu-space-max\)\)/.test(zaslonaPo||''),
    'rampa otwiera sie dopiero, gdy strona jest przewinieta');
chk(/transition:\s*bottom/.test(zaslona||''), 'otwarcie rampy jest przejsciem, nie skokiem');
chk(/markScroll/.test(js) && /addEventListener\("scroll", markScroll/.test(js),
    'stan przewiniecia jest odczytywany, a nie zgadywany');
const filtry=regula('.filters');
chk(/top:\s*var\(--nu-masthead-height\)/.test(filtry||''),
    'filtry zatrzymuja sie na krawedzi bloku, w jednej linii z siatka');
chk(!/masthead-height\)\s*\+/.test(filtry||''),
    'filtry nie sa spychane nizej niz ich wlasne miejsce w ukladzie');
chk(/z-index:\s*81/.test(filtry||''), 'filtry stoja nad rampa, wiec ich nie rozmywa');

/* 6b. dymek ksiegarki nie wchodzi pod to, co przyklejone u gory. Rosnie od dolu,
   wiec bez pulapu wyjezdza gorna krawedzia za blok razem z wlasnym zamknieciem. */
chk(/--bs-headroom:\s*calc\(var\(--nu-masthead-height\)/.test(regula('.bs')||''),
    'pulap dymka liczy sie z blokiem u gory');
chk(/var\(--bs-headroom\)/.test(regula('.bs-panel')||''),
    'i dymek ten pulap stosuje');
chk(/--bs-headroom:\s*var\(--nu-space-medium\)/.test(nocom),
    'na telefonie pulap to samo powietrze, bo nic nie jest tam przypiete');
chk(/overflow-y:\s*auto/.test(regula('.bs-list')||''),
    'nadmiar bierze lista propozycji, a nie gorna krawedz');

/* 7. odwracanie napisu i wyszukiwarki pod blokiem. Dziala tylko przy
   przewinieciu i tylko na bezczynnym polu: wpisane zapytanie ma sie czytac jako
   tekst, a nie jako efekt. */
const napis=regula('body.is-scrolled .logo .strap');
chk(/mix-blend-mode:\s*difference/.test(napis||''), 'napis przy znaku odwraca sie przy przewinieciu');
chk(/color:\s*var\(--nu-fg-secondary\)/.test(napis||''),
    'odwraca sie ta sama wartoscia, ktora ma w spoczynku');
chk(!regula('.logo .strap')?.includes('mix-blend-mode'),
    'w spoczynku napis nie odwraca sie wcale');
/* Wyszukiwarka celowo nie reaguje na przewiniecie. Probowalismy odwracania
   i kreski przepuszczajacej; ani jedno, ani drugie nie dalo czytelnosci, ktorej
   to pole potrzebuje, a kazda proba dokladala regule do komponentu, ktory ma byc
   prosty. Kolor ikony, podpowiedzi i kreski jest jeden, przewiniete czy nie. */
chk(!/is-scrolled[^{]*search-wrap/.test(nocom),
    'wyszukiwarka nie ma osobnych regul na przewiniecie');
chk(!/--nu-border-sheer/.test(css), 'token kreski przepuszczajacej zdjety razem z nia');
/* Probowalismy tez wlasnego podloza pod polem. Zdjete razem z reszta: pole
   wyszukiwania nie ma niczego, co odpowiada na przewijanie ani na to, co za nim
   przechodzi. */
const html=fs.readFileSync(D+'index.html','utf8');
chk(!/search-bed/.test(css) && !/search-bed/.test(html), 'podloze pola zdjete');
chk(!/--nu-bg-search/.test(css), 'token podloza zdjety razem z nim');
/* Belka nad siatka - filtry, wyszukiwarka, sortowanie - zostaje na swoim miejscu
   w ukladzie, ale poza przyklejonym blokiem: pole sluzy do pisania, a pole jadace
   nad ruchoma trescia walczy o kazde slowo, ktore pokazuje. Przyklejone zostaja
   promocja, naglowek i powrot z karty ksiazki. */
const blok=html.slice(html.indexOf('<div class="masthead"'), html.indexOf('/.masthead'));
chk(!/id="shopbar"/.test(blok), 'belka nad siatka stoi poza przyklejonym blokiem');
chk(/id="productbar"/.test(blok), 'belka powrotu zostaje w bloku');
chk(/class="promo"/.test(blok) && /<header>/.test(blok), 'promocja i naglowek zostaja w bloku');
chk(/class="shopbar"[\s\S]{0,700}search-wrap/.test(html),
    'wyszukiwarka stoi w belce tam, gdzie stala');
chk(html.indexOf('id="shopbar"') < html.indexOf('class="shop" id="shop"'),
    'belka stoi nad siatka');

/* 8. powrot do siatki */
chk(/data-id="\$\{b\.id\}"/.test(js), 'karta w siatce niesie data-id, po ktorym powrot ja znajduje');
chk(/\.card\[data-id="\$\{from\.id\}"\]\s*\.tile/.test(js), 'powrot szuka kafla po tym samym atrybucie');
const powrot=js.match(/function playBackTransition\(\)\{([\s\S]*?)\n\}/);
chk(!!powrot, 'playBackTransition istnieje');
if (powrot){
  chk(/prefers-reduced-motion/.test(powrot[1]), 'powrot ustepuje przy reduced motion');
  chk(/if \(!tile\) return/.test(powrot[1]),    'powrot odpuszcza, gdy ksiazki nie ma juz w siatce');
  chk(/motionMs\("--nu-motion-slower"\)/.test(powrot[1]), 'lot bierze czas ze skali, nie z liczby');
  /* Tekst i tlo znikaja razem z przelaczeniem widoku, a nie wlasnym wyjsciem
     przed lotem: czytelniczka powiedziala juz, gdzie chce byc, wiec osobne
     zegnanie sie karty czyta sie jako czekanie, nie jako odejscie. */
  chk(!/const sheet/.test(powrot[1]) && !/from\.view/.test(js),
      'karta nie ma wlasnego wyjscia przed lotem');
  chk(!/motionMs\("--nu-motion-base"\)/.test(powrot[1]),
      'i nie ma juz drugiego czasu na to wyjscie');
  chk(/const to = tile\.getBoundingClientRect\(\)/.test(powrot[1]),
      'cel mierzony po przelaczeniu widoku i przywroceniu przewiniecia');
  chk(/if \(!to\.width \|\| !to\.height\)/.test(powrot[1]),
      'lot odpuszcza, gdy cel zdazyl zniknac');
  chk(/motionCurve\("--nu-ease-zoom"\)/.test(powrot[1]), 'powrot leci ta sama krzywa co otwarcie');
  /* packshot musi stac na ekranie od pierwszej klatki. Postawiony dopiero po
     zgasnieciu tekstu znika na czas tego zgasniecia i wraca, zeby polecziec -
     i to wlasnie widac jako skok. */
  /* Kolumna filtrow stoi o stopien nad blokiem, wiec stoi tez nad lotem.
     Na czas powrotu oddaje ten stopien - inaczej packshot leci za nia. */
  chk(/classList\.add\("is-flying"\)/.test(powrot[1]), 'na czas lotu kolumna filtrow ustepuje');
  chk(/classList\.remove\("is-flying"\)/.test(powrot[1]), 'i odzyskuje swoje miejsce po locie');
  chk(powrot[1].indexOf('add("is-flying")') < powrot[1].indexOf('clone.animate'),
      'ustepuje zanim lot ruszy');
  chk(/z-index:auto/.test(regula('body.is-flying .filters')||''),
      'arkusz wie, co znaczy lot dla kolumny filtrow');
}
/* Sklep sam stawia czytelniczke w widoku, wiec przywracanie przewiniecia przez
   przegladarke jest drugim, pozniejszym skokiem - i pada juz po tym, jak route
   zmierzyl, gdzie co stoi. */
chk(/history\.scrollRestoration = "manual"/.test(js),
    'przywracanie przewiniecia nalezy do sklepu, nie do przegladarki');
/* Pomiar bierze sam packshot: reszta widoku nie odchodzi osobno, wiec nie ma
   czego kopiowac. */
const pomiar=js.match(/function captureProduct\(id\)\{([\s\S]*?)\n\}/);
chk(!!pomiar, 'captureProduct istnieje');
if (pomiar){
  chk(/\.p-tile/.test(pomiar[1]) && /cloneNode\(true\)/.test(pomiar[1]),
      'pomiar bierze packshot i jego kopie');
  chk(!/productEl\.cloneNode/.test(pomiar[1]),
      'i nic poza nim, bo reszta widoku nie odchodzi osobno');
}
/* pomiar musi paść przed schowaniem widoku produktu - inaczej nie ma czego mierzyc */
const trasa=js.match(/function route\(\)\{([\s\S]*?)\n\}/);
if (trasa){
  const iPomiar=trasa[1].indexOf('captureProduct');
  const iSchow=trasa[1].indexOf('productEl.hidden');
  chk(iPomiar>-1 && iSchow>-1 && iPomiar<iSchow, 'pomiar karty produktu pada przed jej schowaniem');
  chk(trasa[1].indexOf('playBackTransition') > trasa[1].indexOf('scrollTo'),
      'lot wraca dopiero po przywroceniu przewiniecia siatki');
}

/* 7. dokumentacja nadaza: kazdy stopien opisany, oba nowe przejscia w tabeli */
chk(/--nu-blur-sm/.test(js) && /--nu-blur-md/.test(js) && /--nu-blur-lg/.test(js),
    'wszystkie trzy stopnie wymienione w dokumentacji');
chk(/Powrót do siatki/.test(js),    'zakladka Ruch ma wiersz o powrocie');
chk(/Zasłonięcie widoku/.test(js),  'zakladka Ruch ma wiersz o zaslonieciu widoku');
chk(/\["blur",\s*\["--nu-blur"\]\]/.test(js), 'spis tokenow ma wlasna kategorie na rozmycie');

console.log();
console.log(bad ? 'BLEDOW: '+bad : 'WYNIK: OK');
process.exit(bad?1:0);
