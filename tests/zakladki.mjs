/* Every documentation tab renders in both languages. */
import { JSDOM } from 'jsdom';
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const dom=new JSDOM(fs.readFileSync(D+'index.html','utf8'),
  {runScripts:'outside-only',url:'http://localhost/',pretendToBeVisual:true});
const w=dom.window, d=w.document;
w.matchMedia=q=>({matches:false,addEventListener(){},removeEventListener(){},addListener(){},removeListener(){}});
w.scrollTo=()=>{}; w.Element.prototype.scrollTo=()=>{};
w.HTMLElement.prototype.animate=function(){return{finished:Promise.resolve(),cancel(){},addEventListener(){}};};
w.eval(fs.readFileSync(D+'js/app.js','utf8')
  +'\n;window.__S=DS_SECTIONS;window.__L=l=>{LANG=l};window.__I=I18N;window.__WRAP=dsScrollTables;'
  +'window.__PAGER=id=>{dsCurrent=id;return dsPager()};');
const S=w.__S;
let bad=0;
for (const lang of ['pl','en']){
  w.__L(lang);
  for (const s of S){
    let out;
    try{ out=s.body(); }catch(e){ console.log('FAIL', lang, s.id, e.message); bad++; continue; }
    if (/undefined/.test(out)){ console.log('undefined in', lang, s.id); bad++; }
    if (/—/.test(out)){ console.log('em dash in', lang, s.id); bad++; }
    const el=d.createElement('div'); el.innerHTML=out;
    const h1=el.querySelector('h1');
    if (!h1){ console.log('no h1 in', lang, s.id); bad++; continue; }
    /* Every tab opens the same way: a title, and under it one lede sentence in
       the ds-lede style. A tab that opens with an ordinary paragraph looks as
       though somebody else wrote it. */
    const first = h1.nextElementSibling;
    if (!first || first.tagName!=='P' || !first.classList.contains('ds-lede')){
      console.log('no ds-lede under h1 in', lang, s.id,
                  '(found: '+(first? first.tagName.toLowerCase()+'.'+first.className : 'nothing')+')');
      bad++;
    }
  }
}
/* The specimens on a component tab are written by hand next to the dictionary
   the shop reads from, so the two drift apart without anything breaking: the
   Badge tab showed "Last copies" and "Unavailable" while the shop said "Last
   pieces" and "Not available". Polish matched, so the rot was invisible to a
   Polish reader - and English is what the shop now opens in. The specimen is
   supposed to be the shop's own badge, so it has to carry the shop's own word. */
{
  const say0=(ok,m)=>{ console.log((ok?'  OK   ':'  FAIL ')+m); if(!ok) bad++; };
  const cls = {'':'new', soon:'soon', last:'last', out:'out', award:'pulitzer'};
  for (const lang of ['en','pl']){
    w.__L(lang);
    const e=d.createElement('div');
    e.innerHTML=S.find(s=>s.id==='badge').body();
    const specimens=[...e.querySelectorAll('.ds-badges .badge')];
    say0(specimens.length===Object.keys(cls).length,
         `${lang}: badge specimens on the tab: ${specimens.length}`);
    for (const sp of specimens){
      const variant=[...sp.classList].filter(c=>c!=='badge')[0]||'';
      const key=cls[variant];
      const want=key && w.__I[lang].status[key];
      say0(!!want && sp.textContent===want,
           `${lang}: .${variant||'badge'} says what the shop says`
           + (sp.textContent===want?'':` (${JSON.stringify(sp.textContent)} vs ${JSON.stringify(want)})`));
    }
  }
}

/* Every table stands in a scroller of its own, and every nested one does not.
   jsdom computes no layout, so this cannot prove a table stops widening the
   page - that was measured in a browser at 375px, where the widest tab went
   from 396px of sideways page scroll to none. What is checked here is the part
   a rename or a refactor breaks: that the wrapping happens at all, that it
   reaches every tab, and that a table inside a cell is left alone, because two
   scrollers nested on one axis trap the gesture between them. */
{
  const say0=(ok,m)=>{ console.log((ok?'  OK   ':'  FAIL ')+m); if(!ok) bad++; };
  let wrapped=0, nested=0, loose=0, nestedWrapped=0;
  for (const s of S){
    const host=d.createElement('div');
    host.className='ds-body';
    host.innerHTML=s.body();
    const holder=d.createElement('div');
    holder.appendChild(host);
    w.__WRAP(holder);
    for (const t of holder.querySelectorAll('table')){
      const inCell = !!t.parentElement.closest('table');
      const inBox  = t.parentElement.classList.contains('ds-scroll');
      if (inCell){ nested++; if (inBox) nestedWrapped++; }
      else { if (inBox) wrapped++; else loose++; }
    }
  }
  say0(wrapped>50, `tables put in a scroller across every tab: ${wrapped}`);
  say0(loose===0, `no table left outside one (${loose})`);
  /* No tab nests a table inside a cell today, so the rule that leaves those
     alone has nothing to act on in the real content. It is built here instead,
     rather than trusted: the day somebody writes one, this is what says whether
     it was handled. */
  {
    const holder=d.createElement('div');
    holder.innerHTML='<div class="ds-body"><table><tr><td><table id="inner"><tr><td>x</td></tr></table></td></tr></table></div>';
    w.__WRAP(holder);
    const inner=holder.querySelector('#inner');
    say0(!inner.parentElement.classList.contains('ds-scroll'),
         'a table inside a cell is left alone, so two scrollers cannot nest on one axis');
    say0(holder.querySelectorAll('.ds-scroll').length===1,
         'and the table around it gets exactly one');
  }
  say0(nested===0 && nestedWrapped===0,
       `no tab nests a table in a cell today (${nested})`);
  const css=fs.readFileSync(D+'css/styles.css','utf8');
  say0(/\.ds \.ds-scroll\{[^}]*overflow-x:auto/.test(css), 'the scroller rule exists in the stylesheet');
  say0(/\.ds \.ds-scroll > table\{margin:0\}/.test(css),
       'the table drops its own margins inside the scroller, so the rhythm is not scrolled away');
  say0(/\.ds \.ds-scroll:focus-visible\{/.test(css),
       'a scroller that takes focus shows it');
}

/* One tab to the next along the foot of the page. It is the only way through
   the documentation on a phone once the row of tab buttons has scrolled away,
   so a wrong link here is a dead end rather than a blemish: the sequence has to
   match the navigation's own order, both ends have to stop, and the direction
   has to reach a reader who cannot see which way the arrow points. */
{
  const say0=(ok,m)=>{ console.log((ok?'  OK   ':'  FAIL ')+m); if(!ok) bad++; };
  const css=fs.readFileSync(D+'css/styles.css','utf8');
  for (const lang of ['en','pl']){
    w.__L(lang);
    let ok=0, named=0;
    for (let i=0;i<S.length;i++){
      const e=d.createElement('div');
      e.innerHTML=w.__PAGER(S[i].id);
      const nav=e.querySelector('nav.ds-pager');
      if (!nav){ say0(false, `${lang}: ${S[i].id} has no pager`); continue; }
      const prev=nav.querySelector('.ds-pager-prev'), next=nav.querySelector('.ds-pager-next');
      const wantPrev = i>0 ? 'design/'+S[i-1].id : null;
      const wantNext = i<S.length-1 ? 'design/'+S[i+1].id : null;
      const got = a => a ? a.getAttribute('href').replace('#','') : null;
      if (got(prev)===wantPrev && got(next)===wantNext) ok++;
      else say0(false, `${lang}: ${S[i].id} points at ${got(prev)}/${got(next)}, expected ${wantPrev}/${wantNext}`);
      /* The arrow is hidden from the reader who is listening, so the name has to
         say the direction - and has to contain the words on screen, or the two
         part company for anyone using speech to drive the page. */
      for (const a of [prev,next].filter(Boolean)){
        const label=a.getAttribute('aria-label')||'';
        const seen=(a.querySelector('.lbl')||{}).textContent||'';
        if (label.includes(seen) && label.length>seen.length && !/undefined/.test(label)) named++;
        else say0(false, `${lang}: ${S[i].id} gives a link the name ${JSON.stringify(label)} over ${JSON.stringify(seen)}`);
      }
      if ([...nav.querySelectorAll('svg')].some(s=>s.getAttribute('aria-hidden')!=='true'))
        say0(false, `${lang}: an arrow on ${S[i].id} is not aria-hidden`);
    }
    say0(ok===S.length, `${lang}: every tab points at its neighbours (${ok}/${S.length})`);
    say0(named===(S.length-1)*2, `${lang}: every link says which way it goes (${named})`);
    /* Both ends stop. */
    const first=d.createElement('div'); first.innerHTML=w.__PAGER(S[0].id);
    const last=d.createElement('div');  last.innerHTML=w.__PAGER(S[S.length-1].id);
    say0(!first.querySelector('.ds-pager-prev') && !!first.querySelector('.ds-pager-next'),
         `${lang}: the first tab has nothing before it`);
    say0(!last.querySelector('.ds-pager-next') && !!last.querySelector('.ds-pager-prev'),
         `${lang}: the last tab has nothing after it`);
    say0(!!first.querySelector('.ds-pager-gap') && !!last.querySelector('.ds-pager-gap'),
         `${lang}: the missing side is held, so the one link left does not slide across`);
  }
  w.__PAGER(S[0].id);
  say0(/\.ds-pager\{display:none\}/.test(css), 'the pager is closed by default');
  say0(/\.ds-pager\{\s*display:flex/.test(css.replace(/\/\*[\s\S]*?\*\//g,'')),
       'and opened on a narrow screen');
  say0(/\.ico-forward\{transform:rotate\(180deg\)\}/.test(css),
       'the forward arrow is the back arrow turned, not a second drawing');
  const js2=fs.readFileSync(D+'js/app.js','utf8');
  say0(!/forward:\s*\{vb:/.test(js2), 'and nothing was added to the icon registry');
}

/* A specimen shows the reader the real component, so every class it puts on the
   page has to be a class the stylesheet knows. A component removed from the shop
   leaves its documentation rendering an unstyled box that still claims to be the
   thing - and nothing else catches it, because the tab renders, the suite passes
   and only a reader looking at that one tab ever sees it. Which is how the
   bookseller's avatar stood in the Avatar tab after the corner it lived in was
   taken out of the shop. */
{
  const say0=(ok,m)=>{ console.log((ok?'  OK   ':'  FAIL ')+m); if(!ok) bad++; };
  const css=fs.readFileSync(D+'css/styles.css','utf8').replace(/\/\*[\s\S]*?\*\//g,'');
  const known=new Set([...css.matchAll(/\.([a-zA-Z][\w-]*)/g)].map(m=>m[1]));
  /* Names the stylesheet has no rule for, and does not need one for. Recorded
     here rather than passed over, so that the next one has to be argued for:
     .ico-back and .ico-minus are how the script spells two of the icon
     constants, and .bar-top is the filter icon's upper stroke, named only so
     that the one below it - which does move - is not a lone labelled path. */
  ['ico-back','ico-minus','bar-top'].forEach(c=>known.add(c));
  const seen=new Map();
  w.__L('en');
  for (const s of S){
    const e=d.createElement('div');
    e.innerHTML=s.body();
    for (const el of e.querySelectorAll('.demo *, .ds-specimens *'))
      for (const c of el.classList)
        if (!known.has(c) && !seen.has(c)) seen.set(c, s.id);
  }
  say0(seen.size===0, seen.size
    ? `classes in a specimen that the stylesheet does not know: ${
        [...seen].map(([c,id])=>`.${c} (${id})`).join(', ')}`
    : 'every class a specimen puts on the page exists in the stylesheet');
}

w.__L('pl');
const box=(id)=>{const e=d.createElement('div'); e.innerHTML=S.find(s=>s.id===id).body(); return e;};
const m=box('motion'), t=[...m.querySelectorAll('table')];
console.log('tabs:', S.length);
console.log('Motion, rows per table:', t.map(x=>x.querySelectorAll('tbody tr').length).join(' / '));
console.log('Avatar, specification rows:', box('avatar').querySelectorAll('table')[1].querySelectorAll('tbody tr').length);
const col=box('colour');
console.log('Colour, token tables:', [...col.querySelectorAll('table.tok-table')].map(x=>x.querySelectorAll('tbody tr').length).join(' / '));
console.log('Colour, primitives:', col.querySelectorAll('table')[0].querySelectorAll('tbody tr').length);
/* English and euro are the shop's starting point, because the first reader
   usually arrives from a portfolio link written in English. The markup carries
   the English strings too, so there is no flash of the wrong language before the
   script runs, and the pressed switch matches the state it describes. */
const js=fs.readFileSync(D+'js/app.js','utf8');
const html=fs.readFileSync(D+'index.html','utf8');
const dflt=(k)=>(js.match(new RegExp('let '+k+' = "(\\w+)"'))||[])[1];
const say=(ok,m)=>{ console.log((ok?'  OK   ':'  FAIL ')+m); if(!ok) bad++; };
say(dflt('LANG')==='en', `LANG starts at en (${dflt('LANG')})`);
say(dflt('CUR')==='eur', `CUR starts at eur (${dflt('CUR')})`);
say(/id="swEN" aria-pressed="true"/.test(html) && /id="swPL" aria-pressed="false"/.test(html),
    'the language switch in the markup shows EN pressed');
say(/id="swEUR" aria-pressed="true"/.test(html) && /id="swPLN" aria-pressed="false"/.test(html),
    'the currency switch in the markup shows EUR pressed');
say(!/[żźćńółęąśŻŹĆĄŚĘŁÓŃ]/.test(html.replace(/<!--[\s\S]*?-->/g,'').replace(/<title>[\s\S]*?<\/title>/g,'')),
    'no Polish string is left in the markup to flash before the script runs');

/* Right language is not enough: the markup has to carry the same words the
   dictionary does, or the first paint is replaced by a different wording a
   moment later. Compared against a copy of the page that never ran the script. */
const surowy = new JSDOM(html).window.document;
for (const id of ['skipLink','strap','promoCopy','lblFilter','sortLbl','lnkAbout','lnkDesign']){
  const a = (surowy.getElementById(id)||{}).textContent;
  const b = (d.getElementById(id)||{}).textContent;
  say(a===b, `#${id}: the markup says what the dictionary says` + (a===b?'':` (${JSON.stringify(a)} vs ${JSON.stringify(b)})`));
}
say(surowy.getElementById('searchInput').placeholder === d.getElementById('searchInput').placeholder,
    'the search placeholder in the markup matches the dictionary');

console.log(bad? 'FAILURES: '+bad : 'RESULT: every tab renders in both languages');
process.exit(bad?1:0);
