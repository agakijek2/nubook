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
  +'window.__R=()=>render();window.__L=l=>{LANG=l;applyLang();};window.__IDS=motifIds;window.__CLAMP=clampMotifs;');
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
     one view apart. Compared as a set, because the order here is alphabetical
     and the vocabulary's is not. */
  const labels = chips().slice(1).map(c => c.querySelector('.chip-t').textContent).sort();
  const vocab = Object.keys(w.__M).map(id => w.__M[id].chip[lang]).sort();
  chk(labels.join('|') === vocab.join('|'),
      `${lang}: and the chips carry the vocabulary's own names`);
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

/* 5a. Alphabetical, in the language being read. The vocabulary's own order is
   the order the motif layer was written in, which means something to whoever
   wrote it and nothing to anybody scanning a column for a word. */
for (const lang of ['pl','en']){
  w.__L(lang); w.__R(); await sleep(40);
  const names = chips().slice(1).map(c => c.querySelector('.chip-t').textContent);
  const sorted = [...names].sort((a,b) => a.localeCompare(b, lang));
  chk(names.join('|') === sorted.join('|'), `${lang}: in alphabetical order of what the reader reads`);
}
w.__L('pl'); w.__R(); await sleep(40);

/* 5b. Folded to a few rows, with a control to open it. Fifteen options against
   five, five and two: a group that has to be scrolled past hides the three
   below it.
   There is no layout where this suite runs, so the measurement is supplied.
   Without it clampMotifs leaves the row open and hides the control, which is
   the right way round - a clamp computed from a height of zero would hide
   every chip in the column. */
chk(d.getElementById('motifMore').hidden,
    'with nothing measurable, the row stays open and the control stays away');
chk(!row().classList.contains('is-clipped'), 'and nothing is cut off');
/* The case that matters: a row that reports its own height while a chip does
   not. Guarding only on the row count leaves a clamp built from the gaps
   alone - eight pixels - and every chip in the column disappears behind it. */
{
  Object.defineProperty(row(), 'scrollHeight', { value: 400, configurable: true });
  row().style.setProperty('--chip-rows', '3');
  row().style.rowGap = '4px';
  w.__CLAMP();
  chk(!row().classList.contains('is-clipped'),
      'a chip with no height of its own cuts nothing, whatever the row reports');
  chk(d.getElementById('motifMore').hidden, 'and offers nothing to open');
  row().style.removeProperty('--chip-rows'); row().style.rowGap = '';
}

{
  const H = 20, GAP = 4, ROWS = 3;
  const measured = [];
  for (const c of chips()){
    c.getBoundingClientRect = () => ({ height: H, width: 80, top:0, left:0, right:80, bottom:H });
    measured.push(c);
  }
  Object.defineProperty(row(), 'scrollHeight', { value: 6 * H + 5 * GAP, configurable: true });
  row().style.setProperty('--chip-rows', String(ROWS));
  row().style.rowGap = GAP + 'px';
  w.__CLAMP();
  const more = d.getElementById('motifMore');
  chk(!more.hidden, 'measured and too tall: the control appears');
  chk(row().classList.contains('is-clipped'), 'and the row is cut');
  chk(row().style.getPropertyValue('--rows-max') === (ROWS * H + (ROWS-1) * GAP) + 'px',
      `cut to exactly ${ROWS} rows and the gaps between them (${row().style.getPropertyValue('--rows-max')})`);
  chk(more.getAttribute('aria-expanded') === 'false', 'the control says it is shut');
  chk(more.querySelector('.lbl').textContent === w.__I.pl.fMore,
      `and is labelled from the dictionary (${more.querySelector('.lbl').textContent})`);
  /* Opening it is a redraw, because the row is rebuilt on every keystroke and a
     class set outside render() would be wiped by the next one. */
  more.onclick();
  for (const c of chips()) c.getBoundingClientRect = () => ({ height: H, width: 80, top:0, left:0, right:80, bottom:H });
  Object.defineProperty(row(), 'scrollHeight', { value: 6 * H + 5 * GAP, configurable: true });
  row().style.setProperty('--chip-rows', String(ROWS));
  row().style.rowGap = GAP + 'px';
  w.__CLAMP();
  chk(!row().classList.contains('is-clipped'), 'opening it uncuts the row');
  chk(d.getElementById('motifMore').getAttribute('aria-expanded') === 'true', 'and the control says so');
  chk(d.getElementById('motifMore').querySelector('.lbl').textContent === w.__I.pl.fLess,
      'with the label for going back');
  d.getElementById('motifMore').onclick();
  /* A row short enough to stand whole gets no control at all: a button that
     unfolds nothing promises more than there is. */
  for (const c of chips()) c.getBoundingClientRect = () => ({ height: H, width: 80, top:0, left:0, right:80, bottom:H });
  Object.defineProperty(row(), 'scrollHeight', { value: 2 * H + GAP, configurable: true });
  row().style.setProperty('--chip-rows', String(ROWS));
  row().style.rowGap = GAP + 'px';
  w.__CLAMP();
  chk(d.getElementById('motifMore').hidden, 'a row that fits gets no control');
  chk(!row().classList.contains('is-clipped'), 'and is not cut');
  row().style.removeProperty('--chip-rows'); row().style.rowGap = '';
}
/* How many rows lives in the stylesheet, beside the widths that decide how many
   chips fit on one, and differs where the column becomes a sheet over a phone. */
chk(/#motifRow\{--chip-rows:\d\}/.test(nocom), 'the number of rows is set in the stylesheet');
const rowCounts = [...nocom.matchAll(/--chip-rows:\s*(\d+)/g)].map(m => +m[1]);
chk(rowCounts.length >= 2 && new Set(rowCounts).size >= 2,
    `and is a different number on a narrow screen (${rowCounts.join(' / ')})`);
chk(!/--chip-rows/.test(js.replace(/getPropertyValue\("--chip-rows"\)/, '')),
    'the script reads it rather than holding its own');

/* 6. The choice outlives a visit, the way the other filters do - and is checked
   against the vocabulary rather than against the shelf, because a motif with
   nothing on it today is still a motif. */
chk(/motif: \[\.\.\.state\.motif\]/.test(js), 'the choice is saved with the others');
chk(/p\.motif.*MOTIFS\[k\]/.test(js), 'and restored only for motifs the vocabulary holds');

/* 7. Nothing new in the stylesheet, because nothing new was needed: the row is
   the filter row the other three use and the control is the chip. */
const rules = [...nocom.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
  .map(m => m[1].trim().replace(/\s+/g,' '));
/* The filter itself brought nothing: the row is the filter row the other three
   use and the control is the chip. Folding it to a few rows did bring rules -
   three of them, all about the fold - and they are named for what they do
   rather than for this one group, except the row count itself, which is this
   group's alone because it is the only one with fifteen options. */
const own = rules.filter(sel => /motifRow|chip-more/.test(sel));
chk(own.length <= 4, `the fold brought four rules at most (${own.length}: ${own.join(' / ')})`);
chk(!rules.some(sel => /\.motif-/.test(sel)),
    'and no component of its own was invented for it');
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
