/* The ladder of steps stands in two places: in the script, where the tab reads
   it, and in docs/roadmap.md, where anyone looking at the repository reads it.
   Two copies of a plan part company in the first week nobody is watching - so a
   test compares them rather than good intentions. */
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const js  = fs.readFileSync(D+'js/app.js','utf8');
const md  = fs.readFileSync(D+'docs/roadmap.md','utf8');
const html= fs.readFileSync(D+'index.html','utf8');

let bad=0;
const chk=(c,m)=>{ console.log((c?'  OK   ':'  FAIL ')+m); if(!c) bad++; };

/* 1. the steps in the script */
const block = js.match(/const DS_ROADMAP = \[([\s\S]*?)\n\];/);
chk(!!block, 'DS_ROADMAP exists');
const inScript = [...(block?block[1]:'').matchAll(/\{ n:"(\d\d)", state:"(\w+)", doc:(null|"[^"]+")/g)]
  .map(m=>({n:m[1], state:m[2], doc:m[3]==='null'?null:m[3].slice(1,-1)}));
chk(inScript.length>0, `steps read from the script (${inScript.length})`);

/* 2. the steps in the markdown: the rows of the ladder table */
const inMd = [...md.matchAll(/^\|\s*\**(\d\d)\**\s*\|\s*\**([^|*]+)\**\s*\|\s*\**([^|*]+?)\**\s*\|/gm)]
  .map(m=>({n:m[1], title:m[2].trim(), state:m[3].trim()}));
chk(inMd.length>0, `steps read from roadmap.md (${inMd.length})`);

/* 3. the same set of numbers, in the same order */
const a=inScript.map(s=>s.n).join(','), b=inMd.map(s=>s.n).join(',');
chk(a===b, `the same ladder in both places${a===b?'':`\n         script: ${a}\n         markdown: ${b}`}`);

/* 4. the same state. The markdown writes it as prose, so we map it onto the
      same four. */
const fromWords = s => /^done/.test(s) ? 'done'
              : /in progress/.test(s) ? 'now'
              : /^next/.test(s) ? 'next' : 'later';
for (const step of inMd){
  const s = inScript.find(x=>x.n===step.n); if(!s) continue;
  chk(fromWords(step.state)===s.state, `step ${step.n}: state agrees (${s.state})`);
}

/* 5. a closed step has a decision record, and that file exists */
for (const s of inScript){
  if (s.state!=='done'){ chk(s.doc===null, `step ${s.n}: an open step does not pretend to have a record`); continue; }
  chk(!!s.doc, `step ${s.n}: a closed step has a decision record`);
  if (s.doc) chk(fs.existsSync(D+'docs/'+s.doc), `step ${s.n}: the file ${s.doc} exists`);
}

/* 6. the tabs and the way into them. The plan and the list of documents are two
   subjects, so they stand as two tabs, both before the rest of the
   documentation: a reader arriving from the footer should first see what the
   project is and how far it has got. */
chk(/id:"roadmap", label:\{en:"Roadmap",pl:"Roadmapa"\}/.test(js), 'the Roadmap tab is in the documentation');
chk(/id:"documents", label:\{en:"Documents",pl:"Dokumenty"\}/.test(js), 'the Documents tab is in the documentation');
const order = [...js.matchAll(/\{ group:\{[^}]*\}, id:"([\w-]+)"/g)].map(m=>m[1]);
chk(order[0]==='overview' && order[1]==='roadmap' && order[2]==='documents',
    `Roadmap and Documents stand right after Overview (${order.slice(0,3).join(' · ')})`);
chk(/dsRoadmapRows\(\)/.test(js), 'the tab reads the ladder from one source rather than retyping it');
/* The list of documents stands whole in its own tab, not half in each. */
const body = id => {
  const i = js.indexOf(`id:"${id}"`);
  const next = order[order.indexOf(id)+1];
  const j = next ? js.indexOf(`id:"${next}"`) : js.length;
  return js.slice(i, j>i? j : js.length);
};
chk((body('documents').match(/dsDocTable\(/g)||[]).length===3,
    'all three document tables stand in the Documents tab');
chk(!/dsDocTable\(/.test(body('roadmap')), 'the Roadmap tab no longer holds the list of documents');
chk(/#design\/documents/.test(body('roadmap')), 'Roadmap leads to Documents');
chk(/#design\/roadmap/.test(body('documents')), 'Documents leads to Roadmap');
chk(/id="lnkAbout" href="#design\/roadmap"/.test(html), 'the shop footer leads to that tab');
chk(/aboutProject:"About this project"/.test(js) && /aboutProject:"O tym projekcie"/.test(js),
    'the footer label exists in both languages');

/* 7. the repository address stands in one place rather than pasted at every step */
chk((js.match(/github\.com\/[\w.-]+\/[\w.-]+/g)||[]).length===1,
    'the repository address stands once and the step links are assembled from it');
chk(!/<user>|<repo>/.test(js), 'no address placeholder is left in the script');

/* 8. the list of documents. A dead link in a section meant to prove diligence
   is worse than no section - so every file has to exist, in both languages.
   The length is checked as well: a figure nobody verifies quietly stops being
   true, and a reader who opens four thousand words believing it is a paragraph
   does not come back. */
const list = js.match(/const DS_DOCS = \[([\s\S]*?)\n\];/);
chk(!!list, 'DS_DOCS exists');
const docs = [...(list?list[1]:'').matchAll(
  /\{ cat:"(\w+)", file:"([^"]+)"(?:, filePl:"([^"]+)")?, words:(\d+)(?:, wordsPl:(\d+))?/g)]
  .map(m=>({cat:m[1], file:m[2], filePl:m[3]||null, words:+m[4], wordsPl:m[5]?+m[5]:null}));
chk(docs.length>0, `documents in the list (${docs.length})`);
const count = p => fs.readFileSync(D+'docs/'+p,'utf8').trim().split(/\s+/).length;
/* Polish says the same thing in fewer words, so one figure cannot be true in
   both languages: each copy carries its own, and each is checked separately. */
for (const x of docs){
  for (const [p, stated] of [[x.file, x.words], [x.filePl, x.wordsPl ?? x.words]]){
    if (!p) continue;
    if (!fs.existsSync(D+'docs/'+p)){ chk(false, `the file ${p} exists`); continue; }
    chk(true, `the file ${p} exists`);
    const n = count(p), off = Math.abs(n - stated) / stated;
    chk(off <= 0.05, `${p}: stated length ${stated} against ${n} (${Math.round(off*100)}%)`);
  }
}
/* every procedure has both language versions, because the tab points at the one
   the reader is currently in */
for (const x of docs.filter(d=>d.cat==='procedures'))
  chk(!!x.filePl, `${x.file}: has a Polish counterpart`);
chk(!/decision-architecture/.test(list?list[1]:''),
    'the decision records are not listed a second time');

/* The shape of the table: a name is a name, not a link - the column of names
   should read as a list of what exists rather than a column of things to press.
   The way in stands at the end and shows the path, so it is clear what opens. */
const table = js.match(/function dsDocTable\(cat\)\{([\s\S]*?)\n\}/);
chk(!!table, 'dsDocTable exists');
if (table){
  chk(/<td class="spec doc-name">\$\{x\.t\[/.test(table[1]),
      'the name stands in its own cell as text');
  const iName=table[1].indexOf('doc-name'), iDesc=table[1].indexOf('${x.d['),
        iLink=table[1].indexOf('<a class="link');
  chk(iName<iDesc && iDesc<iLink, 'column order: name, description, length, way in');
  chk(!/<a[^>]*>\$\{x\.t\[/.test(table[1]), 'the name is not a link');
  chk(/<code>\$\{file\}<\/code>/.test(table[1]), 'the way in shows the file path');
  chk(/<th>\$\{L\("Repository","Repozytorium"\)\}<\/th>\s*\n?\s*<\/tr>/.test(table[1]),
      'the last column is called Repository');
}

console.log();
console.log(bad ? 'FAILURES: '+bad : 'RESULT: OK');
process.exit(bad?1:0);
