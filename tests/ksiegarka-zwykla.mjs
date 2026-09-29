/* The bookseller in the ordinary mode, that is without ?bs=slow.

   ksiegarka.mjs opens the page in slow mode and so checked only the path with
   the skeleton. The path without the delay - the one every reader sees - put
   the text in whole, with no words wrapped in .bs-w, and those are what reveals
   the lines one by one. The answer was therefore empty. This suite walks that
   path. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css=fs.readFileSync(D+'css/styles.css','utf8');
const html=fs.readFileSync(D+'index.html','utf8').replace('</head>','<style>'+css+'</style></head>');
const dom=new JSDOM(html,{runScripts:'outside-only',url:'http://localhost/',pretendToBeVisual:true});
const w=dom.window, d=w.document;
w.matchMedia=q=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
w.scrollTo=()=>{}; w.Element.prototype.scrollTo=()=>{};
w.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
const r=d.documentElement.style;
[['--nu-motion-instant','2ms'],['--nu-motion-quick','4ms'],['--nu-motion-base','4ms'],
 ['--nu-motion-slower','4ms'],['--nu-motion-hold','60ms']].forEach(([k,v])=>r.setProperty(k,v));
w.eval(fs.readFileSync(D+'js/app.js','utf8')
  +'\n;window.__B=BOOKS;window.__pick=bsPick;window.__render=renderProduct;'
  +'window.__off=bsOffer;window.__slow=BS_SLOW;window.__lines=bsLines;');
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let bad=0;
const chk=(ok,what)=>{ console.log((ok?'  OK  ':'  FAIL'),what); if(!ok) bad++; };

chk(w.__slow===false, 'starting point: the page opened without ?bs=slow');

const book=w.__B.find(b=>b.s==='out' && w.__off(b));
chk(!!book, 'there is an unavailable title with proposals');
w.__render(book);
await sleep(50);

const rows=[...d.querySelectorAll('.bs-why')];
chk(rows.length>0, 'the section has "why this one" rows');

w.__pick(0);
/* The mark breathes through the whole answer, including when there is nothing
   to wait for and the text starts assembling straight away. */
chk(d.querySelector('.bs-dot').classList.contains('is-working'),
    'the mark breathes from the start of the text, with no delay at all');
const box=d.getElementById('bsText0');
/* The box has its full height at once: the words hold their place from the
   start, so the column does not push itself open line by line and there is empty
   room under the text. */
chk((box.style.height||'')==='', 'the box has no written height - it stands in its own from the start');
chk(!box.classList.contains('is-arriving'), 'and it is not being cropped');
await sleep(600);
chk(box.hidden===false, 'the answer box is revealed');
chk(!d.querySelector('.bs-dot').classList.contains('is-working'),
    'after the last line the mark stops breathing');

const words=[...box.querySelectorAll('.bs-w')];
chk(words.length>0, 'the text is split into words (.bs-w)');
chk(words.every(s=>s.classList.contains('is-in')), 'every word has been revealed');

/* Nothing is left out of sight once the entrance has finished. */
const paras=[...box.querySelectorAll('p, li')];
chk(paras.length>0, 'the answer has paragraphs');
const hidden=paras.filter(p=>w.getComputedStyle(p).display==='none');
chk(hidden.length===0, `no paragraph is hidden (hidden: ${hidden.length} of ${paras.length})`);

/* An answer already given in this visit comes back at once: no delay and no
   revealing, because watching the same sentence being written a second time is
   watching a wait that is not there. */
w.__pick(0); w.__pick(0);
const again=d.getElementById('bsText0');
chk(again.textContent.trim().length>0, 'opening it again shows the text immediately');
chk(again.querySelectorAll('.bs-w').length===0, 'and does not split it into words, because there is nothing to reveal');
chk(!again.querySelector('.bs-sk'), 'nor does it show the skeleton');
await sleep(600);
chk(again.textContent.trim().length>0, 'and the text is still standing there');


/* Words group into lines by their measured top edge.

   We substitute geometry of our own, because jsdom computes no layout: five
   words, the first three at one height, the remaining two at another. */
{
  const top=300, h=20;
  const box=d.createElement('div');
  box.className='bs-text';
  d.body.appendChild(box);
  box.getBoundingClientRect=()=>({top, bottom:top+2*h, height:2*h});
  let n=0;
  Object.defineProperty(w.HTMLElement.prototype,'getBoundingClientRect',{configurable:true,
    value(){
      if (!this.classList || !this.classList.contains('bs-w')) return {top:0,bottom:0,height:0};
      if (this.__i===undefined) this.__i = n++;
      const line = this.__i < 3 ? 0 : 1;
      return {top: top + line*h, bottom: top + (line+1)*h, height: h};
    }});
  const ls=w.__lines(box, [...Array(5)].map(()=>{
    const s=d.createElement('span'); s.className='bs-w'; box.appendChild(s); return s;
  }));
  chk(ls.length===2, `two lines measured (found ${ls.length})`);
  chk(ls[0].length===3, `the first line has three words (has ${ls[0].length})`);
  chk(ls[1].length===2, `the second has two (has ${ls[1].length})`);
}

console.log(bad ? '\nFAILURES: '+bad : '\nRESULT: the answer is visible without slow mode too');
process.exit(bad?1:0);
