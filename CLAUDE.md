# Cognitech AI website — working rules

Standing constraints for this repo. Most exist because breaking them already
cost something in production.

**Keep this file current.** When a new constraint is established during a
session — a rule that would not be obvious from reading the code — add it here
before finishing, and prune anything that has stopped being true. Rules only, no
change history: that lives in the git log and the PR descriptions.

## Git

Develop on `claude/website-react-conversion-ntbo9e`. `main` changes only through
a merged PR, never a direct push.

## Things that have already broken production

**Never name the enquiry honeypot anything a browser recognises.** The hidden
field is `hp_token`, in both `src/components/Contact.jsx` and
`api/inquiry.js`. It was called `company` until 3 Oct 2026; browsers and
password managers ignore `autocomplete="off"` and autofilled it, so the API
classed genuine enquiries as bots and returned 200 without sending — a real
enquiry was lost with no visible error. The deliberately meaningless name and
the `data-lpignore` / `data-1p-ignore` / `data-bwignore` / `data-form-type`
attributes are load-bearing. They look like clutter; they are not.

**Every value in `pricingPurpose` must exist in `enquiryPurposes`.** Both live
in `src/data/site.js`. If they drift apart the contact form's dropdown blanks
out. The original static site shipped this bug in two of its three CTAs.

**Asset filenames are lowercase.** Vercel serves case-sensitively, so `Joe.jpg`
and `joe.jpg` are different files. A rename between the two 404'd the team
photo on the live site.

**Branding follows three separate rules, so never find-and-replace it.** Visible
copy says "Cognitech AI". The footer says "Cognitech Limited", the registered
entity. Emails, the canonical URL and `og:image` stay untouched. A blanket
replace produces `cognitech AI.co.nz` and breaks the contact mailbox.

## Constraints that look like free choices but are not

- **Tailwind stays on v3** (`^3.4.17`). v4 removes `bg-opacity-*` and
  `flex-shrink-0`, which appear 17 times across the components.
- **Fonts are self-hosted** via `@fontsource-variable/inter` and
  `@fontsource-variable/urbanist`, imported in `main.jsx`. Never reintroduce the
  `fonts.googleapis.com` link: it was the last third-party request on the page,
  and it blocked rendering. The variable families register as
  **`Inter Variable`** and **`Urbanist Variable`** — writing plain `Inter` or
  `Urbanist` in a font stack silently falls back to the system font.
- **`vercel.json` must keep its rewrite**, with the `/api/:path*` line first.
  Without it a direct hit on any client-side path 404s; with it reordered, the
  serverless function gets swallowed by the SPA fallback.
- **The case study video lives on Vercel Blob**, not in the repo —
  `BA_DEMO_VIDEO` in `CaseStudy.jsx`. The `%20` escapes are required, since the
  blob key contains spaces. A 16 MB copy used to be committed to `public/`.

## Icons

There is no icon font. `src/components/Icon.jsx` renders inline SVG from the
path data in `src/data/icons.js`, and `@fortawesome/fontawesome-free` is no
longer a dependency — it cost a 154kB woff2 of roughly 1,400 glyphs plus a
68kB stylesheet to draw 38 icons.

`<Icon name="check" className="text-blue-400 text-sm" />` is a drop-in for the
old `<i className="fa-solid fa-check …">`: height is 1em, width follows the
viewBox, the fill is `currentColor`, and the baseline sits at -0.125em, so
every existing text-size and colour class keeps working. `name` takes either
`check` or `fa-check`, which is why the data files can keep storing `fa-`
prefixed names.

Mockups occasionally name a Font Awesome **Pro** icon that Free does not have
(`fa-shield-check`, for one). It renders as nothing in the mockup too, so there
is no appearance to match: substitute the nearest Free glyph and say which.

Icons are decorative and `aria-hidden` — never put meaning in one that the
surrounding copy does not already carry. To add an icon, copy the viewBox and
the single `d` attribute out of Font Awesome Free's solid SVG set into
`icons.js`; an unknown name renders nothing and warns in dev rather than
throwing. The icons are CC BY 4.0 and the attribution notice at the top of
`icons.js` is what satisfies the licence, so keep it there.

## The logo

`public/cognitech-ai-logo.webp` is the designer's own artwork — a transparent
raster at 401x176, three times its rendered navbar size so it stays sharp on
retina. It replaced a version traced from a JPEG, which was a flattened
approximation; do not reintroduce a traced one.

One thing about the supplied source, in case it is re-exported: the "SVG"
files the designer provides are PNGs wrapped in an `<svg>` tag — a single
`<image>` element, no paths — so they carry a 33% base64 penalty and none of
the scalability. Use the raster directly.

The artwork is cropped flush to the ink, with no margin on the right. That is
tight but not damaging: the "I" of "AI" measures 34px against a 32px stem
elsewhere in the wordmark, so the letter is intact. An earlier note here
claimed it was clipped; that was wrong.

## The hero photograph

`public/hero-collaboration.webp` (2000x1334) with `-1600` and `-1024` variants,
served through a `srcset` so phones do not pull the full-size file. It is
self-hosted on purpose: it used to be hot-linked from `images.unsplash.com`,
which put a third-party US CDN call on the page selling onshore data
sovereignty and left the hero to break whenever that URL moved. Never point it
back at a remote URL.

Re-encode all three widths together if the photo changes, and keep the hero's
gradient overlays on `#0B111E` — they fade into the page background, so a
different value leaves a visible seam at the section edge.

## Social and icon assets

`public/og-cover.jpg` (1200x630) is the Open Graph card; `favicon-32.png`,
`favicon-192.png` and `apple-touch-icon.png` are the tab and home-screen icons.
All are generated from the logo artwork. The apple-touch icon has an opaque
navy plate on purpose — iOS composites transparent icons onto black.

If the logo changes, these do not update themselves. Regenerate all four.

## ROI figures

`src/data/roi.js` holds two different kinds of number, and they have opposite
rules.

The **commercial constants** (`FIXED_BASE_YEAR`, `RUNTIME_PER_BA_YEAR`,
`TOKENS_PER_BA_YEAR`, `WORKFLOWS_PER_BA_YEAR`, `CAPACITY_GAIN`) and the fixed
KPI and table strings are published claims transcribed from an approved mockup.
Change them only from an updated mockup, never by inference.

Everything the calculator shows is **derived** from those constants by
`computeRoi()`, which is a verbatim port of the mockup's `calculateCustomRoi()`.
Do not hardcode a figure the formula produces — the mockups' own markup still
says "~6.5 Weeks" payback where their formula yields 6.6, and that stale
literal must not be copied back in.

`BA_COUNT_RANGE` is 1-12, confirmed as the intended cap. The mockups are
inconsistent here — the V2.11 label reads "1-50 Seats" and its script clamps
to 50, while only the input's `max="12"` is right — so the label text
deliberately diverges from the mockup. The range is defined once and drives
the clamp, the input's `max` and the label together; change it there, never in
three places.

## Prerendering

`npm run build` is three steps: client build, SSR build, then `prerender.js`,
which renders the landing page into `dist/index.html`. Without it the site
ships as an empty `<div id="root">` and every crawler that does not run
JavaScript — including most AI answer engines — sees a blank page.

`main.jsx` therefore calls `hydrateRoot`, not `createRoot`. Anything that
renders differently on the server than in the browser (reading `window` during
render, `Date.now()`, `Math.random()`) breaks hydration. Side effects belong in
`useEffect`, which does not run during prerender.

The router lives in the entry points, not in `App.jsx`: `BrowserRouter` in
`main.jsx`, `StaticRouter` in `entry-server.jsx`. `StaticRouter` comes from
`react-router-dom` itself on v7 — the `react-router-dom/server` subpath is gone.

## robots.txt and sitemap.xml

Both live in `public/`. They survive the SPA rewrite because Vercel checks the
filesystem before applying `rewrites` — the same reason `/assets/*` and the
images resolve.

`sitemap.xml` must list the same host as the canonical in `index.html`
(`https://www.cognitech.co.nz/`). A sitemap may only declare URLs on the host
serving it, and naming one host while the canonical names another tells
crawlers two different things. Add an entry whenever a route is added to
`App.jsx`; there is one route today.

`robots.txt` allows everything on purpose, AI answer engines included. The
landing page is prerendered so retrieval crawlers can read it — adding a
disallow for GPTBot, ClaudeBot or PerplexityBot would undo that work.

## Working from a supplied HTML mockup

The mockups pull Tailwind from `cdn.tailwindcss.com`, which this sandbox blocks,
so opening one in a browser here renders it unstyled. Treat a mockup as the
source of truth for copy and class names, and never for measured layout — a
screenshot or a width taken from one is meaningless. Verify layout against the
built site instead.

## Conventions

- Interactive elements are `<button>`, not clickable `<div>`s. Accordions carry
  `aria-expanded` and `aria-controls`. Collapsed panels unmount rather than
  being clipped to `max-height: 0`, so screen readers do not read hidden
  content. Programmatic scrolling checks `prefers-reduced-motion`.
- An anchor that is not a `<section>` or `<footer>` needs its own `scroll-mt-24`.
  `index.css` sets scroll-margin on `section[id]` and `footer[id]` only, and the
  navbar is a fixed 80px, so a `div[id]` target lands underneath it without one.
  `#enterprise-gap` and `#architecture-blueprint` both rely on this.
- `.glow-card` paints its cursor spotlight in a `::before` and lifts its direct
  children with `.glow-card > * { z-index: 1 }`. Content wrapped in an extra
  element is fine; content that is a bare text node in the card is not — it
  renders behind the spotlight layer.
- Team photos: `public/<name>.jpg` is the square full-size original;
  `<name>-160.webp` is what `team.js` actually serves, because the avatar
  renders at 80px and 160 covers a 2x screen. The four originals were 487KB of
  downloads for four 80px circles. Regenerate the derivative whenever a photo
  changes, and point `team.js` at the `.webp`, never the `.jpg`.
  (The originals are mostly 1024x1024; `chamodya.jpg` is 1600x1600.)
- Before pushing: run `npm run build`, then check the page in a browser for
  horizontal overflow at 320, 768 and 1440px.
- When asserting against rendered text, compare against `textContent`, not
  `innerText`. Many labels here carry Tailwind's `uppercase`, which
  `innerText` applies and `textContent` does not, so a correct string fails a
  case-sensitive check. This has produced false failures repeatedly.
