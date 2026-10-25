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
  +'window.__CUR=()=>bsCurrent;window.__PICK=bsPick;window.__OFF=offshelfFor;');
const sleep=ms=>new Promise(res=>setTimeout(res,ms));
let bad=0; const chk=(c,m)=>{ console.log((c?'  OK   ':'  FAIL ')+m); if(!c) bad++; };

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
  /* The sentence says "two motifs" and "two other titles" in both languages, so
     an entry carrying another number would make the shop's own copy false. */
  chk(e.m.length===2, `${e.t}: two motifs, which is what the sentence promises`);
  chk(e.offer.length===2, `${e.t}: two proposals, likewise`);
  for (const o of e.offer){
    const b=w.__B.find(x=>x.t===o.title);
    chk(!!b, `${e.t} → ${o.title}: a title the shop holds`);
    if (!b) continue;
    /* The whole claim of the section. A proposal sharing no motif with the book
       asked for is a recommendation with nothing behind it, and the sentence
       above it would be a lie in two languages. */
    const shared=e.m.filter(id=>(b.m||[]).includes(id));
    chk(shared.length>0, `${e.t} → ${o.title}: shares a motif (${shared.join(', ')})`);
    for (const lang of ['pl','en'])
      chk(typeof o.text[lang]==='string' && o.text[lang].length>200,
          `${e.t} → ${o.title}: an answer written in ${lang}`);
  }
}

/* 2. Every way of typing the title that would find a book finds this: the entry
   carries the shelf's own fields, so matchesQuery does the work and diacritics,
   case and both languages come with it. */
for (const q of ['Dalloway','Mrs Dalloway','Pani Dalloway','pani dalloway','DALLOWAY'])
  chk(!!w.__OFF(q), `"${q}" reaches the entry`);
chk(!w.__OFF('Dallowayy'), 'a near miss does not');
chk(!w.__OFF('D'), 'nor a query too short to mean anything');

/* 3. In the grid, in both languages. */
for (const lang of ['pl','en']){
  w.__L(lang);
  await type('Dalloway');
  const sec=d.querySelector('.empty .bs');
  chk(!!sec, `${lang}: she speaks in the empty grid`);
  if (!sec) continue;
  const say=d.querySelector('.bs-say');
  /* A placeholder left standing is the failure this guards: the sentence is
     assembled from three substitutions, and one missed shows as %a or %m on the
     page in the language nobody is reading at the time. */
  chk(!/%[asm]\b|%[asm]$/.test(say.textContent), `${lang}: every placeholder is filled`);
  chk(!say.textContent.includes('*'), `${lang}: no asterisk reaches the page`);
  chk(!/&[a-z]+;/.test(say.textContent), `${lang}: nor an entity, the sentence being escaped on the way`);
  /* A motif name is set the way her answers set one. */
  const strong=[...say.querySelectorAll('strong')].map(x=>x.textContent);
  chk(strong.length===2, `${lang}: both motif names are set in bold (${strong.join(' · ')})`);
  for (const id of w.__O[0].m)
    chk(strong.includes(w.__M[id].chip[lang]),
        `${lang}: ${id} is named as the motif layer names it`);
  /* And the title the way the shop writes a title: italic in English, quotation
     marks in Polish. */
  const em=[...say.querySelectorAll('em')].length;
  chk(lang==='en' ? em===1 : em===0, `${lang}: the title is set the shop's way (${em} em)`);

  chk(d.querySelectorAll('.bs-item').length===2, `${lang}: two proposals on the page`);
  const covers=[...d.querySelectorAll('.bs-b-cover')];
  chk(covers.length===2, `${lang}: each proposal shows its cover`);
  /* The cover is the shop's own component, so an image cover arrives as a file
     that exists and a drawn one as the drawing. Either way the alt text is
     there, because this is the one place the reader has not seen the book. */
  for (const c of covers){
    const img=c.querySelector('img');
    chk(!!c.querySelector('.cover'), 'the cover is the shop component');
    if (img){
      chk(fs.existsSync(D+img.getAttribute('src')), `${img.getAttribute('src')} exists`);
      chk((img.getAttribute('alt')||'').length>5, `${lang}: and carries its alt text`);
    }
  }
  chk([...d.querySelectorAll('.bs-b-go')].every(a=>/^#p\d+$/.test(a.getAttribute('href'))),
      `${lang}: each row leads to the book's own page`);
  /* The fact, then the offer, then the door. Put above her the button would
     stand between the shop's sentence and what can be done about it. */
  const kids=[...d.querySelector('.empty').children];
  chk(kids.length===2 && kids[0].classList.contains('bs') && kids[1].id==='resetBtn',
      `${lang}: the way out comes after her, not between the two halves of one answer`);
}

/* 4. Nothing is offered that cannot be bought, and the rule is the shelf's own.
   Nothing in the catalogue exercises this today, so the branch is reached by
   putting a proposal out of stock and putting it back. */
{
  w.__L('pl');
  const e=w.__O[0];
  const p1=w.__B.find(b=>b.t===e.offer[0].title), p2=w.__B.find(b=>b.t===e.offer[1].title);
  const s1=p1.s, s2=p2.s;
  p1.s='out'; await type('Dalloway');
  chk(d.querySelectorAll('.bs-item').length===1, 'a proposal gone out of stock drops out');
  p2.s='out'; await type('Dalloway');
  chk(!d.querySelector('.empty .bs'), 'and with both out there is no section, however much was written');
  chk(!!d.getElementById('resetBtn'), 'the way out is still there without her');
  p1.s=s1; p2.s=s2; await type('Dalloway');
  chk(d.querySelectorAll('.bs-item').length===2, 'put back, both return');
}

/* 5. Where she does not speak. A query the filters are holding back still has
   books behind it and the way out of that is the button; a query that finds a
   book never reaches an empty grid at all. */
await type('Jane');
chk(!d.querySelector('.empty'), 'a query that finds a book shows no empty state');
/* A one-character query is short by nature and matches everything, so it never
   empties the grid in the first place - she cannot reach it, and the guard in
   front of her is there for the day a filter can. Written down because the
   obvious reading of "too short a query" is an empty grid with a message, and
   that is not what the shop does. */
await type('D');
chk(!d.querySelector('.empty'), 'a query too short shows the whole shelf rather than an empty grid');
chk(d.querySelectorAll('.card').length>1, 'with the books on it');

/* 6. An answer arrives, and the machinery is the one the product page uses:
   one row open at a time, the mark breathing only while words are arriving. */
await type('Dalloway');
chk(w.__CUR() && w.__CUR().key===w.__O[0].t, `the open offer is the one on screen (${w.__CUR()&&w.__CUR().key})`);
w.__PICK(0);
chk(d.querySelector('.bs-dot').classList.contains('is-working'), 'the mark breathes as soon as a row is opened');
chk(d.getElementById('bsText0').getAttribute('aria-busy')==='true', 'and the box says it is busy');
await sleep(60);
const words=[...d.getElementById('bsText0').querySelectorAll('.bs-w')];
chk(words.length>40, `the answer is split into words (${words.length})`);
chk(/<strong|<ul|<li/.test(d.getElementById('bsText0').innerHTML), 'with its markup intact');
await sleep(words.length*8+500);
chk(!d.querySelector('.bs-dot').classList.contains('is-working'), 'the mark stops after the last word');
w.__PICK(1);
chk(d.getElementById('bsText0').hidden && d.getElementById('bsText0').innerHTML==='',
    'opening the second closes and empties the first');
chk([...d.querySelectorAll('.bs-why')].filter(x=>x.getAttribute('aria-expanded')==='true').length===1,
    'exactly one row open');

/* 7. The new rules in the stylesheet. A length or a colour written in by hand
   here would never be seen by a token audit - it sits outside a declaration. */
const empties=[...nocom.matchAll(/([^{}]*\.empty[^{}]*)\{([^{}]*)\}/g)];
chk(empties.length>0, `rules for the empty grid (${empties.length})`);
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
const block=js.slice(js.indexOf('function bsBlock'), js.indexOf('function bsBlock')+1400);
chk(/btn-ghost/.test(block), 'the control is the ghost button, not a new one');
chk(/coverHTML\(/.test(block), 'the cover is the shop\'s own cover');
chk(/function bsResolve/.test(js) && /function bsOffer\(b\)\{ return bsResolve/.test(js),
    'what may be offered is written once, for the shelf and for a title off it');
chk(!/bsBook/.test(js), 'nothing reads the offer back off a book any more');

console.log();
console.log(bad ? 'FAILURES: '+bad : 'RESULT: OK');
process.exit(bad?1:0);
