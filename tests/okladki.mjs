/* The covers are the one part of the shop the tests never touched, and the one
   part that breaks silently. A path with no file behind it gives an empty box:
   the page still renders, every other suite stays green, and the defect is
   visible only to somebody who scrolls past that book. Worse, a file can exist
   under a name that describes a different book - then nothing is broken at all,
   until somebody replaces the cover the name promises and the wrong book gets
   the new jacket. Both happened here. */
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const js = fs.readFileSync(D+'js/app.js','utf8');

let bad=0;
const chk=(c,m)=>{ console.log((c?'  OK   ':'  FAIL ')+m); if(!c) bad++; };

/* 1. Every asset named in the script is a file that exists. This is what the
   build reports as a warning and then carries on, so the warning is easy to
   miss; here it stops the suite. */
const refs = [...new Set([...js.matchAll(/"(assets\/[^"]+)"/g)].map(m=>m[1]))];
chk(refs.length >= 20, `assets named in the script: ${refs.length}`);
for (const r of refs)
  chk(fs.existsSync(D+r), `${r} exists`);

/* 2. Nothing lies around unused. An orphan in the folder is not itself a
   defect, but it is the trace one leaves: the two covers that lost their books
   sat here unreferenced while the two references pointed at nothing. */
const onDisk = fs.readdirSync(D+'assets/covers').filter(f=>/\.(jpg|png)$/i.test(f));
const used = new Set(refs.map(r=>r.split('/').pop()));
for (const f of onDisk)
  chk(used.has(f), `${f} is used by the shop`);

/* 3. No two books share a cover. Two entries pointing at one jacket is what a
   half-finished replacement looks like. */
const perBook = [...js.matchAll(/img:(COVER_\w+)/g)].map(m=>m[1]);
const dup = perBook.filter((c,i)=>perBook.indexOf(c)!==i);
chk(dup.length===0, `each book has its own cover${dup.length?` (shared: ${[...new Set(dup)].join(', ')})`:''}`);

/* 4. The file name describes the book it holds. Not a slug comparison - the
   names are older than the rule and do not all follow one - but a weaker test
   that still catches a cover filed under somebody else's title: at least one
   word of the name has to appear in the title, in either language. Short words
   are dropped, because "the" and "a" match everything. */
const strip = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')
                     .replace(/[^a-z0-9]+/g,' ').trim();
const titles = new Map();          /* COVER_X -> its book's two titles */
{
  const blocks = js.split(/\n  \{t:"/).slice(1);
  for (const b of blocks){
    const t  = (b.match(/^((?:[^"\\]|\\.)*)"/)||[])[1];
    const tp = (b.match(/tp:"((?:[^"\\]|\\.)*)"/)||[])[1];
    const c  = (b.match(/img:(COVER_\w+)/)||[])[1];
    if (c) titles.set(c, strip(t+' '+tp));
  }
}
chk(titles.size === perBook.length && titles.size >= 19,
    `books read from the data: ${titles.size}`);
for (const [c, title] of titles){
  const path = (js.match(new RegExp('const '+c+' = "([^"]+)"'))||[])[1] || '';
  const words = strip(path.split('/').pop().replace(/\.\w+$/,'')).split(' ').filter(w=>w.length>3);
  const hit = words.filter(w => title.includes(w));
  chk(hit.length>0,
      `${path.split('/').pop()} names a word from its title (${c}${hit.length?'':` -> "${title.slice(0,40)}"`})`);
}

/* 5. Weight. A cover is decoration on a page somebody opens from a phone, and
   the whole folder is inlined into preview.html as base64, which costs a third
   again on top. The ceiling is a judgement, not a law - it stands here so that
   dropping a print-resolution scan into the folder is noticed on the same day
   rather than by a reader on a slow connection. */
const CEILING_KB = 900;
for (const f of onDisk){
  const kb = Math.round(fs.statSync(D+'assets/covers/'+f).size/1024);
  chk(kb <= CEILING_KB, `${f} is ${kb} kB (ceiling ${CEILING_KB} kB)`);
}
const totalKb = Math.round(onDisk.reduce((s,f)=>s+fs.statSync(D+'assets/covers/'+f).size,0)/1024);
chk(totalKb <= 4000, `the covers weigh ${totalKb} kB in total (ceiling 4000 kB)`);

console.log();
console.log(bad ? 'FAILURES: '+bad : 'RESULT: OK');
process.exit(bad?1:0);
