/* The page served at an unknown address is the only view nobody ever opens on
   purpose - so it breaks and nobody notices. The dangerous part here is
   relative paths: a 404 is served at any depth, so "css/styles.css" finds the
   stylesheet at the root and nowhere else, and everywhere else gives a page
   with no styles. */
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const html = fs.readFileSync(D+'404.html','utf8');

let bad=0;
const chk=(c,m)=>{ console.log((c?'  OK   ':'  FAIL ')+m); if(!c) bad++; };

/* 1. Every link of our own runs from the root. External ones
   (fonts.googleapis) are left alone. */
const links = [...html.matchAll(/(?:href|src)="([^"#][^"]*)"/g)].map(m=>m[1])
  .filter(a => !/^https?:/.test(a));
chk(links.length>0, `links to check: ${links.length}`);
for (const a of links)
  chk(a.startsWith('/'), `${a} runs from the root`);

/* 2. ...and every one of them points at a file that exists. */
for (const a of links.filter(a=>a!=='/'))
  chk(fs.existsSync(D + a.replace(/^\//,'').split('#')[0]),
      `${a} points at an existing file`);

/* 3. The shop's stylesheet, not a private copy of its rules. */
chk(/href="\/css\/styles\.css"/.test(html), 'the page takes the shop stylesheet');

/* 4. Components from the system, not invented for this one page. */
for (const k of ['mark','btn-primary','foot-link link'])
  chk(html.includes(`class="${k}"`), `uses the .${k.split(' ')[0]} component`);
/* One way out, one button. The way to the documentation stands in the footer,
   as everywhere else in the shop, so repeating it beside the title was a second
   exit from the same place. */
chk((html.match(/class="btn-primary"/g)||[]).length===1,
    'exactly one button stands beside the title');
chk(!/class="link in-text"/.test(html),
    'the footer leads to the documentation, not a separate link by the title');

/* 5. This page's own rules must not type values that exist as tokens. */
const style = (html.match(/<style>([\s\S]*?)<\/style>/)||['',''])[1];
const typed = [...style.matchAll(/:\s*(\d+(?:\.\d+)?(?:px|rem))/g)]
  .map(m=>m[1]).filter(v => v!=='0px');
chk(typed.length===0, `no hand-typed length${typed.length?` (${typed.join(', ')})`:''}`);
chk(!/#[0-9a-fA-F]{3,6}\b/.test(style), 'no hand-typed colour');

/* 6. Both languages. Polish stands in the markup, English is supplied by the
   script - so both halves have to be complete, or an English reader gets half
   a page in Polish. */
const scriptBlock = (html.match(/<script>([\s\S]*?)<\/script>/)||['',''])[1];
/* The script reaches for elements through the shorthand `el("id")`, but it
   could as well call getElementById outright - we catch both spellings. Without
   that, renaming the shorthand would silence this check rather than break it. */
const swaps = [...new Set(
  [...scriptBlock.matchAll(/(?:getElementById|\bel)\("(\w+)"\)/g)].map(m=>m[1])
)];
chk(swaps.length >= 5,
    `the script swaps strings in ${swaps.length} places (at least 5 expected)`);
for (const id of swaps)
  chk(new RegExp(`id="${id}"`).test(html), `element #${id} exists in the markup`);
chk(/p\.lang !== "en"/.test(html), 'Polish is the default, as in the shop');
chk(/nubook\.prefs\.v1/.test(html), 'reads the same preferences key as the shop');
chk(/documentElement\.lang = "en"/.test(html), 'switching the language also sets the lang attribute');
chk(/data-scheme/.test(html), 'light or dark follows the reader\'s choice');

/* 6b. The header and the footer are the shop's own: an error page is part of
   the shop rather than a separate sheet of paper. The switchers stay out of it
   - a control that does nothing is worse than no control. */
chk(/<header>[\s\S]*class="logo"[\s\S]*class="mark"[\s\S]*class="strap"[\s\S]*<\/header>/.test(html),
    'the header carries the wordmark and the strapline, as in the shop');
chk(/<footer class="site-foot">/.test(html), 'the footer is the shop footer');
chk(/class="foot-link link"/.test(html), 'the footer has both backstage links');
chk(!/class="chip"/.test(html) && !/btn-tertiary/.test(html),
    'no dead control: the switchers and the icons stay in the shop');

/* 6c. Typography from tokens rather than picked by eye. */
chk(/\.nf h1\{[^}]*font:var\(--nu-type-h1\)/.test(style), 'the title takes --nu-type-h1');
chk(/\.nf p\{[^}]*font:var\(--nu-type-body-l\)/.test(style), 'the line under it takes --nu-type-body-l');
/* The same colour as the lede in the documentation. If somebody changed it
   there, this sentence would be left behind - so we compare against the
   stylesheet rather than against memory. */
const sheet = fs.readFileSync(D+'css/styles.css','utf8');
const ledeColour = (sheet.match(/\.ds \.ds-lede\{[^}]*color:(var\(--[\w-]+\))/)||[])[1];
chk(!!ledeColour, `the lede colour read from the stylesheet (${ledeColour})`);
chk(!!ledeColour && new RegExp(`\\.nf p\\{[^}]*color:${ledeColour.replace(/[()]/g,'\\$&')}`).test(style),
    'the line under the title has the same colour as the lede in the documentation');
chk(/text-align:center/.test(style) && /align-items:center/.test(style),
    'the content is centred');

/* 7. An error page has no business in search results. */
chk(/<meta name="robots" content="noindex">/.test(html), 'noindex is present');

/* 8. No em dash, like the rest of the texts. */
chk(!/—/.test(html.replace(/nubook\. — /g,'')), 'no em dash in the content');

console.log();
console.log(bad ? 'FAILURES: '+bad : 'RESULT: OK');
process.exit(bad?1:0);
