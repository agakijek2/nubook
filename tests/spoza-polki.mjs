/* A title the shop does not stock, found by a query. The bookseller speaks in
   the empty grid, and everything the shelf guarantees has to hold there too:
   the offer resolved against stock, the sentence filled in both languages, the
   covers real, the way out still reachable.
   Opened with ?bs=slow, the only mode in which the waiting state exists - the
   texts are written in advance, so in the ordinary mode there is nothing to
   wait for. Durations shortened so the suite takes a second. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css = fs.readFileSync(D+'css/styles.css','utf8');
const js  = fs.readFileSync(D+'js/app.js','utf8');
const nocom = css.replace(/\/\*[\s\S]*?\*\//g,'');

const dom=new JSDOM(fs.readFileSync(D+'index.html','utf8'),
  {runScripts:'outside-only',url:'http://localhost/?bs=slow#/',pretendToBeVisual:true});
const w=dom.window, d=w.document;
w.matchMedia=q=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
w.scrollTo=()=>{}; w.Element.prototype.scrollTo=()=>{};
w.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
const r=d.documentElement.style;
[['--nu-motion-instant','2ms'],['--nu-motion-quick','4ms'],['--nu-motion-base','4ms'],
 ['--nu-motion-slow','4ms'],['--nu-motion-slower','4ms'],['--nu-motion-hold','40ms'],
 ['--nu-motion-stagger','10ms']].forEach(([k,v])=>r.setProperty(k,v));
w.eval(js+'\n;window.__I=I18N;window.__O=OFFSHELF;window.__M=MOTIFS;window.__B=BOOKS;'
  +'window.__L=l=>{LANG=l};window.__S=()=>syncSearch();window.__F=()=>searchInput;'
  +'window.__CUR=()=>bsCurrent;window.__CLOSE=closeDrawer;window.__OFF=offshelfFor;window.__RP=renderProduct;window.__FROM=()=>bsFrom;window.__NAME=bsName;window.__PICK=bsPick;');
const sleep=ms=>new Promise(res=>setTimeout(res,ms));
let bad=0; const chk=(c,m)=>{ console.log((c?'  OK   ':'  FAIL ')+m); if(!c) bad++; };
const titleIn=(b,lang)=>lang==='pl'?b.tp:b.t;
const nav=async h=>{ w.location.hash=h; w.dispatchEvent(new w.Event('hashchange')); await sleep(150); };

/* The app finishes its own start asynchronously; driving the search before that
   reaches a grid about to be rebuilt. */
await sleep(300);
const type = async q => { w.__F().value=q; w.__S(); await sleep(60); };

/* 1. The register. One entry, and it has to stay one: a second catalogue
   without covers, prices or pages is a different thing from a showcase, and
   whoever adds the fifth entry should have to come here and say so. */
chk(w.__O.length===1, `one showcase entry, not a second catalogue (${w.__O.length})`);
for (const e of w.__O){
  chk(!!e.ag, `${e.t}: the author's name in the genitive, for the Polish sentence`);
  chk(e.m.length>0 && e.m.every(id=>!!w.__M[id]),
      `${e.t}: every motif is one the motif layer holds (${e.m.join(', ')})`);
  chk(e.m.length>=1, `${e.t}: at least one motif to offer on`);
  chk(e.offer.length>=2, `${e.t}: more than one proposal (${e.offer.length})`);
  /* The count in the sentence comes from the proposals that survived the shelf,
     so a title gone out of stock changes the sentence with it. A number written
     into the copy would quietly start lying the first time one did. */
  chk(!!w.__I.pl.bsCount[e.offer.length] && !!w.__I.en.bsCount[e.offer.length],
      `${e.t}: both dictionaries can count to ${e.offer.length}`);
  for (const o of e.offer){
    const b=w.__B.find(x=>x.t===o.title);
    chk(!!b, `${e.t} → ${o.title}: a title the shop holds`);
    if (!b) continue;
    /* The whole claim of the section. A proposal sharing no motif with the book
       asked for is a recommendation with nothing behind it, and the sentence
       above it would be a lie in two languages. */
    const shared=e.m.filter(id=>(b.m||[]).includes(id));
    chk(shared.length>0, `${e.t} → ${o.title}: shares a motif (${shared.join(', ')})`);
    for (const lang of ['pl','en']){
      chk(typeof o.text[lang]==='string' && o.text[lang].length>200,
          `${e.t} → ${o.title}: an answer written in ${lang}`);
      /* One line, written to be read before anybody decides to open the long
         one, and all of them the same height: the cards stand side by side in
         the grid, so a sentence a line longer than its neighbours puts one
         control below the others. Measured as it reaches the page, without the
         markup, because a title in italic is tags and not letters. */
      const seen = (() => { const el=d.createElement('div'); el.innerHTML=o.lead ? o.lead[lang] : ''; return el.textContent.length; })();
      chk(o.lead && typeof o.lead[lang]==='string' && seen>95 && seen<135,
          `${e.t} → ${o.title}: a line in ${lang} of the same height as the others (${seen})`);
      chk(o.lead && !o.lead[lang].includes('*'),
          `${e.t} → ${o.title}: ${lang} marks a title with a tag here too`);
      /* Whoever is named from the book the reader was looking for is named with
         it: she is looking that book up in order to buy it, so a character out
         of it is a stranger. */
      /* Matched on the stem, because Polish declines a name: "Septimusie" is
         Septimus, and a pattern anchored at the end of the word skips the line
         instead of checking it - a check that passes by not applying. */
      const who = (o.lead[lang].match(/\b(Clariss\w*|Septimus\w*|Peter Walsh|Sally)/g)||[]);
      if (who.length)
        chk(new RegExp(lang==='pl' ? e.tp.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') : e.t).test(o.lead[lang]),
            `${e.t} → ${o.title}: ${lang} names ${who[0]} with the book they come from`);
      /* An answer is written as markup and arrives as markup: it is put on the
         page by the typing, which touches text nodes and leaves tags alone.
         The asterisk that marks a title for italic belongs to the dictionary,
         where sentences are escaped on the way out - here it reaches the page
         as two asterisks around a title. */
      chk(!o.text[lang].includes('*'),
          `${e.t} → ${o.title}: ${lang} marks a title with a tag, not an asterisk`);
    }
  }
}

/* 2. Every way of typing the title that would find a book finds this: the entry
   carries the shelf's own fields, so matchesQuery does the work and diacritics,
   case and both languages come with it. */
for (const q of ['Dalloway','Mrs Dalloway','Pani Dalloway','pani dalloway','DALLOWAY'])
  chk(!!w.__OFF(q), `"${q}" reaches the entry`);
chk(!w.__OFF('Dallowayy'), 'a near miss does not');
/* Below the threshold the shelf stands whole, so there is no empty state and
   nothing for her to speak into. The register is held to the same number
   rather than to its own: two thresholds for one idea part company the first
   time either is tuned. */
chk(!w.__OFF('D') && !w.__OFF('Da'), 'nor a query shorter than the shop narrows on');
chk(!!w.__OFF('Dal'), 'and the third character is where it starts');

/* 3. In the grid, in both languages. */
for (const lang of ['pl','en']){
  w.__L(lang);
  await type('Dalloway');
  const sec=d.querySelector('.empty .bs-grid .bs-cell');
  chk(!!sec, `${lang}: she speaks in the empty grid`);
  /* Her cell and the proposals stand on the shelf's own raster, so the covers
     are the size the reader was scanning a moment ago. A block of her own
     laid over the grid would have said the opposite of what she is saying. */
  chk(!!d.querySelector('.empty .bs-grid'), `${lang}: laid out on the grid's raster`);
  if (!sec) continue;
  const say=d.querySelector('.bs-say');
  /* A placeholder left standing is the failure this guards: the sentence is
     assembled from three substitutions, and one missed shows as %a or %m on the
     page in the language nobody is reading at the time. */
  chk(!/%[asm]\b|%[asm]$/.test(say.textContent), `${lang}: every placeholder is filled`);
  chk(!say.textContent.includes('*'), `${lang}: no asterisk reaches the page`);
  chk(!/&[a-z]+;/.test(say.textContent), `${lang}: nor an entity, the sentence being escaped on the way`);
  /* A motif she names is the control a motif is everywhere else: the same
     ghost button opening the same drawer onto the same essay. She is naming two
     ideas the reader may not have a word for, so this is the one place where
     leaving them as plain words would cost the most. */
  /* The motifs she names stand one to a line under the sentence rather than in
     a row inside it: there they were two links among forty words, here they are
     the two things on offer. The sentence therefore ends at the colon and
     carries no names of its own. */
  const list=sec.querySelector('.bs-motifs');
  chk(!!list && list.tagName==='UL', `${lang}: the motifs stand as a list`);
  chk(list && list.children.length===w.__O[0].m.length,
      `${lang}: one line each (${list && list.children.length})`);
  chk([...list.children].every(li=>li.tagName==='LI' && li.children.length===1),
      `${lang}: and each line holds its control and nothing else`);
  chk(say.textContent.trim().endsWith(':'), `${lang}: the sentence hands over at the colon`);
  const mBtns=[...list.querySelectorAll('button.btn-ghost')];
  chk(mBtns.length===2, `${lang}: both motif names are controls (${mBtns.length})`);
  const labels=mBtns.map(b=>(b.querySelector('.lbl')||b).textContent);
  for (const id of w.__O[0].m)
    chk(labels.includes(w.__M[id].chip[lang]),
        `${lang}: ${id} is named as the motif layer names it`);
  chk(mBtns.every(b=>b.getAttribute('aria-haspopup')==='dialog'),
      `${lang}: and says it opens a dialog, as the motifs on a product page do`);
  chk(w.__O[0].m.every((id,i)=>(mBtns[i].getAttribute('onclick')||'')===`openMotif('${id}')`),
      `${lang}: each one opens its own motif`);
  /* And the title the way the shop writes a title: italic in English, quotation
     marks in Polish. */
  const em=[...say.querySelectorAll('em')].length;
  chk(lang==='en' ? em===1 : em===0, `${lang}: the title is set the shop's way (${em} em)`);

  const props=[...d.querySelectorAll('.bs-grid .card')];
  chk(props.length===w.__O[0].offer.length,
      `${lang}: every proposal is on the page (${props.length})`);
  /* And the sentence says how many, in words, from that same number. */
  chk(say.textContent.includes(w.__I[lang].bsCount[props.length]),
      `${lang}: and the sentence counts them (${w.__I[lang].bsCount[props.length]})`);
  /* The proposal is the shelf's own card and not a near-copy of one: the same
     packshot, the same badge, the same title and price in the same places. */
  chk(props.every(c=>c.querySelector('.tile') && c.querySelector('.meta .price')),
      `${lang}: each proposal is the shelf's card, packshot and price included`);
  /* A sentence of her own on each card, and the control after it. The card
     says what the book is; this says what it has to do with the one that was
     searched for, which is the one thing the shelf's card cannot say. */
  chk(props.every(c=>{
        const lead=c.querySelector('.bs-b-lead');
        return lead && lead.textContent.trim().length>40;
      }), `${lang}: each card says how it answers the search`);
  /* In that order, and that is the whole card: the book, then the one line
     about why it is standing here. Nothing else, because this view is read
     across the three and a control on each would be three ways out of it. */
  chk(props.every(c=>{
        const k=[...c.children].map(x=>x.className||x.tagName.toLowerCase());
        return k[k.length-1]==='bs-b-lead';
      }), `${lang}: the sentence is the last thing on the card`);
  const covers=[...d.querySelectorAll('.bs-grid .card .cover')];
  chk(covers.length===w.__O[0].offer.length, `${lang}: each proposal shows its cover`);
  /* The cover is the shop's own component, so an image cover arrives as a file
     that exists and a drawn one as the drawing. Either way the alt text is
     there, because this is the one place the reader has not seen the book. */
  for (const c of covers){
    const img=c.querySelector('img');
    if (img){
      chk(fs.existsSync(D+img.getAttribute('src')), `${img.getAttribute('src')} exists`);
      chk((img.getAttribute('alt')||'').length>5, `${lang}: and carries its alt text`);
    }
  }
  chk(props.every(c=>/^#p\d+$/.test((c.querySelector('a')||{getAttribute:()=>''}).getAttribute('href'))),
      `${lang}: each card leads to the book's own page`);
  /* Every motif she names is carried by something on offer, and everything on
     offer carries one she names: a list that promises more than the row holds,
     or a book standing there for no stated reason, is the same fault twice. */
  for (const id of w.__O[0].m)
    chk(w.__O[0].offer.some(o=>{const b=w.__B.find(x=>x.t===o.title); return b && (b.m||[]).includes(id);}),
        `${lang}: ${id} is carried by one of the books on offer`);
  /* The fact, then the offer, then the door. Put above her the button would
     stand between the shop's sentence and what can be done about it. */
  /* The shop answers the query and offers the way out of it in one line, which
     is what this view is when she has nothing to say. What she adds comes after
     both rather than between them: the control a reader met here once has to be
     in the same place the second time, whether or not anybody is speaking. */
  const kids=[...d.querySelector('.empty').children];
  chk(kids.map(k=>k.classList.contains('empty-say') ? 'say'
                 : k.classList.contains('bs-grid') ? 'bs' : '?').join(',')==='say,bs',
      `${lang}: the sentence first, her offer after it (${kids.map(k=>k.className||k.id).join(' / ')})`);
  chk(!!d.querySelector('.empty-say > #resetBtn'),
      `${lang}: and the way out stands in that sentence, where it stands without her`);
  /* The shop's sentence has an element of its own. Without it the grey it is
     set in sat on the block and was inherited by the two cards underneath,
     which are supposed to be indistinguishable from the ones on the shelf -
     titles in secondary grey and badges taking the same colour through
     currentColor. */
  chk(!!d.querySelector('.empty > .empty-say'), `${lang}: the sentence is an element, not a loose line`);
}

/* 4. Nothing is offered that cannot be bought, and the rule is the shelf's own.
   Nothing in the catalogue exercises this today, so the branch is reached by
   putting a proposal out of stock and putting it back. */
{
  w.__L('pl');
  const e=w.__O[0];
  const books=e.offer.map(o=>w.__B.find(b=>b.t===o.title));
  const was=books.map(b=>b.s);
  books[0].s='out'; await type('Dalloway');
  chk(d.querySelectorAll('.bs-grid .card').length===books.length-1,
      'a proposal gone out of stock drops out');
  /* And the sentence counts what is left rather than what was written: a number
     in the copy starts lying the first time a title goes. */
  chk(d.querySelector('.bs-say').textContent.includes(w.__I.pl.bsCount[books.length-1]),
      `the sentence counts what is left (${w.__I.pl.bsCount[books.length-1]})`);
  books.forEach(b=>b.s='out'); await type('Dalloway');
  chk(!d.querySelector('.empty .bs-grid'), 'and with all of them out there is no section, however much was written');
  chk(!!d.getElementById('resetBtn'), 'the way out is still there without her');
  books.forEach((b,i)=>b.s=was[i]); await type('Dalloway');
  chk(d.querySelectorAll('.bs-grid .card').length===books.length, 'put back, all of them return');
}

/* 5. Where she does not speak. A query the filters are holding back still has
   books behind it and the way out of that is the button; a query that finds a
   book never reaches an empty grid at all. */
/* The same view without her, which is what the one with her has to match. */
await type('zzz');
chk(!!d.querySelector('.empty'), 'a query the shelf cannot meet still empties the grid');
chk(!d.querySelector('.bs-grid'), 'and she says nothing about a title nothing was written about');
chk(!!d.querySelector('.empty-say > #resetBtn'), 'the way out stands in the sentence here too');
chk(d.querySelector('.empty').children.length===1, 'and the sentence is the whole of the block');

await type('Jane');
chk(!d.querySelector('.empty'), 'a query that finds a book shows no empty state');
/* Below the threshold the shelf stands whole rather than emptying, so she
   cannot be reached there at all. This is also what stops the covers jumping
   while a word is being typed: one or two letters match most of the catalogue
   and most of that falls away on the next keystroke. */
for (const q of ['D','Da']){
  await type(q);
  chk(!d.querySelector('.empty'), `"${q}": the whole shelf rather than an empty grid`);
  chk(d.querySelectorAll('.grid > .card').length===w.__B.length,
      `"${q}": and nothing has been narrowed yet (${d.querySelectorAll('.grid > .card').length})`);
}
await type('Dal');
chk(d.querySelectorAll('.grid > .card').length===0, 'the third character is where the shop narrows');
/* One number for all three readers of it. */
chk(/const QUERY_MIN = \d+;/.test(js), 'the threshold is named once in the script');
chk((js.match(/QUERY_MIN/g)||[]).length>=4, 'and everything that needs it reads that one');

/* 6. In the grid there is no control at all. This is the view where the three
   are compared with one another, and the long answer waits on the page of
   whichever one the reader opens - where there is one book to think about
   instead of three. */
await type('Dalloway');
chk(w.__CUR() && w.__CUR().key===w.__O[0].t, `the open offer is the one on screen (${w.__CUR()&&w.__CUR().key})`);
chk(w.__NAME()===w.__O[0].tp, `and names it in the language on the page (${w.__NAME()})`);
chk(d.querySelectorAll('.bs-grid .bs-why').length===0,
    'no proposal in the grid carries a control');
chk(d.getElementById('drawer').getAttribute('aria-hidden')==='true', 'and nothing has opened');
/* What used to open there is gone with it: a mode nothing can reach is a mode
   somebody will edit without seeing an effect. */
chk(!/drawerWhy/.test(js), 'the drawer has no branch left for a reason');
chk(!/bsWhyOf/.test(js), 'nor a label for one');
chk(!/function bsWhy\(/.test(js), 'nor the function that opened it');
chk(!/\.d-why/.test(nocom), 'nor a rule to style it');

/* 6a. How they arrive. The same movement the shelf makes on a first visit,
   because it is the same event: things appearing on a shelf for the first
   time. Two things differ, and both come from what is being shown - the order
   is hers rather than random, and her cell starts the sequence, the books
   being an answer to what it says. */
{
  w.__L('pl');
  await type('Jane');
  await type('Dalloway');
  const g = d.querySelector('.bs-grid');
  chk(g.classList.contains('is-arriving'), 'they arrive when they first appear');
  const kids = [...g.children];
  const d_ = kids.map(k => parseFloat(k.style.getPropertyValue('--d')) || 0);
  chk(d_[0]===0, 'her cell starts the sequence');
  chk(d_.every((v,i)=> i===0 || v > d_[i-1]),
      `and the books follow in the order she put them in (${d_.join(' / ')})`);
  /* Evenly spread, and inside the bounds. What the gap actually comes out at
     is not observable here: the step is read off the page with
     getComputedStyle, and jsdom does not resolve a custom property that way, so
     the number falls to the lower bound whatever the token says. In a browser
     the window is 900ms over four starts, which the upper bound brings to 80.
     What is checked here is the shape - even, ordered, bounded - and that the
     number comes from the one rule, which is read out of the source below. */
  const gaps = d_.slice(1).map((v,i)=>v-d_[i]);
  chk(gaps.every(x=>x===gaps[0]), `evenly spread (${gaps.join(', ')})`);
  chk(gaps.every(x=>x>=28 && x<=80), 'and inside the bounds the shelf keeps');
  chk(/const staggerStep = count =>/.test(js), 'the rule for that distance is named once');
  chk((js.match(/staggerStep\(/g)||[]).length>=2,
      `and both the shelf and she read it from there (${(js.match(/staggerStep\(/g)||[]).length})`);
  chk(!/Math\.min\(80,/.test(js.replace(/const staggerStep[\s\S]*?\n\n/, '')),
      'with the bounds nowhere else');
  /* The empty state is rebuilt on every keystroke past the threshold, so an
     arrival played on each one would be three books flickering while a word is
     being typed. */
  for (const q of ['Dallow','Dalloway']){
    await type(q);
    chk(!d.querySelector('.bs-grid').classList.contains('is-arriving'),
        `"${q}": still the same answer, so nothing arrives again`);
  }
  /* And a query that empties the grid again makes the next one a first time. */
  await type('zzz');
  await type('Dalloway');
  chk(d.querySelector('.bs-grid').classList.contains('is-arriving'),
      'asked again after something else, they arrive again');
}

/* 7. The new rules in the stylesheet. A length or a colour written in by hand
   here would never be seen by a token audit - it sits outside a declaration. */
/* Every rule this view brought with it, not only the ones naming .empty: the
   cell and the control live under .bs-grid, so a pixel written there would have
   slipped past a scan anchored on the empty state. Found the same way - by
   putting a 480px measure on the cell and watching this stay green. */
const empties=[...nocom.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
  .filter(m=>/\.empty|\.bs-grid|\.d-why/.test(m[1]));
chk(empties.length>3, `rules this view brought with it (${empties.length})`);
for (const m of empties){
  const sel=m[1].trim().replace(/\s+/g,' '), body=m[2];
  /* ch is a measure and belongs outside the scale, as the Spacing tab says:
     every other length has to be a step. */
  const lit=[...body.matchAll(/(?<![\w-])\d+(?:\.\d+)?(px|rem|em)(?![\w-])/g)].map(x=>x[0]);
  chk(lit.length===0, `${sel}: no length outside the scale${lit.length?' ('+lit.join(', ')+')':''}`);
  chk(!/#[0-9a-f]{3,6}(?![\w-])|rgba?\(/i.test(body), `${sel}: no colour written in by hand`);
}

/* 8. Both dictionaries, the same keys. A key in one only is not an error: it is
   a blank in the language nobody happens to be reading. */
const en=Object.keys(w.__I.en).sort(), pl=Object.keys(w.__I.pl).sort();
chk(en.join()===pl.join(), `the two dictionaries hold the same keys (${en.length})`);
if (en.join()!==pl.join()){
  console.log('         en only: '+en.filter(k=>!pl.includes(k)).join(', '));
  console.log('         pl only: '+pl.filter(k=>!en.includes(k)).join(', '));
}
chk(!/<[a-z]/i.test(w.__I.en.bsOff) && !/<[a-z]/i.test(w.__I.pl.bsOff),
    'the sentence in the dictionary carries no markup of its own');

/* 9. Built out of what the shop already has, not out of near-copies of it. */
const block=js.slice(js.indexOf('function bsOffshelfGrid'), js.indexOf('\nfunction bsBlock'));
chk(/btn-ghost/.test(block), 'the control is the ghost button, not a new one');
chk(/cardHTML\(/.test(block), 'the proposal is the shelf\'s own card');
chk(/function cardHTML\(/.test(js) && /list\.map\(b => cardHTML\(b\)\)/.test(js),
    'and the shelf builds its cards from the same function');
/* The motif control she uses and the one a product page uses are the same
   markup; a near-copy would drift the first time either is restyled. */
const prod=js.slice(js.indexOf('function motifRow('), js.indexOf('function motifRow(')+600);
const shape=t=>/class="btn-ghost" aria-haspopup="dialog" onclick="openMotif\(/.test(t);
chk(shape(prod) && shape(block), 'a motif is the same control in her sentence and on a product page');
chk(/function bsResolve/.test(js) && /function bsOffer\(b\)\{ return bsResolve/.test(js),
    'what may be offered is written once, for the shelf and for a title off it');
chk(!/bsBook/.test(js), 'nothing reads the offer back off a book any more');
chk(!/bsFromNext/.test(js), 'and the label for a second title is gone with the second title');

/* 10. The two ways a card stops being the shelf's card without anybody editing
   it. Both were found by looking, not by a test, which is why they are here. */
const rule = sel => { for (const m of nocom.matchAll(/([^{}]+)\{([^{}]*)\}/g))
  if (m[1].split(',').some(o=>o.replace(/\s+/g,' ').trim()===sel)) return m[2]; return null; };
chk(!/(^|;)\s*color\s*:/.test(rule('.empty')||''),
    'the empty block sets no colour of its own for everything inside it to inherit');
chk(/color\s*:/.test(rule('.empty-say')||''), 'the sentence carries that colour itself');
/* A grid item stretches to its row by default, and the row is as tall as the
   full card beside it. Without this the ground under her words was half as tall
   again as the packshot it is meant to match. */
/* Every distance down a proposal is one step of the scale, which is what the
   scale is for. The sentence under the price arrived at 24px plus 8px - the
   card's own closing gap, left on a card that does not end there, with the
   sentence's own step stacked on it. */
/* And it is the shelf's movement, not a second one that resembles it: the
   same keyframes, so a change to how the shelf arrives carries here. */
const arr = rule('.bs-grid.is-arriving > *') || '';
const shelf = rule('.grid.mosaic .card') || '';
const kf = t => (/animation:\s*([\w-]+)/.exec(t)||[])[1];
chk(!!kf(arr) && kf(arr)===kf(shelf),
    `she arrives on the shelf's own keyframes (${kf(arr)} / ${kf(shelf)})`);
chk(/ease-out/.test(arr) && /ease-out/.test(shelf),
    'and on the same curve, for the reason the shelf takes it');
chk(/animation\s*:\s*none/.test(rule('.bs-grid.is-arriving > *', true) || arr) || /prefers-reduced-motion/.test(nocom),
    'and yields when less movement is asked for');

chk(/padding-bottom\s*:\s*0/.test(rule('.bs-grid .card .meta')||''),
    'a card that carries more does not close under its price');
const step = (sel, prop) => { const r=rule(sel)||''; const m=new RegExp(prop+'\\s*:\\s*([^;]+)').exec(r); return m&&m[1].trim(); };
chk(/^var\(--nu-space-[a-z]+\)/.test(step('.bs-b-lead','margin')||''),
    `the sentence stands one named step from it (${step('.bs-b-lead','margin')})`);
chk(/var\(--nu-space-[a-z]+\)$/.test(step('.bs-grid .bs-b-lead','margin-bottom')||''),
    `and the card closes one named step under it (${step('.bs-grid .bs-b-lead','margin-bottom')})`);
chk(/align-self\s*:\s*start/.test(rule('.bs-grid .bs-cell')||''),
    'her cell stops stretching, so the ratio is what decides its height');
chk(/aspect-ratio\s*:\s*4\s*\/\s*5/.test(rule('.bs-grid .bs-cell')||''),
    'and that ratio is the packshot\'s own');
/* And the ground is the packshot's own: one step for both, so the row reads as
   one shelf rather than as a block with books beside it. It is the third step
   and not the second for a reason that outlives this view - in the light scheme
   the second step and the hairline the shop draws with are the same value, so a
   field holding anything outlined or underlined cannot be made of it, and her
   block holds two links in every language. */
chk(/background\s*:\s*var\(--nu-bg-tertiary\)/.test(rule('.bs')||''),
    'her block is on the third step');
for (const sel of ['.tile', '.p-tile', '.fly-tile'])
  chk(/background\s*:\s*var\(--nu-bg-tertiary\)/.test(rule(sel)||''),
      `${sel}: the field a cover stands on is the same step`);
chk(!/background\s*:/.test(rule('.bs-grid .bs-cell')||''),
    'and the cell in the grid takes it from .bs rather than naming a second one');
/* The collision itself, stated so that nobody moves a field back onto the
   second step without meeting it. */
const val = n => { const m=/--nu-bg-secondary:\s*light-dark\(\s*var\((--nu-grey-\d+)\)/.exec(nocom); return m&&m[1]; };
const bgSec = val(), brNeutral = (/--nu-border-neutral:\s*light-dark\(\s*var\((--nu-grey-\d+)\)/.exec(nocom)||[])[1];
chk(!!bgSec && bgSec===brNeutral,
    `in the light scheme the panel and the hairline are one value (${bgSec}) - which is what the fields are kept off`);

/* 11. The thread. A reader who follows one of her proposals arrives on a page
   that has no idea why she is there; what she gets instead is the reason, and
   the other title still within reach. It holds for the session and never goes
   into the address: a link carrying "came here from a search for Mrs Dalloway"
   would tell whoever it was pasted to about a search they never made. */
{
  const open = id => {
    const card=[...d.querySelectorAll('.bs-grid .card')].find(c=>+c.dataset.id===id);
    card.querySelector('a').dispatchEvent(new w.Event('click',{bubbles:true}));
    w.__RP(w.__B.find(b=>b.id===id));
    return d.querySelector('.p-info .bs');
  };
  void nav;
  const e = w.__O[0];
  const ids = e.offer.map(o => w.__B.find(b=>b.t===o.title).id);

  for (const lang of ['pl','en']){
    w.__L(lang);
    await type('Dalloway');
    for (const id of ids){
      const book = w.__B.find(b=>b.id===id);
      const sec = open(id);
      chk(!!sec, `${lang}: ${book.t}: she picks the thread up on the page`);
      if (!sec) continue;
      const say = sec.querySelector('.bs-say').textContent;
      /* The title the reader searched for, in the language she is reading now.
         Held as a resolved title rather than as the entry, it stayed in the
         language the grid was built in - an English drawer headed "beside Pani
         Dalloway". */
      const want = lang==='pl' ? e.tp : e.t;
      chk(say.includes(want), `${lang}: and names what was searched for, in this language (${want})`);
      chk(!say.includes(lang==='pl' ? e.t : e.tp),
          `${lang}: and not in the other one`);
      /* The noun follows the count, which Polish will not let be fudged. */
      const shared = e.m.filter(id2 => (book.m||[]).includes(id2));
      const many = shared.length > 1;
      chk(new RegExp(many ? (lang==='pl'?'Wspólne motywy':'motifs they share')
                          : (lang==='pl'?'Wspólny motyw':'motif they share')).test(say),
          `${lang}: ${book.t}: ${shared.length} shared motif, named in the number it is`);
      const btns=[...sec.querySelectorAll('.bs-say button.btn-ghost')];
      chk(btns.length===shared.length, `${lang}: ${book.t}: each shared motif is a control`);
      /* And nothing else is offered. The other title belonged in the grid,
         where the reader was choosing between the two; here she has chosen, and
         a second book under the first would be the shop arguing with a choice
         it has just been handed. */
      chk(sec.querySelectorAll('.bs-b-title').length===0,
          `${lang}: ${book.t}: no second book is put under the one she opened`);
      /* What is left is the reason for this one, behind a control - a reader
         who has arrived is reading the book, not yet the argument for it. */
      const why=sec.querySelector('.bs-why');
      chk(!!why && why.getAttribute('aria-expanded')==='false',
          `${lang}: ${book.t}: the reason stands behind a control, shut`);
      chk(why && (why.getAttribute('onclick')||'')==='bsPick(0)',
          `${lang}: and it opens this title's own reason`);
      const tbox=sec.querySelector('.bs-text');
      chk(!!tbox && tbox.hidden, `${lang}: with nothing unfolded until it is asked for`);
      /* Whatever she is holding is an offer resolved against the shelf, here as
         everywhere: held raw it serves the control on this page, which only
         reads the text, and breaks anything that names the book - which is what
         the drawer does. Checked directly, because with the control in the grid
         resolving its own offer nothing on this path would break today. */
      chk(w.__CUR().offer.every(o => o.book && o.book.id != null),
          `${lang}: ${book.t}: and what she holds is resolved against the shelf`);
    }
  }
  /* Opening it delivers the answer the same way a product page always has:
     word by word, with the mark beside her name breathing until the last one.
     It is the same text the drawer in the grid would have shown. */
  {
    w.__L('pl');
    await type('Dalloway');
    open(ids[0]);
    const sec=d.querySelector('.p-info .bs');
    w.__PICK(0);
    chk(sec.querySelector('.bs-why').getAttribute('aria-expanded')==='true', 'asking unfolds it');
    chk(!d.querySelector('.p-info .bs-text').hidden, 'and the box is shown');
    await sleep(60);
    const box=d.querySelector('.p-info .bs-text');
    /* It stands whole and without a wait, because this suite has already had
       this answer out of the drawer in the grid - and that is the point worth
       checking: an answer given once is given, whichever of the two places she
       was asked in. Watching a passage be written a second time is watching a
       wait that is not happening. */
    chk(!box.querySelector('.bs-sk'), 'an answer already given has no waiting lines');
    chk(box.textContent.trim().length>200, `and stands whole at once (${box.textContent.trim().length})`);
    chk(/<strong|<ul|<li/.test(box.innerHTML), 'with its markup');
    await sleep(60);
    w.__PICK(0);
    chk(sec.querySelector('.bs-why').getAttribute('aria-expanded')==='false', 'asking again folds it away');
  }

  /* 11a. And back. Returning to the shelf does not rebuild the grid, so what
     stands there has to survive a walk to a proposal and back. */
  {
    w.__L('pl');
    await type('Dalloway');
    open(ids[0]);
    await nav('#/');
    chk(d.querySelectorAll('.bs-grid .card').length===e.offer.length,
        `after coming back, every proposal is still in the grid (${d.querySelectorAll('.bs-grid .card').length})`);
    chk([...d.querySelectorAll('.bs-grid .card .bs-b-lead')].length===e.offer.length,
        'each still saying how it answers the search');
  }

  w.__L('pl');
  /* Everything that is not that walk. */
  await type('Dalloway');
  open(ids[0]);
  w.__RP(w.__B.find(b=>b.t==='Beloved'));
  chk(!d.querySelector('.p-info .bs'), 'a book she never proposed gets no thread');
  /* And a book that shares a motif but was never the proposal followed. Beloved
     alone let this pass: it shares nothing, so dropping the check on which book
     was opened still produced no section. The thread belongs to the walk, not
     to the subject. */
  const akin = w.__B.find(b => b.m && b.m.includes(e.m[0]) && !ids.includes(b.id));
  chk(!!akin, `a book on a shared motif that she never proposed (${akin && akin.t})`);
  w.__RP(akin);
  chk(!d.querySelector('.p-info .bs'),
      'which gets no thread either, the thread belonging to the walk and not to the motif');
  w.__RP(w.__B.find(b=>b.id===ids[0]));
  chk(!!d.querySelector('.p-info .bs'), 'and coming back to the proposal picks it up again');
  await type('Jane');
  w.__RP(w.__B.find(b=>b.id===ids[0]));
  chk(!d.querySelector('.p-info .bs'), 'typing another query leaves the conversation');
  /* Reached without her: the same page, with nothing added. */
  await type('Dalloway');
  w.__RP(w.__B.find(b=>b.id===ids[1]));
  chk(!d.querySelector('.p-info .bs'),
      'and a proposal opened without following one of hers is an ordinary page');
  chk(!/#p\d+\?|from=|bsFrom=/.test(w.location.hash), 'nothing about the walk is written into the address');
}

console.log();
console.log(bad ? 'FAILURES: '+bad : 'RESULT: OK');
process.exit(bad?1:0);
