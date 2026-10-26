/* The motif as a filter. The shop browses by motif everywhere else - a name
   under a book, an essay in a drawer - and until now the one thing it could not
   do with one was narrow the shelf to it. This suite holds the filter to the
   same rules the other three follow, because a fourth dimension that behaves
   differently is a fourth thing to learn. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css = fs.readFileSync(D+'css/styles.css','utf8');
const js  = fs.readFileSync(D+'js/app.js','utf8');
const html= fs.readFileSync(D+'index.html','utf8');
const nocom = css.replace(/\/\*[\s\S]*?\*\//g,'');

const dom=new JSDOM(html,{runScripts:'outside-only',url:'http://localhost/#/',pretendToBeVisual:true});
const w=dom.window, d=w.document;
w.matchMedia=q=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
w.scrollTo=()=>{}; w.Element.prototype.scrollTo=()=>{};
w.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
w.eval(js+'\n;window.__S=state;window.__B=BOOKS;window.__M=MOTIFS;window.__I=I18N;'
  +'window.__R=()=>render();window.__L=l=>{LANG=l;applyLang();};window.__IDS=motifIds;');
const sleep=ms=>new Promise(res=>setTimeout(res,ms));
let bad=0; const chk=(c,m)=>{ console.log((c?'  OK   ':'  FAIL ')+m); if(!c) bad++; };
await sleep(300);

const row   = () => d.getElementById('motifRow');
const chips = () => [...row().querySelectorAll('.chip')];
const named = t => chips().find(c => (c.querySelector('.chip-t')||{}).textContent === t);
const shown = () => [...d.querySelectorAll('.grid > .card')];
const all   = () => chips()[0];

w.__L('pl'); w.__R(); await sleep(60);

/* 1. The group exists, is labelled, and holds the whole vocabulary. Nothing is
   folded away behind a control: the list of motifs is what this shop is for,
   and an option with nothing behind it says so by going inactive. */
chk(!!row(), 'the filter column has a row for motifs');
chk(chips().length === Object.keys(w.__M).length + 1,
    `every motif is there, with the way back to all of them (${chips().length})`);
for (const lang of ['pl','en']){
  w.__L(lang); w.__R(); await sleep(40);
  chk(d.getElementById('lblMotif').textContent === w.__I[lang].motif,
      `${lang}: the group is named from the dictionary (${d.getElementById('lblMotif').textContent})`);
  /* Named as the vocabulary names them, or the same idea would have two names
     one view apart. */
  const labels = chips().slice(1).map(c => c.querySelector('.chip-t').textContent);
  chk(Object.keys(w.__M).every((id,i) => labels[i] === w.__M[id].chip[lang]),
      `${lang}: and each chip carries the vocabulary's own name`);
}
w.__L('pl'); w.__R(); await sleep(40);

/* 2. The control is the shop's chip, not something that looks like one. */
chk(chips().every(c => c.tagName === 'BUTTON' && c.getAttribute('type') === 'button'),
    'each one is a button, because it acts on the spot');
chk(chips().every(c => c.classList.contains('chip')), 'and the shop\'s own chip');
chk(chips().every(c => c.hasAttribute('aria-pressed')),
    'each says whether it is on, which is the whole of its state');
chk(row().closest('[role="group"]') &&
    row().closest('[role="group"]').getAttribute('aria-labelledby') === 'lblMotif',
    'the row is a group with its label named');

/* 3. It narrows the shelf, and on any of the chosen motifs rather than all of
   them. A book carries two to four out of fifteen, so asking for every selected
   motif at once empties the shelf on the second chip - and pressing two says
   "either", the same thing it says among genres. */
const total = shown().length;
chk(total === w.__B.filter(b => b.ed === w.__S.lang).length, `the whole shelf to begin with (${total})`);
named('wariatka').onclick(); await sleep(40);
const mad = shown().length;
chk(mad > 0 && mad < total, `one motif narrows it (${mad})`);
chk(shown().every(c => w.__IDS(w.__B.find(b => b.id === +c.dataset.id)).includes('madwoman')),
    'and everything left carries that motif');
named('anioł w domu').onclick(); await sleep(40);
chk(shown().length > mad, `a second adds to the first rather than cutting into it (${shown().length})`);
chk(shown().every(c => {
      const ids = w.__IDS(w.__B.find(b => b.id === +c.dataset.id));
      return ids.includes('madwoman') || ids.includes('angel-in-house');
    }), 'everything left carries one of the two');
chk(row().querySelectorAll('[aria-pressed="true"]').length === 2, 'both chips say they are on');

/* 4. The way back, which is the same control the other rows have. */
chk(all().getAttribute('aria-pressed') === 'false', 'with "all" off while anything is chosen');
all().onclick(); await sleep(40);
chk(shown().length === total, 'and "all" puts the shelf back');
chk(all().getAttribute('aria-pressed') === 'true', 'and says so');

/* 5. Counts answer the question the reader is actually asking: how many would I
   get if I pressed this, given what is already chosen elsewhere. */
w.__S.genre.clear(); w.__S.motif.clear(); w.__R(); await sleep(40);
for (const id of Object.keys(w.__M)){
  const c = named(w.__M[id].chip.pl);
  const sup = c.querySelector('sup');
  const real = w.__B.filter(b => b.ed === w.__S.lang && w.__IDS(b).includes(id)).length;
  chk(sup && +sup.textContent === real,
      `${id}: the count is the number of books behind it (${sup && sup.textContent} / ${real})`);
}
/* And an option with nothing behind it goes inactive rather than disappearing,
   so the vocabulary stays whole whatever is selected. */
w.__S.genre.add('Non-fiction'); w.__R(); await sleep(40);
const dead = chips().slice(1).filter(c => c.disabled);
chk(dead.length > 0, `a narrower shelf leaves motifs with nothing behind them (${dead.length})`);
chk(chips().length === Object.keys(w.__M).length + 1, 'and they are still on the page, inactive');
w.__S.genre.clear(); w.__R(); await sleep(40);

/* 6. The choice outlives a visit, the way the other filters do - and is checked
   against the vocabulary rather than against the shelf, because a motif with
   nothing on it today is still a motif. */
chk(/motif: \[\.\.\.state\.motif\]/.test(js), 'the choice is saved with the others');
chk(/p\.motif.*MOTIFS\[k\]/.test(js), 'and restored only for motifs the vocabulary holds');

/* 7. Nothing new in the stylesheet, because nothing new was needed: the row is
   the filter row the other three use and the control is the chip. */
const rules = [...nocom.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
  .map(m => m[1].trim().replace(/\s+/g,' '));
chk(!rules.some(sel => /motifRow|\.motif-/.test(sel)),
    'the motif row brought no rules of its own');
chk(/id="motifRow"/.test(html) && /class="chip-row"/.test(html.slice(html.indexOf('motifRow')-80, html.indexOf('motifRow'))),
    'it is a chip row like the others');

/* 8. And the claim this was built to make true. The case study and the roadmap
   both say a motif is a filter, a name on a product page and an essay in a
   drawer - the same thing at three magnifications. Two of the three were there
   already; this is the third. */
chk(/buildChips\("motifRow"/.test(js), 'the shop can narrow the shelf to a motif');
chk(/openMotif\(/.test(js), 'name a motif on a product page');
chk(/drawerMotif/.test(js), 'and open the essay behind it');

console.log();
console.log(bad ? 'FAILURES: '+bad : 'RESULT: OK');
process.exit(bad?1:0);
