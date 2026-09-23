/* Karta wklejonego linku psuje sie po cichu jak nic innego w tym projekcie:
   nie widac jej w sklepie, nikt na nia nie patrzy, a zobaczy ja kazdy, komu
   ktos wysle adres. Wystarczy sciezka wzgledna zamiast pelnej albo obrazek o
   zlych wymiarach i zamiast karty jest goly link. */
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const html = fs.readFileSync(D+'index.html','utf8');
const skrypt = fs.readFileSync(D+'build-og.py','utf8');

let bad=0;
const chk=(c,m)=>{ console.log((c?'  OK   ':'  BLAD ')+m); if(!c) bad++; };

const meta = (klucz, atrybut='property') => {
  const m = html.match(new RegExp(`<meta ${atrybut}="${klucz}" content="([^"]*)"`));
  return m ? m[1] : null;
};

/* 1. Komplet znacznikow. Brak ktoregokolwiek nie wywala niczego glosno -
   scraper po prostu pokaze mniej. */
for (const [k,a] of [['og:type','property'],['og:url','property'],
                     ['og:title','property'],['og:description','property'],
                     ['og:image','property'],['og:image:alt','property'],
                     ['twitter:card','name'],['twitter:image','name'],
                     ['description','name']])
  chk(!!meta(k,a), `${k} jest`);

chk(/<link rel="canonical" href="[^"]+">/.test(html), 'canonical jest');

/* 2. Adresy pelne, nie wzgledne. To jest ten blad, ktory wyglada dobrze w
   kodzie i daje pusta karte u odbiorcy. */
for (const [k,a] of [['og:url','property'],['og:image','property'],
                     ['twitter:image','name']]){
  const v = meta(k,a);
  chk(!!v && v.startsWith('https://'), `${k} jest pelnym adresem (${v})`);
}
chk(!/<meta [^>]*content="[^"]*<domain>/.test(html), 'zadna zaslepka domeny nie zostala');

/* 3. Wymiary podane w znacznikach zgadzaja sie z plikiem. Scraper ufa
   znacznikowi, a przycina obrazek. */
const plik = D+'assets/og.png';
chk(fs.existsSync(plik), 'assets/og.png istnieje');
if (fs.existsSync(plik)){
  const b = fs.readFileSync(plik);
  const w = b.readUInt32BE(16), h = b.readUInt32BE(20);   // IHDR
  chk(w===1200 && h===630, `og.png ma 1200x630 (jest ${w}x${h})`);
  chk(String(w)===meta('og:image:width') && String(h)===meta('og:image:height'),
      'og:image:width i height zgadzaja sie z plikiem');
  /* Karta ponizej 300 kB przechodzi przez kazdy scraper; powyzej czesc odpuszcza. */
  chk(b.length < 300*1024, `og.png wazy ${Math.round(b.length/1024)} kB`);
}

/* 4. Favikony: kazda wskazana w markupie musi istniec. */
for (const m of html.matchAll(/<link rel="(?:icon|apple-touch-icon)"[^>]*href="([^"]+)"/g))
  chk(fs.existsSync(D+m[1]), `${m[1]} istnieje`);

/* 5. Claim z rysunku i claim z metadanych to ten sam claim. Dwie kopie zdania
   rozjezdzaja sie przy pierwszej poprawce. */
const zRysunku = (skrypt.match(/CLAIM = \("([^"]+)", "([^"]+)"\)/)||[]).slice(1).join(' ');
chk(!!zRysunku, `claim odczytany ze skryptu (${zRysunku})`);
const tytul = (meta('og:title')||'').toLowerCase();
chk(tytul.includes(zRysunku.toLowerCase().replace(/\.$/,'')),
    `og:title niesie ten sam claim co obrazek`);
chk(meta('og:title')===meta('twitter:title','name'), 'oba tytuly sa te same');
chk(meta('og:description')===meta('twitter:description','name'), 'oba opisy sa te same');

/* 6. Opis na tyle krotki, zeby nie zostal uciety w polowie zdania. */
const op = meta('description','name')||'';
chk(op.length<=200, `description ma ${op.length} znakow (limit 200)`);

/* 7. Skrypt czyta barwy z arkusza, zamiast je miec wpisane. Karta z wpisana
   czernia przezyje zmiane palety i bedzie klamac. */
chk(!/#[0-9a-fA-F]{6}/.test(skrypt.replace(/^\s*#.*$/gm,'')),
    'build-og.py nie ma zadnej barwy wpisanej z reki');
chk(/token\("--nu-/.test(skrypt), 'build-og.py bierze barwy z arkusza');

console.log();
console.log(bad ? 'BLEDOW: '+bad : 'WYNIK: OK');
process.exit(bad?1:0);
