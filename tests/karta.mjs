/* The link card breaks more quietly than anything else in this project: it is
   not visible in the shop, nobody looks at it, and everyone who is sent the
   address sees it. A relative path instead of an absolute one, or an image of
   the wrong size, and the card is a bare link. */
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const html = fs.readFileSync(D+'index.html','utf8');
const script = fs.readFileSync(D+'build-og.py','utf8');

let bad=0;
const chk=(c,m)=>{ console.log((c?'  OK   ':'  FAIL ')+m); if(!c) bad++; };

const meta = (key, attr='property') => {
  const m = html.match(new RegExp(`<meta ${attr}="${key}" content="([^"]*)"`));
  return m ? m[1] : null;
};

/* 1. The full set of tags. A missing one fails nothing loudly - the scraper
   simply shows less. */
for (const [k,a] of [['og:type','property'],['og:url','property'],
                     ['og:title','property'],['og:description','property'],
                     ['og:image','property'],['og:image:alt','property'],
                     ['twitter:card','name'],['twitter:image','name'],
                     ['description','name']])
  chk(!!meta(k,a), `${k} is present`);

chk(/<link rel="canonical" href="[^"]+">/.test(html), 'canonical is present');

/* 2. Addresses absolute, not relative. This is the mistake that looks fine in
   the code and gives an empty card at the other end. */
for (const [k,a] of [['og:url','property'],['og:image','property'],
                     ['twitter:image','name']]){
  const v = meta(k,a);
  chk(!!v && v.startsWith('https://'), `${k} is an absolute address (${v})`);
}
chk(!/<meta [^>]*content="[^"]*<domain>/.test(html), 'no domain placeholder is left');

/* 3. The dimensions declared in the tags match the file. A scraper trusts the
   tag and crops the image. */
const file = D+'assets/og.png';
chk(fs.existsSync(file), 'assets/og.png exists');
if (fs.existsSync(file)){
  const b = fs.readFileSync(file);
  const w = b.readUInt32BE(16), h = b.readUInt32BE(20);   // IHDR
  chk(w===1200 && h===630, `og.png is 1200x630 (found ${w}x${h})`);
  chk(String(w)===meta('og:image:width') && String(h)===meta('og:image:height'),
      'og:image:width and height match the file');
  /* A card under 300 kB passes every scraper; above that some give up. */
  chk(b.length < 300*1024, `og.png weighs ${Math.round(b.length/1024)} kB`);
}

/* 4. Favicons: every one named in the markup has to exist. */
for (const m of html.matchAll(/<link rel="(?:icon|apple-touch-icon)"[^>]*href="([^"]+)"/g))
  chk(fs.existsSync(D+m[1]), `${m[1]} exists`);

/* 5. The claim on the drawing and the claim in the tags are the same claim.
   Two copies of one sentence part company at the first correction. */
const fromDrawing = (script.match(/CLAIM = \("([^"]+)", "([^"]+)"\)/)||[]).slice(1).join(' ');
chk(!!fromDrawing, `claim read from the script (${fromDrawing})`);
const title = (meta('og:title')||'').toLowerCase();
chk(title.includes(fromDrawing.toLowerCase().replace(/\.$/,'')),
    `og:title carries the same claim as the image`);
chk(meta('og:title')===meta('twitter:title','name'), 'both titles are the same');
chk(meta('og:description')===meta('twitter:description','name'), 'both descriptions are the same');

/* 6. A description short enough not to be cut mid-sentence. */
const desc = meta('description','name')||'';
chk(desc.length<=200, `description is ${desc.length} characters (limit 200)`);

/* 7. The script reads its colours from the stylesheet instead of holding them.
   A card with a hand-typed black survives a palette change and lies. */
chk(!/#[0-9a-fA-F]{6}/.test(script.replace(/^\s*#.*$/gm,'')),
    'build-og.py has no hand-typed colour');
chk(/token\("--nu-/.test(script), 'build-og.py takes its colours from the stylesheet');

/* 8. The fonts folder and the drawing agree, in both directions. The card is
   the one place that draws from files rather than from Google Fonts, so a
   renamed or removed file only shows up when somebody rebuilds the card - and
   nobody rebuilds it, because it already exists. The other direction matters
   as much: a typeface nobody draws with sat here unused for months, and the
   licence file says these are the faces the repository ships. */
const fontDir = D+'assets/fonts/';
const asked = [...new Set([...script.matchAll(/face\("([^"]+\.ttf)"/g)].map(m=>m[1]))];
chk(asked.length>=2, `typefaces the card asks for: ${asked.length}`);
for (const f of asked)
  chk(fs.existsSync(fontDir+f), `${f} is in assets/fonts/`);
for (const f of fs.readdirSync(fontDir).filter(f=>/\.(ttf|otf|woff2?)$/i.test(f)))
  chk(asked.includes(f), `${f} is drawn with`);

/* The licence requires the OFL text to travel with the faces it covers, so its
   absence is a licensing fault rather than an untidy folder. It also has to
   name them: a notice left behind after a typeface was swapped states the
   copyright of a face that is no longer here, and says nothing about the one
   that is. */
chk(fs.existsSync(fontDir+'OFL.txt'), 'the OFL text accompanies the typefaces');
if (fs.existsSync(fontDir+'OFL.txt')){
  const ofl = fs.readFileSync(fontDir+'OFL.txt','utf8');
  for (const f of asked)
    chk(ofl.includes(f), `the OFL text names ${f}`);
  /* And names nothing else: every line of the form "Name (file.ttf)" has to
     point at a file that is actually here. */
  for (const m of ofl.matchAll(/\(([\w-]+\.ttf)\)/g))
    chk(asked.includes(m[1]), `the OFL text does not name a typeface that left (${m[1]})`);
}

console.log();
console.log(bad ? 'FAILURES: '+bad : 'RESULT: OK');
process.exit(bad?1:0);
