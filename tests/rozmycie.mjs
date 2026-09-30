/* Three design changes at once: the blur scale, the blur under a modal layer,
   the tiles arriving blurred, and the return from a product page as the opening
   played backwards. This suite watches the things nobody sees until somebody
   breaks them: that no blur strength is typed by hand, that both modal
   backdrops do the same thing, and that the return has all three safeguards. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css=fs.readFileSync(D+'css/styles.css','utf8');
const js =fs.readFileSync(D+'js/app.js','utf8');
const nocom=css.replace(/\/\*[\s\S]*?\*\//g,'');
const root=nocom.match(/:root\s*\{([\s\S]*?)\n\}/)[1];

let bad=0;
const chk=(c,m)=>{ console.log((c?'  OK   ':'  FAIL ')+m); if(!c) bad++; };

/* the helper looks for a selector and its brace regardless of line breaks,
   because selectors in this sheet are sometimes written across several lines */
/* One selector may share its rule with others, and a lookup anchored on the
   brace finds only the last of a group. So the sheet is read rule by rule and
   every selector in the group is matched separately: a pattern that misses a
   grouped rule reports a declaration as absent when it is right there, which is
   the kind of failure that sends somebody looking in the wrong file. */
const rule = sel => {
  const norm = t => t.replace(/\s+/g,' ').trim();
  for (const m of nocom.matchAll(/([^{}]+)\{([^{}]*)\}/g)){
    if (m[1].split(',').some(one => norm(one) === norm(sel)))
      return norm(m[2]);
  }
  return null;
};

/* 1. the scale exists and has its steps */
const steps=['--nu-blur-sm','--nu-blur-md','--nu-blur-lg','--nu-blur-xl'];
const values={};
for (const t of steps){
  const m=root.match(new RegExp(t+'\\s*:\\s*([^;]+);'));
  chk(!!m, `step ${t} declared`);
  if (m) values[t]=m[1].trim();
}
const px=t=>parseFloat(values[t]);
const rising=steps.every((t,i)=>i===0 || px(steps[i-1])<px(t));
chk(rising, `the scale rises: ${steps.map(t=>values[t]).join(' < ')}`);

/* 2. no blur strength is typed by hand. blur(0) is zero, not a strength. */
const typed=[...nocom.matchAll(/blur\(\s*([0-9.]+)(px|rem|em)\s*\)/g)].filter(m=>parseFloat(m[1])!==0);
chk(typed.length===0, `no blur strength is typed by hand${typed.length?' ('+typed.map(m=>m[0]).join(', ')+')':''}`);
chk(!/--bs-blur/.test(css), 'the local --bs-blur variable is gone in favour of the token');

/* 3. every step has a use: a scale with no use is a dead token */
for (const t of steps)
  chk(new RegExp('blur\\(var\\('+t+'\\)\\)').test(nocom), `${t} is used`);

/* 4. both modal backdrops cover the same way: the blur arrives together with the
   dimming rather than jumping in under a still-transparent ground */
for (const sel of ['.sheet-backdrop','.drawer-backdrop']){
  const rest=rule(sel), open=rule(sel+'.open');
  chk(/backdrop-filter\s*:\s*blur\(\s*0\s*\)/.test(rest||''), `${sel} starts with no blur`);
  chk(/transition\s*:[^;]*backdrop-filter/.test(rest||''),     `${sel} arrives by transition, not by jump`);
  chk(/backdrop-filter\s*:\s*blur\(var\(--nu-blur-md\)\)/.test(open||''), `${sel}.open takes --nu-blur-md`);
  chk(/-webkit-backdrop-filter/.test(open||''), `${sel}.open has the webkit spelling`);
}

/* 5. the tiles' entrance: blur in the opening frame, gone under reduced motion */
const frames=nocom.match(/@keyframes cardIn\s*\{([\s\S]*?)\n\s*\}/);
chk(!!frames && /blur\(var\(--nu-blur-sm\)\)/.test(frames[1]), 'cardIn starts from --nu-blur-sm');
chk(!!frames && /blur\(0\)/.test(frames[1]),                   'cardIn ends sharp');
chk(!!frames && !/translateY\(\s*\d/.test(frames[1]),          'cardIn has no hand-typed distance');
const reduced=nocom.match(/@media\s*\(prefers-reduced-motion:reduce\)\s*\{([^}]*\.grid\.mosaic[^}]*)\}/);
chk(!!reduced && /animation\s*:\s*none/.test(reduced[1]), 'the mosaic stands down under reduced motion');
/* the zoom curve has four fifths of the way behind it in the first quarter of
   the time: right for a tile flying across the screen, wrong for a blur that is
   meant to be seen */
const mosaic=rule('.grid.mosaic .card');
chk(!!mosaic, 'the mosaic rule was found');
chk(/animation\s*:[^;]*ease-out/.test(mosaic||''), 'the mosaic takes the ease-out curve');
chk(!/--nu-ease-zoom/.test(mosaic||''),            'the mosaic does not take the zoom curve');

const mos=js.match(/if \(firstVisit\)\{([\s\S]*?)\n  \}/);
chk(!!mos && /motionMs\("--nu-motion-stagger"\)/.test(mos[1]),
    'the cards still start spread over --nu-motion-stagger');
chk(!!mos && !/\+ \d{2,}/.test(mos[1]), 'closing the mosaic carries no hand-typed number');

/* 5b. the product page: what the book has to say arrives out of a blur the same
   way the bookseller's lines do - at the same step, because these are words too */
/* Words take the step for words and the button the step for a shape: a whole
   shape blurred as hard as a sentence spreads into a stain instead of softening. */
chk(/filter:blur\(var\(--nu-blur-lg\)\)/.test(rule('.p-info.p-enter')||''),
    'the book information: entrance at the step for words');
chk(/filter:blur\(var\(--nu-blur-sm\)\)/.test(rule('.p-cta.p-enter-cta')||''),
    'the button: entrance at the step for an image, because it is a shape, not a sentence');
for (const [sel, name] of [['.p-info.p-enter-in','the information'],
                            ['.p-cta.p-enter-cta-in','the button']]){
  const r=rule(sel);
  chk(/filter:blur\(0\)/.test(r||'') && /transition:[\s\S]*filter/.test(r||''),
      `${name}: sharpens by transition, not by jump`);
}
/* One distance for the whole entrance: a bookseller's line, a card in the grid,
   the title and the button all rise by the same step, so one distance means one
   thing. */
/* The bookseller's section closes the column and arrives on the same step as the
   button, because from the reader's side they are one thing: the last block of
   the page. It takes the weaker blur for its own reason - it has a ground, and a
   tinted block softened as hard as a sentence loses its edge before it has one. */
chk(/filter:blur\(var\(--nu-blur-sm\)\)/.test(rule('.bs.p-enter-cta')||''),
    'the section: entrance at the step for a shape, as the button takes');
chk(/filter:blur\(0\)/.test(rule('.bs.p-enter-cta-in')||''),
    'and it sharpens by transition too');

for (const sel of ['.p-info.p-enter','.p-cta.p-enter-cta','.bs.p-enter-cta']){
  const r=rule(sel)||'';
  chk(/transform:translateY\(var\(--nu-space-nano\)\)/.test(r), `${sel}: rises by a step from the scale`);
}
for (const sel of ['.p-info.p-enter-in','.p-cta.p-enter-cta-in','.bs.p-enter-cta-in']){
  const r=rule(sel)||'';
  chk(/transform:none/.test(r) && /transition:[\s\S]*transform/.test(r),
      `${sel}: arrives in place by transition`);
}

/* 6. the block at the top of the window: the ramp reaches into the content only
   while something is passing behind it, and the filters column stops at the
   block's edge and stands above the ramp instead of falling under it */
const veil=rule('.masthead-veil'), veilScrolled=rule('body.is-scrolled .masthead-veil');
chk(/bottom:\s*0/.test(veil||''),  'at rest the ramp does not reach below the block');
chk(/bottom:\s*calc\(-1 \* var\(--nu-space-max\)\)/.test(veilScrolled||''),
    'the ramp opens only once the page is scrolled');
chk(/transition:\s*bottom/.test(veil||''), 'the ramp opens by transition, not by jump');
chk(/markScroll/.test(js) && /addEventListener\("scroll", markScroll/.test(js),
    'the scrolled state is read rather than guessed');
/* The veil must not sit on a negative step. Chrome does not compute
   backdrop-filter for an element on a negative step inside a stacking context,
   and the ramp then renders as a plain wash with nothing blurred behind it -
   silently, and only in Chrome. The rows of the block are lifted over the veil
   instead, which paints the same and computes in both browsers. */
chk(!/z-index:\s*-/.test(veil||''), 'the veil does not sit on a negative step');
chk(/z-index:\s*0/.test(veil||''), 'the veil sits on the natural step');
const lifted=nocom.match(/\.masthead > \.promo,\s*\.masthead > header,\s*\.masthead > \.productbar\{([^}]*)\}/);
chk(!!lifted, 'the rows of the block have a rule of their own');
chk(/position:relative/.test(lifted?.[1]||'') && /z-index:1/.test(lifted?.[1]||''),
    'and they stand one step over the veil');

const filters=rule('.filters');
chk(/top:\s*var\(--nu-masthead-height\)/.test(filters||''),
    'the filters stop at the block\'s edge, in line with the grid');
chk(!/masthead-height\)\s*\+/.test(filters||''),
    'the filters are not pushed below their own place in the layout');
chk(/z-index:\s*81/.test(filters||''), 'the filters stand above the ramp, so it does not blur them');

/* 6b. the bookseller stands in the product column, not over the page. The
   ceiling, the floor measured against the footer and the list's own scroll were
   all there to keep a floating panel on screen; a section in the flow has
   nothing to be kept inside, and leaving any of that behind would be a measure
   taken for a box that no longer exists. */
chk(!/position:\s*fixed/.test(rule('.bs')||''), 'the bookseller is not pinned to the window');
chk(!/--bs-headroom/.test(nocom), 'no ceiling is computed for her any more');
chk(!/--bs-lift/.test(nocom), 'and no floor is measured against the footer');
chk(/background:var\(--nu-bg-tertiary\)/.test(rule('.bs')||''),
    'she is set off by a ground of her own, which is another voice and not another paragraph');
chk(!/border/.test(rule('.bs')||''),
    'and by that alone: a fill and an outline together would make a box of it');
chk(!/overflow-y:\s*auto/.test(rule('.bs-list')||''),
    'the list has no scroll of its own: the page is what scrolls now');

/* And the Motion tab says what moves, which after that is one thing: the breath
   while an answer arrives. A row about a panel coming up from under a mark, or
   about one walking between two sizes, would be describing an animation the
   stylesheet no longer holds - and a table of transitions is exactly where such
   a row survives longest, because nothing renders it wrong. */
{
  /* The stylesheet goes in with the markup. The scale table is built by reading
     each token's value off the page and dropping any row whose value comes back
     empty, so without the sheet that table renders as nothing at all - and a
     check reading the tab's text would then pass over whatever the table says,
     however wrong. Found by putting a wrong sentence back and watching this go
     green. */
  const dom2=new JSDOM(
    fs.readFileSync(D+'index.html','utf8').replace('</head>','<style>'+css+'</style></head>'),
    {runScripts:'outside-only',url:'http://localhost/',pretendToBeVisual:true});
  const w2=dom2.window, d2=w2.document;
  w2.matchMedia=q=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
  w2.scrollTo=()=>{}; w2.Element.prototype.scrollTo=()=>{};
  w2.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
  w2.eval(fs.readFileSync(D+'js/app.js','utf8')+'\n;window.__S=DS_SECTIONS;window.__L=l=>{LANG=l};');
  for (const lang of ['en','pl']){
    w2.__L(lang);
    const e=d2.createElement('div');
    e.innerHTML=w2.__S.find(s=>s.id==='motion').body();
    const t=e.textContent;
    chk(!/\bpanel\b|dymek|dymka|dymku/i.test(t),
        `${lang}: the Motion tab names no panel of hers`);
    chk(!/pause before|zwłoka przed/i.test(t),
        `${lang}: nor a pause before she speaks, there being none`);
    chk(/breath|oddech/i.test(t),
        `${lang}: and the breath is still described, because the Bookseller tab sends the reader here for it`);
  }
}

/* 7. the strapline inverting under the block, and the search field that does
   not. It works only while scrolled and only on an idle field: a typed query
   has to read as text rather than as an effect. */
const strap=rule('body.is-scrolled .logo .strap');
chk(/mix-blend-mode:\s*difference/.test(strap||''), 'the strapline inverts while scrolled');
chk(/color:\s*var\(--nu-fg-secondary\)/.test(strap||''),
    'it inverts with the same value it has at rest');
chk(!rule('.logo .strap')?.includes('mix-blend-mode'),
    'at rest the strapline does not invert at all');
/* The search field deliberately does not answer scrolling. We tried inverting
   and a see-through rule; neither gave the legibility this field needs, and each
   attempt added a rule to a component that is meant to be simple. The colour of
   the icon, the placeholder and the rule is one, scrolled or not. */
chk(!/is-scrolled[^{]*search-wrap/.test(nocom),
    'the search field has no separate rules for scrolling');
chk(!/--nu-border-sheer/.test(css), 'the see-through border token went with it');
/* We also tried a bed of its own under the field. Taken off with the rest: the
   search field holds nothing that answers scrolling or what passes behind it. */
const html=fs.readFileSync(D+'index.html','utf8');
chk(!/search-bed/.test(css) && !/search-bed/.test(html), 'the field\'s bed is gone');
chk(!/--nu-bg-search/.test(css), 'and its token with it');
/* The bar over the grid - filters, search, sorting - keeps its place in the
   layout but stays outside the pinned block: a field is for typing into, and a
   field riding over moving content fights for every word it shows. What stays
   pinned is the promotion, the header and the way back from a product page. */
const block=html.slice(html.indexOf('<div class="masthead"'), html.indexOf('/.masthead'));
chk(!/id="shopbar"/.test(block), 'the bar over the grid stands outside the pinned block');
chk(/id="productbar"/.test(block), 'the way-back bar stays in the block');
chk(/class="promo"/.test(block) && /<header>/.test(block), 'the promotion and the header stay in the block');
chk(/class="shopbar"[\s\S]{0,700}search-wrap/.test(html),
    'the search field stands in the bar where it stood');
chk(html.indexOf('id="shopbar"') < html.indexOf('class="shop" id="shop"'),
    'the bar stands above the grid');

/* 8. the return to the grid */
chk(/data-id="\$\{b\.id\}"/.test(js), 'a card in the grid carries the data-id the return finds it by');
chk(/\.card\[data-id="\$\{from\.id\}"\]\s*\.tile/.test(js), 'the return looks for the tile by that same attribute');
const back=js.match(/function playBackTransition\(\)\{([\s\S]*?)\n\}/);
chk(!!back, 'playBackTransition exists');
if (back){
  chk(/prefers-reduced-motion/.test(back[1]), 'the return stands down under reduced motion');
  chk(/if \(!tile\) return/.test(back[1]),    'the return gives up when the book is no longer in the grid');
  chk(/motionMs\("--nu-motion-slower"\)/.test(back[1]), 'the flight takes its duration from the scale, not from a number');
  /* The text and the ground go with the change of view rather than exiting on
     their own before the flight: the reader has already said where she wants to
     be, so a separate farewell from the page reads as waiting, not as leaving. */
  chk(!/const sheet/.test(back[1]) && !/from\.view/.test(js),
      'the page has no exit of its own before the flight');
  chk(!/motionMs\("--nu-motion-base"\)/.test(back[1]),
      'and no second duration for that exit');
  chk(/const to = tile\.getBoundingClientRect\(\)/.test(back[1]),
      'the target is measured after the view has changed and the scroll restored');
  chk(/if \(!to\.width \|\| !to\.height\)/.test(back[1]),
      'the flight gives up when the target has vanished');
  chk(/motionCurve\("--nu-ease-zoom"\)/.test(back[1]), 'the return flies the same curve as the opening');
  /* The packshot has to be on screen from the first frame. Put there only after
     the text has faded, it disappears for the length of that fade and comes back
     to fly - and that is what reads as a jump. */
  /* The filters column stands a step above the block, so it stands above the
     flight too. For the length of the return it gives that step up - otherwise
     the packshot flies behind it. */
  chk(/classList\.add\("is-flying"\)/.test(back[1]), 'the filters column stands down for the flight');
  chk(/classList\.remove\("is-flying"\)/.test(back[1]), 'and takes its place back afterwards');
  chk(back[1].indexOf('add("is-flying")') < back[1].indexOf('clone.animate'),
      'it stands down before the flight starts');
  chk(/z-index:auto/.test(rule('body.is-flying .filters')||''),
      'the stylesheet knows what a flight means for the filters column');
}
/* The shop puts the reader into a view itself, so the browser restoring the
   scroll is a second, later jump - and it lands after route has measured where
   everything stands. */
chk(/history\.scrollRestoration = "manual"/.test(js),
    'restoring the scroll belongs to the shop, not to the browser');
/* The measurement takes the packshot alone: the rest of the view does not leave
   separately, so there is nothing else to copy. */
const capture=js.match(/function captureProduct\(id\)\{([\s\S]*?)\n\}/);
chk(!!capture, 'captureProduct exists');
if (capture){
  chk(/\.p-tile/.test(capture[1]) && /cloneNode\(true\)/.test(capture[1]),
      'the measurement takes the packshot and a copy of it');
  chk(!/productEl\.cloneNode/.test(capture[1]),
      'and nothing else, because the rest of the view does not leave separately');
}
/* the measurement has to land before the product view is hidden - otherwise
   there is nothing left to measure */
const route=js.match(/function route\(\)\{([\s\S]*?)\n\}/);
if (route){
  const iCapture=route[1].indexOf('captureProduct');
  const iHide=route[1].indexOf('productEl.hidden');
  chk(iCapture>-1 && iHide>-1 && iCapture<iHide, 'the product page is measured before it is hidden');
  chk(route[1].indexOf('playBackTransition') > route[1].indexOf('scrollTo'),
      'the flight comes back only after the grid scroll has been restored');
}

/* 9. the documentation keeps up: every step described, both new transitions in
   the table */
chk(/--nu-blur-sm/.test(js) && /--nu-blur-md/.test(js) && /--nu-blur-lg/.test(js),
    'all three steps are named in the documentation');
chk(/Powrót do siatki/.test(js),    'the Motion tab has a row about the return');
chk(/Zasłonięcie widoku/.test(js),  'the Motion tab has a row about covering the view');
chk(/\["blur",\s*\["--nu-blur"\]\]/.test(js), 'the token inventory has its own category for blur');

console.log();
console.log(bad ? 'FAILURES: '+bad : 'RESULT: OK');
process.exit(bad?1:0);
