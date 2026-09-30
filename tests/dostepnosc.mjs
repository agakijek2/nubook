/* The Accessibility tab: what breaks quietly inside it.

   The contrast table stopped working when the colour tokens moved to
   light-dark(), and nobody saw it, because the tab went on rendering - only
   with dashes instead of numbers. This suite catches that case. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css=fs.readFileSync(D+'css/styles.css','utf8');
const js=fs.readFileSync(D+'js/app.js','utf8');
let bad=0;
const fail=(...a)=>{ console.log('  FAIL:', ...a); bad++; };

function page({dark=false, reduce=false}={}){
  const html=fs.readFileSync(D+'index.html','utf8').replace('</head>','<style>'+css+'</style></head>');
  const dom=new JSDOM(html,{runScripts:'outside-only',url:'http://localhost/',pretendToBeVisual:true});
  const w=dom.window;
  w.matchMedia=q=>({
    matches: (dark && /prefers-color-scheme:\s*dark/.test(q)) || (reduce && /prefers-reduced-motion/.test(q)),
    addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
  w.scrollTo=()=>{}; w.Element.prototype.scrollTo=()=>{};
  w.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
  /* Durations shortened so the suite takes a moment rather than seconds. */
  const st=w.document.documentElement.style;
  [['--nu-motion-quick','4ms'],['--nu-motion-base','4ms'],['--nu-motion-slower','4ms']]
    .forEach(([k,v])=>st.setProperty(k,v));
  w.eval(js+'\n;window.__S=DS_SECTIONS;window.__SC=dsScheme;window.__TYPE=bsType;window.__HEX=dsHex;window.__HEXOF=dsHexOf;');
  return w;
}

/* 1. Every cell of the contrast table carries a number and a verdict, in both
      schemes, and the number matches one computed separately. */
const EXPECTED={
  light:{'fg-primary / bg-primary':'18.26','fg-secondary / bg-primary':'4.81',
    'fg-secondary / bg-secondary':'4.26',
    'fg-primary / bg-tertiary':'17.19','fg-secondary / bg-tertiary':'4.53',
    'fg-tertiary / bg-primary':'2.43',
    'fg-inverse / bg-inverse':'18.26','fg-warning / bg-primary':'8.08',
    'fg-alert / bg-primary':'6.54','fg-highlight / bg-highlight':'5.70'},
  dark:{'fg-primary / bg-primary':'16.17','fg-secondary / bg-primary':'7.50',
    'fg-secondary / bg-secondary':'6.46',
    'fg-primary / bg-tertiary':'15.09','fg-secondary / bg-tertiary':'7.00',
    'fg-tertiary / bg-primary':'3.80',
    'fg-inverse / bg-inverse':'16.17','fg-warning / bg-primary':'6.09',
    'fg-alert / bg-primary':'5.89','fg-highlight / bg-highlight':'5.70'}};
const BELOW_AA={light:2, dark:1};
for (const scheme of ['light','dark']){
  const w=page({dark: scheme==='dark'});
  if (w.__SC()!==scheme) fail('dsScheme() returns', w.__SC(), 'instead of', scheme);
  const el=w.document.createElement('div');
  el.innerHTML=w.__S.find(s=>s.id==='a11y').body();
  const table=[...el.querySelectorAll('table')].find(t=>t.className.includes('tok-table'));
  const rows=[...table.querySelectorAll('tbody tr')];
  if (rows.length!==10) fail('contrast rows:', rows.length, '(10 expected)');
  /* A ground built by mixing two others has to resolve, or its row says nothing
     and the table quietly stops covering it. Checked on a mix that is not half
     and half: --nu-bg-tertiary is 50/50, so it comes out the same whichever way
     round the two are taken, and a reversed ratio would pass unseen. The
     secondary action's ground is 6%, where the two differ by a mile. */
  const mixed = {light:'fafafa', dark:'383838'}[scheme];
  const got = w.__HEX('--nu-bg-action-secondary');
  if (got !== mixed) fail(scheme, 'a colour mixed 6/94 resolves to', got, 'instead of', mixed);
  /* And a mix with transparent stays unresolved, because what it comes to
     depends on whatever is behind it. */
  if (w.__HEX('--nu-bg-scrim') !== null) fail(scheme, 'an alpha resolved to a flat colour, which it cannot be');
  /* And none of it may depend on how the stylesheet happens to be wrapped. The
     same value is put in twice, once on one line and once across three: a
     splitter that cuts at the first comma it meets gets the second right by
     accident, because a newline stops it, and the first one wrong. */
  const jedna = 'light-dark(color-mix(in srgb, #ffffff 50%, #000000), color-mix(in srgb, #000000 50%, #ffffff))';
  const trzy  = 'light-dark(\n  color-mix(in srgb, #ffffff 50%, #000000),\n  color-mix(in srgb, #000000 50%, #ffffff))';
  if (w.__HEXOF(jedna) !== w.__HEXOF(trzy) || w.__HEXOF(jedna) !== '808080')
    fail(scheme, 'wrapping changes the answer:', w.__HEXOF(jedna), 'on one line,', w.__HEXOF(trzy), 'across three');
  let below=0;
  for (const tr of rows){
    const pair=tr.children[0].textContent.trim(), cell=tr.children[1].textContent.trim();
    if (!/^\d+\.\d\d:1 /.test(cell)) fail(scheme, pair, '->', JSON.stringify(cell), '(no number)');
    const ratio=cell.split(':1')[0];
    if (EXPECTED[scheme][pair] && ratio!==EXPECTED[scheme][pair])
      fail(scheme, pair, 'gives', ratio, 'instead of', EXPECTED[scheme][pair]);
    if (/poniżej|below/.test(cell)) below++;
  }
  if (below!==BELOW_AA[scheme]) fail(scheme, 'pairs below AA:', below, '(expected', BELOW_AA[scheme]+')');
  console.log(`contrast ${scheme}: ${rows.length} pairs, ${below} below AA`);
}

/* 2. Radio buttons and consent boxes draw the shop's ring, not the browser's. */
const bare=css.replace(/\/\*[\s\S]*?\*\//g,'');
for (const sel of ['.opt input:focus-visible','.consent input:focus-visible']){
  const re=new RegExp('[^{}]*'+sel.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'[^{}]*\\{([^{}]*)\\}');
  const m=bare.match(re);
  if (!m || !/outline:var\(--nu-focus-ring\)/.test(m[1].replace(/\s/g,''))) fail('no focus rule for', sel);
}
console.log('focus on radios and consent boxes: rules present');

/* 3. With reduced motion the bookseller delivers the whole text at once, and
      without it she reveals it line by line.

      jsdom computes no layout, so every word has zero geometry and they would
      all fall into one line. We substitute rectangles of our own: the first
      three words on one height, the rest on another - two lines, the way a
      browser would break them. */
for (const reduce of [false,true]){
  const w=page({reduce});
  let n=0;
  Object.defineProperty(w.HTMLElement.prototype,'getBoundingClientRect',{configurable:true,
    value(){
      if (!this.classList || !this.classList.contains('bs-w')) return {top:0,bottom:40,height:40};
      if (this.__i===undefined) this.__i = n++;
      const line = this.__i < 3 ? 0 : 1;
      return {top: line*20, bottom: (line+1)*20, height:20};
    }});
  const box=w.document.createElement('div');
  box.className='bs-text';
  w.document.body.appendChild(box);
  w.__TYPE(box, '<p>jedno dwa trzy cztery piec</p>', null);
  const words=[...box.querySelectorAll('.bs-w')];
  const atOnce=words.filter(s=>s.classList.contains('is-in')).length;
  /* No check of the state halfway through, because that would depend on the
     clock. What counts is the split itself: with reduced motion the text stands
     whole from the first moment, and without it not a word does - the first line
     waits one interval, to give the panel a head start on the place it opens. */
  if (reduce && atOnce!==words.length) fail('with reduce, visible at once:', atOnce, 'of', words.length);
  if (!reduce && atOnce!==0) fail('without reduce nothing should be visible at once, but there is', atOnce);
  await new Promise(r=>setTimeout(r, 200));
  const after=words.filter(s=>s.classList.contains('is-in')).length;
  if (after!==words.length) fail('once finished, visible:', after, 'of', words.length);
  console.log(`bsType reduce=${reduce}: at once ${atOnce}/${words.length}, then ${after}/${words.length}`);
}

console.log(bad ? 'FAILURES: '+bad : 'RESULT: Accessibility describes what the code does');
process.exit(bad?1:0);
