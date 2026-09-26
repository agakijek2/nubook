/* The bookseller widget's flow: the breath, the typing out, the closing.
   Durations shortened so the suite takes a second - we check the flow, not the
   pace. */
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
  +'\n;window.__B=BOOKS;window.__pick=bsPick;window.__sync=bsSync;window.__shut=bsShut;window.__fill=bsFill;window.__show=bsShow;window.__ava=bsAvaEl;window.__seen=bsSeen;window.__said=bsSaid;window.__i18n=I18N;');
const dot=()=>d.querySelector('#bsAva .bs-dot');
const R=()=>[...d.querySelectorAll('.bs-why')];
const B=n=>d.getElementById('bsText'+n);
const sleep=ms=>new Promise(res=>setTimeout(res,ms));
let bad=0; const chk=(c,m)=>{ console.log((c?'  OK   ':'  FAIL ')+m); if(!c) bad++; };

/* The app finishes its own start asynchronously, and route() rebuilds the
   panel. Driving the inside before the start is over reaches for nodes that are
   about to be replaced - hence the wait before the suite presses anything. */
await sleep(300);
const book=w.__B.find(b=>b.s==='out');
console.log('unavailable title:', book.t);
w.__sync(book);
/* Opened by pressing the mark, the same way a reader would. */
w.__ava.click();
chk(R().length===2, 'two rows with a "why" button: '+R().length);

w.__pick(0);
chk(dot().classList.contains('is-working'), 'the mark breathes as soon as it is pressed');
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

w.__pick(1);
chk(dot().classList.contains('is-working'), 'second row: the mark breathes again');
chk(B(0).innerHTML==='' && B(0).hidden, 'the first row is closed and emptied');
chk(R()[0].getAttribute('aria-expanded')==='false' && R()[1].getAttribute('aria-expanded')==='true', 'exactly one row open');
w.__pick(1);
chk(R()[1].getAttribute('aria-expanded')==='false', 'pressing again closes it');
chk(!dot().classList.contains('is-working'), 'closing puts the mark out');

w.__pick(0);
chk(!B(0).querySelector('.bs-sk'), 'answer already given: no waiting lines');
chk(!dot().classList.contains('is-working'), 'and no breathing');
chk(B(0).innerHTML.length>100, 'the text stands whole straight away');
w.__shut();
chk(!dot().classList.contains('is-working'), 'closing the panel puts the mark out');

/* The delay after arriving on a page must not rebuild a panel the reader opened
   herself - a rebuild clears the list and takes the answer away mid-sentence. */
const b2=w.__B.filter(x=>x.s==='out')[0];
w.__sync(null); w.__sync(b2);
w.__ava.click();
w.__pick(0);
const before=B(0).innerHTML.length;
await sleep(200);
chk(B(0).innerHTML.length>=before && !B(0).hidden, 'the delay did not rebuild the open panel');
chk(R()[0].getAttribute('aria-expanded')==='true', 'the row is still open once the delay has passed');

/* The breath belongs to an offer that arrives unasked. Calling back a dismissed
   one is the reader's doing and nothing is being worked out; the mark is under
   her cursor by then and already lit. */
const thinking=()=>dot().classList.contains('is-thinking');
w.__shut();
chk(!thinking(), 'closing takes the thinking state off the mark');
w.__ava.click();
chk(!thinking(), 'calling the panel back by the mark starts no breath');
chk(d.getElementById('bsPanel').hidden===false, 'but the panel does open');

/* The same book, seen for the first time: the panel opens on its own. */
w.__shut(); w.__sync(null); w.__seen.clear();
w.__sync(book);
chk(!thinking(), 'before the delay has passed the mark does not breathe');
await sleep(120);
chk(d.getElementById('bsPanel').hidden===false, 'the panel opened on its own after the delay');
chk(thinking(), 'and took one breath');
await sleep(120);
chk(!thinking(), 'the thinking state goes once the breath is finished');

/* The list of proposals is the default state: the panel opens with it, with no
   expanding button on the way. */
w.__shut(); w.__sync(null); w.__seen.clear(); w.__sync(book);
await sleep(120);            // the panel opens on its own and takes a breath
const list=d.getElementById('bsList');
chk(!d.getElementById('bsPanel').hidden, 'the panel is open');
chk(list.hidden===false, 'the list of proposals is visible straight away');
chk(list.querySelectorAll('.bs-why').length>0, 'and has proposals in it');
chk(!d.getElementById('bsMore'), 'there is no expanding button at all');
chk(!('bsMore' in w.__i18n.pl) && !('bsMore' in w.__i18n.en), 'nor its label in the dictionaries');
chk(!('bsLess' in w.__i18n.pl) && !('bsLess' in w.__i18n.en), 'nor a collapsing label');
await sleep(120);            // the breath runs out
chk(!thinking(), 'starting point: the mark is not breathing');

/* A row of answers: a breath on opening, and while the answer is being worked
   out the endless breathing takes precedence. */
w.__said.clear();            // the answer has not been given in this visit yet
w.__pick(0);
chk(dot().classList.contains('is-working'), 'opening an answer: endless breathing');
chk(thinking(), 'the thinking state is set too, but it does not govern');
w.__pick(0);
chk(!dot().classList.contains('is-working') && !thinking(), 'closing the row takes both states off');

console.log(bad? '\nFAILURES: '+bad : '\nRESULT: OK');
process.exit(bad?1:0);
