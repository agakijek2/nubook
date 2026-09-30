/* The bookseller: where she stands, and how an answer arrives.
   Durations shortened so the suite takes a second - we check the flow, not the
   pace. Opened with ?bs=slow, which is the only way to see the waiting state:
   the texts are written in advance, so in the ordinary mode there is nothing to
   wait for. */
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
  +'\n;window.__B=BOOKS;window.__pick=bsPick;window.__render=renderProduct;window.__said=bsSaid;window.__i18n=I18N;window.__OFF=bsOffer;window.__L=l=>{LANG=l};');
const dot=()=>d.querySelector('.bs-dot');
const R=()=>[...d.querySelectorAll('.bs-why')];
const B=n=>d.getElementById('bsText'+n);
const sleep=ms=>new Promise(res=>setTimeout(res,ms));
let bad=0; const chk=(c,m)=>{ console.log((c?'  OK   ':'  FAIL ')+m); if(!c) bad++; };

/* The app finishes its own start asynchronously and route() rebuilds the product
   column. Driving the inside before the start is over reaches for nodes that are
   about to be replaced. */
await sleep(300);
const book=w.__B.find(b=>b.s==='out');
/* A title she has nothing written about. The trigger is the writing, not the
   status, so this has to be chosen by what BOOKSELLER holds rather than by
   whether the book is in stock. */
const mute=w.__B.find(b=>!w.__OFF(b));
console.log('unavailable title:', book.t);

/* 1. Where she stands. The section closes the product column. What she offers
   is two books about the same motifs, so the reader has to have read what this
   book is about and seen its motifs named before the proposals can mean
   anything: the description, the quotation and the list of details come first,
   and she follows from them. Higher up the offer arrived before its own reason
   and cut the description in half to do it. */
w.__render(book);
const sec=d.querySelector('.p-info .bs');
chk(!!sec, 'the bookseller is a section inside the product column');
const kol=[...d.querySelector('.p-info').children];
chk(sec && kol[kol.length-1]===sec, 'and closes it: nothing of the book\'s own comes after her');
chk(kol.findIndex(e=>e.classList.contains('p-details')) < kol.indexOf(sec),
    'the motifs the proposals are drawn from are read before them');
chk(kol.findIndex(e=>e.classList.contains('p-desc')) < kol.indexOf(sec),
    'and so is the description, whole rather than split around her');
/* The status stays on the packshot, where it is on a card in the grid too. The
   column is already carrying the title, the author, the price, the description,
   the quotation, the motifs and her: a badge at the head of it was one more
   thing happening in a place that had enough. */
chk(!!d.querySelector('.p-tile .badge'), 'the status is on the packshot, as in the grid');
chk(!kol.some(e=>e.classList.contains('badge')), 'and not in the column of text');
chk(!d.getElementById('bookseller') && !d.getElementById('bsPanel') && !d.getElementById('bsAva'),
    'nothing of hers is left standing in the markup');
chk(sec && !!sec.querySelector('.bs-who') && (sec.querySelector('.bs-who').textContent||'').trim().length>3,
    'she says who is speaking in words, not only in an attribute');
chk(sec && !!sec.querySelector('.bs-dot'), 'and the mark stands beside the name');

/* 2. A title that cannot be bought gets no button. The badge on the packshot
   already says so, and a disabled control at the foot of the column was the
   place kept for the one thing this view offers, holding something that does
   nothing. */
chk(!d.querySelector('.p-cta'), 'an unavailable title has no button at all');
w.__render(mute);
chk(!!d.querySelector('.p-cta'), 'a title in stock still has one');
chk(!d.querySelector('.p-info .bs'), 'and she says nothing about a title nothing was written about');

/* She also speaks about a title that is on the shelf, where what she adds is
   not a substitute but two more books on a motif this one carries. The opening
   sentence is the one thing that differs: telling a reader a book is missing
   when it is not would be worse than saying nothing. */
{
  const spoken=w.__B.filter(b=>w.__OFF(b));
  chk(spoken.length>2, `titles she has something to say about: ${spoken.length}`);
  const inStock=spoken.find(b=>b.s!=='out');
  chk(!!inStock, 'at least one of them is on the shelf');
  /* Both languages. A sentence is written twice, so it can be wrong once - and
     the wrong one is the one nobody is reading at the time. */
  for (const lang of ['en','pl']){
    w.__L(lang);
    w.__render(inStock);
    const say=(d.querySelector('.bs-say')||{}).textContent||'';
    chk(!!d.querySelector('.p-info .bs'), `${lang}: she speaks on ${inStock.t}, which is in stock`);
    chk(!!d.querySelector('.p-cta'), `${lang}: and the button to buy it is still there`);
    /* The whole sentence, not a fragment of it: a check on a fragment passes
       while something else is bolted on in front of it. */
    /* The dictionary marks a title for italic with asterisks; what reaches the
       page is the italic, so the expected text is the sentence without them. */
    const want=w.__i18n[lang].bsHere.replace('%s', lang==='pl' ? inStock.tp : inStock.t).replace(/\*/g,'');
    chk(say.trim()===want,
        `${lang}: the opening is the sentence written for a title on the shelf (${say.slice(0,50)})`);
    chk(!/do not have|nie mamy/.test(say), `${lang}: and never says it is missing`);
    /* Measured on this render and not the next one. Written after the page had
       been rebuilt for the unavailable title, the count came from that sentence
       instead, and it has a title of its own - so the check passed whatever was
       done to the one being tested. */
    const emHere=[...d.querySelectorAll('.bs-say em')].length;
    chk(lang==='en' ? emHere===1 : emHere===0,
        `${lang}: the title is ${lang==='en' ? 'set in italic' : 'in quotation marks, so no italic'} (${emHere})`);
    chk(!say.includes('*'), `${lang}: and no asterisk reaches the page`);
    w.__render(book);
    const outSay=(d.querySelector('.bs-say')||{}).textContent||'';
    chk(/do not have|nie mamy/.test(outSay), `${lang}: on a title that is out she still says so`);
    chk(!outSay.includes('*'), `${lang}: nor in the sentence about a title that is out`);
    const emOut=[...d.querySelectorAll('.bs-say em')].length;
    chk(lang==='en' ? emOut===1 : emOut===0,
        `${lang}: and that title is set the same way (${emOut})`);
  }
  w.__L('en');
}

/* 3. An answer arrives. */
w.__render(book);
chk(R().length===2, 'two rows with a "why" button: '+R().length);

w.__pick(0);
chk(dot().classList.contains('is-working'), 'the mark breathes as soon as a row is opened');
chk(B(0).getAttribute('aria-busy')==='true' && B(0).querySelector('.bs-sk'), 'waiting lines and aria-busy');

await sleep(70);
const words=[...B(0).querySelectorAll('.bs-w')];
chk(words.length>20, 'the text is split into words: '+words.length);
chk(B(0).getAttribute('aria-busy')===null, 'aria-busy lifted once the words start arriving');
chk(words.some(s=>!s.classList.contains('is-in')), 'the typing out is still running');
chk(dot().classList.contains('is-working'), 'the mark breathes STILL, while the text arrives');
chk(/<strong|<ul|<li/.test(B(0).innerHTML), 'the markup inside the text is intact');

await sleep(words.length*8+400);
chk(words.length>0 && words.every(s=>s.classList.contains('is-in')), 'every word has arrived');
chk(!dot().classList.contains('is-working'), 'the mark stops breathing after the last word');

/* 4. One answer at a time. */
w.__pick(1);
chk(dot().classList.contains('is-working'), 'second row: the mark breathes again');
chk(B(0).innerHTML==='' && B(0).hidden, 'the first row is closed and emptied');
chk(R()[0].getAttribute('aria-expanded')==='false' && R()[1].getAttribute('aria-expanded')==='true', 'exactly one row open');
w.__pick(1);
chk(R()[1].getAttribute('aria-expanded')==='false', 'pressing again closes it');
chk(!dot().classList.contains('is-working'), 'closing puts the mark out');

/* 5. Once a visit. Watching a passage be written a second time is watching a
   wait that is not happening. */
w.__pick(0);
chk(!B(0).querySelector('.bs-sk'), 'answer already given: no waiting lines');
chk(!dot().classList.contains('is-working'), 'and no breathing');
chk(B(0).innerHTML.length>100, 'the text stands whole straight away');

/* 6. The proposals are the default state: the section arrives with them, with no
   expanding button on the way. */
w.__render(book);
const list=d.querySelector('.bs-list');
chk(!!list && list.querySelectorAll('.bs-why').length>0, 'the proposals are there from the start');
chk(!d.getElementById('bsMore'), 'there is no expanding button at all');
chk(!('bsMore' in w.__i18n.pl) && !('bsMore' in w.__i18n.en), 'nor its label in the dictionaries');
chk(!('bsLess' in w.__i18n.pl) && !('bsLess' in w.__i18n.en), 'nor a collapsing label');

/* 7. The breath means one thing, and nothing is left of the states that belonged
   to a panel opening and closing over the page. */
chk(!dot().classList.contains('is-working'), 'a section just written is not breathing');
chk(!/is-thinking/.test(fs.readFileSync(D+'js/app.js','utf8')),
    'the single breath that announced a panel opening is gone with the panel');

console.log(bad? '\nFAILURES: '+bad : '\nRESULT: OK');
process.exit(bad?1:0);
