/* Dwie usterki znalezione dopiero na zywym telefonie, obie tego samego rodzaju:
   regula napisana dla jednego widoku obowiazywala w dwoch, a wartosc dobra do
   jednego celu zostala uzyta do drugiego. Zaden z pozostalych zestawow ich nie
   lapal, bo jsdom nie liczy ukladu i nie zna szerokosci ekranu - wiec te
   sprawdzenia czytaja reguly, nie piksele. */
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css = fs.readFileSync(D+'css/styles.css','utf8');
const js  = fs.readFileSync(D+'js/app.js','utf8');

let bad=0;
const chk=(c,m)=>{ console.log((c?'  OK   ':'  BLAD ')+m); if(!c) bad++; };

/* Komentarze wycinamy przed szukaniem regul: zdanie w komentarzu potrafi
   wygladac jak selektor i dac falszywy wynik w obie strony. */
const bezKomentarzy = css.replace(/\/\*[\s\S]*?\*\//g, '');

/* --- 1. Koszyk na telefonie ma czym przejsc dalej -------------------------
   Przycisk w podsumowaniu jest chowany, bo w kasie powtarzalby submit z
   przyklejonego paska. W koszyku zadnego formularza nie ma, a paska tez - wiec
   regula bez zawezenia zostawiala telefon bez jakiejkolwiek drogi dalej. */
const chowa = [...bezKomentarzy.matchAll(/([^{}]*\.co-side\s+\.order-btn)\s*\{([^}]*)\}/g)]
  .map(m => ({ sel: m[1].trim(), tresc: m[2] }))
  .filter(r => /display\s*:\s*none/.test(r.tresc));
chk(chowa.length===1, `dokladnie jedna regula chowa przycisk podsumowania (${chowa.length})`);
for (const r of chowa)
  chk(/#checkout/.test(r.sel),
      `regula chowajaca przycisk dotyczy tylko kasy (${r.sel})`);

/* Sam przycisk musi istniec w obu widokach - inaczej zawezenie niczego nie da. */
const widok = (nazwa) => {
  const i = js.indexOf(`function ${nazwa}(`);
  return i<0 ? '' : js.slice(i, js.indexOf('\n}', i));
};
for (const f of ['renderCartPage','renderCheckout'])
  chk(/class="btn-primary order-btn"/.test(widok(f)), `${f} rysuje przycisk dalej`);

/* Pasek na dole pojawia sie tylko w kasie - to jest ta polowa ukladu, przez
   ktora zawezenie wyzej jest konieczne. Gdyby kiedys pokazal sie takze w
   koszyku, to sprawdzenie ma o tym powiedziec, a nie milczec. */
chk(/coBarEl\.hidden\s*=\s*view\s*!==\s*"checkout"/.test(js),
    'przyklejony pasek nalezy do kasy i tylko do niej');

/* --- 2. Arkusz filtrow przylega do belki ---------------------------------
   Wysokosc belki jest mierzona i zaokraglana w gore do czterech pikseli, zeby
   prześwit pod trescia nigdy nie byl za maly. Ta sama wartosc uzyta do
   posadzenia arkusza zostawiala pod nim do czterech pikseli tla strony. */
chk(/--nu-mobar-height-exact/.test(js), 'skrypt zapisuje niezaokraglona wysokosc belki');
chk(/getBoundingClientRect\(\)\.height/.test(js),
    'niezaokraglona wysokosc liczona z prostokata, nie z offsetHeight');

const arkuszFiltrow = (bezKomentarzy.match(/body\.fsheet \.shop \.filters\{([^}]*)\}/)||['',''])[1];
chk(!!arkuszFiltrow, 'regula arkusza filtrow istnieje');
chk(/bottom:var\(--nu-mobar-height-exact\)/.test(arkuszFiltrow),
    'arkusz siada na niezaokraglonej wysokosci belki');
/* Token ma wartosc startowa w :root, tak jak jego zaokraglony brat - skrypt ja
   nadpisuje przy pierwszym pomiarze, ale arkusz nie moze zostac bez niczego. */
chk(/--nu-mobar-height-exact:var\(--nu-space-max\)/.test(bezKomentarzy),
    'token ma wartosc startowa w :root');

/* Przeswit pod trescia zostaje przy wartosci z siatki: tam zaokraglenie w gore
   jest zaleta, bo belka nie moze przyciac tego, co pod nia. */
chk(/body\.has-mobar\{padding-bottom:var\(--nu-mobar-height\)\}/.test(bezKomentarzy),
    'przeswit pod trescia dalej bierze wartosc z siatki');

console.log();
console.log(bad ? 'BLEDOW: '+bad : 'WYNIK: OK');
process.exit(bad?1:0);
