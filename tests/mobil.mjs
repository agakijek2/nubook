/* Two defects found only on a real phone, both of the same kind: a rule written
   for one view applied to two, and a value good for one purpose was used for
   another. None of the other suites caught them, because jsdom computes no
   layout and knows no screen width - so these checks read rules, not pixels. */
import fs from 'fs';
import { fileURLToPath } from 'url';
const D = fileURLToPath(new URL('../', import.meta.url));
const css = fs.readFileSync(D+'css/styles.css','utf8');
const js  = fs.readFileSync(D+'js/app.js','utf8');

let bad=0;
const chk=(c,m)=>{ console.log((c?'  OK   ':'  FAIL ')+m); if(!c) bad++; };

/* Comments are stripped before rules are looked for: a sentence inside a
   comment can look like a selector and give a false result either way. */
const bare = css.replace(/\/\*[\s\S]*?\*\//g, '');

/* --- 1. The cart on a phone has a way forward ----------------------------
   The button in the summary is hidden because in checkout it would repeat the
   submit that the pinned bar already carries. The cart has no form and no bar,
   so without the narrowing the rule left a phone with no way forward at all. */
const hiders = [...bare.matchAll(/([^{}]*\.co-side\s+\.order-btn)\s*\{([^}]*)\}/g)]
  .map(m => ({ sel: m[1].trim(), body: m[2] }))
  .filter(r => /display\s*:\s*none/.test(r.body));
chk(hiders.length===1, `exactly one rule hides the summary's button (${hiders.length})`);
for (const r of hiders)
  chk(/#checkout/.test(r.sel),
      `the hiding rule applies to checkout only (${r.sel})`);

/* The button itself has to exist in both views - otherwise the narrowing
   achieves nothing. */
const view = (name) => {
  const i = js.indexOf(`function ${name}(`);
  return i<0 ? '' : js.slice(i, js.indexOf('\n}', i));
};
for (const f of ['renderCartPage','renderCheckout'])
  chk(/class="btn-primary order-btn"/.test(view(f)), `${f} draws the forward button`);

/* The bottom bar appears in checkout only - that is the half of the layout
   which makes the narrowing above necessary. If it ever showed on the cart too,
   this check is meant to say so rather than stay quiet. */
chk(/coBarEl\.hidden\s*=\s*view\s*!==\s*"checkout"/.test(js),
    'the pinned bar belongs to checkout and to nothing else');

/* --- 2. The filter sheet sits flush on the bar ---------------------------
   The bar's height is measured and rounded up to four pixels, so the clearance
   under the content is never too small. The same value used to seat the sheet
   left up to four pixels of page showing beneath it. */
chk(/--nu-mobar-height-exact/.test(js), 'the script writes the unrounded bar height');
chk(/getBoundingClientRect\(\)\.height/.test(js),
    'the unrounded height comes from the rectangle, not from offsetHeight');

const sheet = (bare.match(/body\.fsheet \.shop \.filters\{([^}]*)\}/)||['',''])[1];
chk(!!sheet, 'the filter sheet rule exists');
chk(/bottom:var\(--nu-mobar-height-exact\)/.test(sheet),
    'the sheet seats on the unrounded bar height');
/* The token carries a starting value in :root, like its rounded sibling - the
   script overwrites it on the first measurement, but the sheet cannot be left
   with nothing. */
chk(/--nu-mobar-height-exact:var\(--nu-space-max\)/.test(bare),
    'the token has a starting value in :root');

/* The clearance under the content keeps the grid value: there rounding up is a
   virtue, because the bar must not crop what sits beneath it. */
chk(/body\.has-mobar\{padding-bottom:var\(--nu-mobar-height\)\}/.test(bare),
    'the clearance still takes the grid value');

console.log();
console.log(bad ? 'FAILURES: '+bad : 'RESULT: OK');
process.exit(bad?1:0);
