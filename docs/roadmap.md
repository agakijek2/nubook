# nubook · roadmap

The ladder of steps, and the detail of the one in progress. It lives here rather
than only on the board so that it cannot drift away from the repository it
describes. Each finished step leaves a decision document beside this file.

---

## The ladder

| | Step | State |
|---|---|---|
| 01 | Catalogue search | done · `search-decision-architecture.md` |
| 02 | An honest empty state | done · `empty-state-decision-architecture.md` |
| 03 | The motif layer | done · `motif-layer-decision-architecture.md` |
| 04 | Motifs on the shelf | done · `motifs-in-shop-decision-architecture.md` |
| 05 | The bookseller's brief | done · `bookseller-brief-decision-architecture.md` |
| 06 | The bookseller in the shop | done · `bookseller-widget-decision-architecture.md` |
| **07** | **Publish what exists** | **in progress** |
| 08 | The model behind the bookseller | next |
| 09 | The case studies | after 08 |

**What changed:** step 07 was *deploy*, a technical errand at the end. It is now
*publish*, and it comes with a reason – the work needs a public address before it
is finished, because it is being linked from a portfolio while the job search is
on. Step 09 was going to be one case study. It is two: one about the shop, one
about its design system, each linking to its own entry point and to the
repository.

**What that changes about 07.** A deploy only has to work. A publish has to be
readable by a stranger who arrives from a portfolio link, opens the repository,
and forms an opinion in a minute. That moves three things from *later* into this
step: the README, the tests, and what a pasted link looks like.

---

# Step 07 · Publish what exists

**Done when three addresses exist and each one survives being opened by someone
who has never seen the project.**

| Link | Points at | Used by |
|---|---|---|
| `https://nubook.eu/` | the shop | the shop case study |
| `https://nubook.eu/#design` | the design system | the design system case study |
| `https://github.com/agakijek2/nubook` | the source and the decision documents | both |

Both hash routes already work as deep links, including one tab at a time
(`#design/button`), so nothing has to be built to make them linkable.

**Not in this step:** the model, a landing page, the two contrast pairs. All
three are decided and recorded, not forgotten – the contrast gap ships as an open
item that the Accessibility tab describes in its own words.

**On step 09.** Both case studies are written and live in `docs/`, ahead of
their place in the ladder: the shop needed something to link from, and writing
them turned out to be the fastest way to find out which numbers in this project
were wrong. The step stays open because what closes it is not the text but its
decision record and the final addresses inside it.

---

## Yours · decisions and accounts

**01 · The repository name.** It becomes part of the GitHub link that both case
studies carry, and it is the first word a stranger reads. `nubook` is the obvious
one.

**02 · The domain.** Settled: `nubook.eu`, bought at GoDaddy. GoDaddy has no
ALIAS at the apex, so it is four `A` records pointing at GitHub Pages, its own
parking record removed, and a `CNAME` for `www`. They go in *after* the domain is
entered in the repository settings – see the note on order at the end.

**03 · Creating the repository and pushing.** Git in this folder is yours, so the
push is too. I hand over the commands.

**04 · How much the README says about how this was made.** Settled: a section of
its own, high on the page, stating the division of labour and why the discipline
in this repository exists – not a footnote at the bottom, and not the first
sentence either.

**05 · The covers.** `assets/covers/` holds twenty real publisher covers and a
photograph of a living author. On a local project that is nothing; on a public
domain linked from a job application it is a decision worth taking knowingly. I
am not a lawyer and this is not advice – the options as I understand them:

- **Keep them, add one line** on the site and in the README saying the covers
  belong to their publishers and stand here to illustrate a non-commercial
  student project. This is what portfolio projects normally do.
- **Replace them** with typographic covers of our own. The titles and authors
  stay real, the artwork becomes ours, and the shop loses some of its warmth.
- **Keep them locally, swap them in the published build.** `build.py` already
  inlines the images, so it could inline a different set. Two versions to keep in
  step, which is the cost.

**06 · Whether your name and a way to reach you appear on the site itself**, or
only in the portfolio around it.

**07 · Looking at it.** On a phone, and on a machine that is not yours, before
either link goes into a case study.

---

## Mine · the repository and what a link shows

**01 · Clear the root.** Done. `podglad-linie.html` was tracked by oversight and
is gone from the history; seventeen `_*.html` diagnostics were deleted from
disk. The ignore pattern stays, because more of them will be built.

**02 · Move the tests into the repository.** Done. The suites now live in
`tests/` with their runner, a `package.json` that pulls jsdom in on first use,
and a table in the README saying what each one guards. Each test computes the
project path from its own location instead of holding an absolute one, so the
set runs on any machine – checked on a fresh copy with an empty `node_modules`.

**03 · Rewrite the README for a stranger.** Done. It opens with what the shop is,
what the design system is and where to click for each; the mechanics moved
below. Because both case studies are in English and lead here, the English
version is now `README.md` and the Polish one sits beside it as
`README.pl.md`, each linking to the other. A section high on the page states
how the project is made and how the work is divided.

**04 · What a pasted link looks like.** Done. The page carries a description,
Open Graph and Twitter tags, a canonical address and three favicons drawn from
the wordmark's dot. `build-og.py` draws the card and the icons, reading its
colours from the stylesheet rather than holding copies, and refuses to run if a
token is missing.

This is also where the shop got a claim: **Books, by what they are about.** It
lives on the card and in the tags only. The masthead keeps saying *novels on
women & gender*, because the card invites and the masthead names – a decision,
not an unfinished change.

**05 · A `404.html`.** Done. A wrong address now gets the shop's own header and
footer, a line naming what happened and one button back. It reads the same
preferences key as the shop, so it answers in the language and scheme already
chosen. The switchers are deliberately absent: they live in the shop's script,
and a control that does nothing is worse than no control.

**06 · Serve-path check.** Done. The shop was served twice, once from a domain
root and once from a `/nubook/` subpath, and every resource was requested at
both: the stylesheet, the script, the three favicons, the link card, all twenty
covers, and the two deep links. Every one answered 200 in both, because every
path in the shop is relative &ndash; verified by grep as well as by request.

`404.html` is the deliberate exception and behaves as designed: its paths run
from the root, so under a subpath the stylesheet is not found and the page
renders unstyled. On the apex domain this is correct; the note exists so the
behaviour is recorded rather than discovered.

**07 · A licence file.** Done. `LICENSE.md` separates four kinds of thing. The
shop, its writing and its documentation are reserved – readable, not reusable –
with the rule stated as *kind of content, not file*, because the documentation
sits inside `js/app.js`. The four procedures in `docs/skills/` are CC BY 4.0,
free to take and adapt. The covers, the portrait and the quotations are named as
nobody's to license here, and the typefaces carry their own OFL, now beside them
as `assets/fonts/OFL.txt`.

**08 · The last pass.** Eleven suites green, `preview.html` rebuilt, the
`agakijek2/nubook` placeholders in both case studies filled with the real address,
both deep links opened, and the shop walked through once in each language and
each scheme. Waits on the repository existing.

---

## Order

**Mine first, yours second, mine last.** Points 01 to 07 of my list are closed:
none of them needed an account or a domain. What is left is yours – the
repository, the push, then the DNS – and after that my point 08 against the live
address, because some of what it checks can only be checked there.

**Correction on the order.** An earlier version of this file said the DNS could
be started first, in parallel, because the certificate is slow. That is wrong,
and GitHub's own documentation says so: the custom domain goes into the
repository settings *before* it is pointed at anything, or there is a window in
which somebody else can host a site at that address. So the repository is the
prerequisite for the slowest part, not something that can wait for it.

The sequence: create the repository and push → Settings → Pages → Custom
domain: `nubook.eu` → then the four `A` records at GoDaddy, removing the
parking record it inserts by default, plus a `CNAME` for `www` → then, once the
certificate is issued, Enforce HTTPS. Propagation takes up to a day, and during
that day `agakijek2.github.io/nubook/` is the working address &ndash; which is why
point 06 checked that one too.
