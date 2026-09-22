/* Arkusz jest skladniowo caly.

   Zle zamkniety komentarz nie wywala niczego glosno: przegladarka wyrzuca
   regule, ktora stoi po smieciach, i komponent traci tlo albo wypelnienie.
   Tak wlasnie zniknela cala regula .btn-secondary. Ten test na to patrzy. */
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css=fs.readFileSync(D+'css/styles.css','utf8');
let bad=0;
const chk=(ok,co)=>{ console.log((ok?'  OK  ':'  BLAD'),co); if(!ok) bad++; };

/* 1. Komentarze parujace sie co do jednego. */
const otw=(css.match(/\/\*/g)||[]).length, zam=(css.match(/\*\//g)||[]).length;
chk(otw===zam, `komentarze sparowane (${otw} otwarc, ${zam} zamkniec)`);

/* 2. Nic poza komentarzem nie udaje prozy. Po wycieciu komentarzy i wartosci
      w nawiasach zostaja same selektory, deklaracje i klamry - wiec zdanie
      z duzej litery i kropka na koncu znaczy, ze komentarz sie rozszczelnil. */
const goly=css.replace(/\/\*[\s\S]*?\*\//g,'');
const proza=[...goly.matchAll(/^[^{}@;:]*\b[a-z]{3,} [a-z]{3,} [a-z]{3,}[^{}:;]*\.\s*$/gm)]
  .map(m=>m[0].trim()).filter(t=>t.length>30);
chk(proza.length===0, proza.length ? `zdania poza komentarzem: ${JSON.stringify(proza.slice(0,2))}` : 'poza komentarzami nie ma prozy');

/* 3. Klamry sie bilansuja i nigdzie nie schodza ponizej zera. */
let g=0, spadek=false;
for (const ch of goly){ if(ch==='{') g++; else if(ch==='}'){ g--; if(g<0) spadek=true; } }
chk(g===0 && !spadek, `klamry zbilansowane (bilans ${g})`);

/* 4. Reguly, ktore musza istniec i miec tlo oraz wypelnienie - dokladnie to,
      co zniknelo, gdy komentarz sie rozszczelnil. */
for (const sel of ['.btn-primary','.btn-secondary']){
  /* Ten sam selektor stoi w arkuszu kilka razy - jedna regula przypina token,
     druga buduje komponent. Liczy sie to, czy ktorakolwiek go buduje. */
  const re=new RegExp('(?:^|\\})\\s*'+sel.replace('.','\\.')+'\\s*\\{([^{}]*)\\}','gm');
  const ciala=[...goly.matchAll(re)].map(m=>m[1]);
  chk(ciala.length>0, `regula ${sel} istnieje (${ciala.length})`);
  chk(ciala.some(b=>/background\s*:/.test(b)), `${sel} ma tlo`);
  chk(ciala.some(b=>/padding\s*:[^;]*\s[^;]+/.test(b)), `${sel} ma wypelnienie z obiema wartosciami`);
}

console.log(bad ? '\nBLEDOW: '+bad : '\nWYNIK: arkusz jest caly');
process.exit(bad?1:0);
