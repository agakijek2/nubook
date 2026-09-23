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
| `https://nubook.com/` | the shop | the shop case study |
| `https://nubook.com/#design` | the design system | the design system case study |
| `https://github.com/<user>/<repo>` | the source and the decision documents | both |

Both hash routes already work as deep links, including one tab at a time
(`#design/button`), so nothing has to be built to make them linkable.

**Not in this step:** the model, a landing page, the two contrast pairs. All
three are decided and recorded, not forgotten – the contrast gap ships as an open
item that the Accessibility tab describes in its own words.

---

## Yours · decisions and accounts

**01 · The repository name.** It becomes part of the GitHub link that both case
studies carry, and it is the first word a stranger reads. `nubook` is the obvious
one.

**02 · The domain.** Buying it and pointing DNS at GitHub Pages: four A records,
or an ALIAS if the registrar offers one. Then the domain goes into the repository
settings and the certificate takes up to a day. I will write out the exact
records once you have the registrar.

**03 · Creating the repository and pushing.** Git in this folder is yours, so the
push is too. I hand over the commands.

**04 · How much the README says about how this was made.** The repository is
public and linked from a portfolio, so its front page is part of the application.
That the shop and the system were built in collaboration with a model is either
the most interesting thing on the page or a footnote, and which one it is is your
call, not mine. I will write whichever version you name.

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

**01 · Clear the root.** `podglad-linie.html` is a working file I left behind and
cannot delete myself; the six `_*.html` diagnostics are already ignored but still
on disk. The published repository should hold the project and nothing else.

**02 · Move the tests into the repository.** Six suites live in my scratch folder
today, which means the repository a stranger opens has no tests in it – in a
project whose whole argument is that documentation is checked against the code.
They belong in `tests/`, with the one-line runner and a paragraph in the README
saying what each one guards. This is the single largest gain in this step for
what it costs.

**03 · Rewrite the README for a stranger.** It is written for us: it explains how
to run the project and where things are, and says nothing about what the project
*is* in the two sentences someone will actually read. It should open with what
the shop is, what the design system is, where to click for each, and only then
the mechanics.

**04 · What a pasted link looks like.** The page has a title and nothing else –
no description, no card image, no favicon. A link dropped into a message or a CV
shows a bare URL. I will add the meta description, the Open Graph and Twitter
card, and a favicon drawn from the wordmark's dot, and show you the card before
it ships.

**05 · A `404.html`.** On GitHub Pages a wrong path lands on GitHub's own error
page, which is the wrong shop. Ours should say so in the shop's voice and offer
the way back.

**06 · Serve-path check.** Done. The shop was served twice, once from a domain
root and once from a `/nubook/` subpath, and every resource was requested at
both: the stylesheet, the script, the three favicons, the link card, all twenty
covers, and the two deep links. Every one answered 200 in both, because every
path in the shop is relative &ndash; verified by grep as well as by request.

`404.html` is the deliberate exception and behaves as designed: its paths run
from the root, so under a subpath the stylesheet is not found and the page
renders unstyled. On the apex domain this is correct; the note exists so the
behaviour is recorded rather than discovered.

**07 · A licence file**, once you have said what it should be. Without one,
everything is reserved by default, which is a decision taken by silence rather
than on purpose.

**08 · The last pass.** Six suites green, `preview.html` rebuilt, both deep links
opened, the shop walked through once in each language and each scheme.

---

## Order

**Mine first, yours second, mine last.** Points 01 to 06 of my list do not need
an account or a domain and can be done now. Then the repository, the push and the
domain are yours. Then I run the last pass against the live address, because some
of what point 06 checks can only be checked there.

**The domain's certificate is the long pole** – up to a day after the DNS
records, and nothing else waits on it. Worth starting the moment the registrar is
chosen, even before the repository is clean.
