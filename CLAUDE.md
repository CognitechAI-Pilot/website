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
- **Font Awesome comes from npm** (`@fortawesome/fontawesome-free`, imported in
  `main.jsx`), not a CDN.
- **`vercel.json` must keep its rewrite**, with the `/api/:path*` line first.
  Without it a direct hit on `/resources` 404s; with it reordered, the
  serverless function gets swallowed by the SPA fallback.
- **The case study video lives on Vercel Blob**, not in the repo —
  `BA_DEMO_VIDEO` in `CaseStudy.jsx`. The `%20` escapes are required, since the
  blob key contains spaces. A 16 MB copy used to be committed to `public/`.

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

## Social and icon assets

`public/og-cover.jpg` (1200x630) is the Open Graph card; `favicon-32.png`,
`favicon-192.png` and `apple-touch-icon.png` are the tab and home-screen icons.
All are generated from the logo artwork. The apple-touch icon has an opaque
navy plate on purpose — iOS composites transparent icons onto black.

If the logo changes, these do not update themselves. Regenerate all four.

## ROI figures

The numbers in `src/data/roi.js` are published commercial claims transcribed
from an approved mockup, not values to derive. They reconcile internally (net =
gross - spend; ROI = net / spend; multiple = gross / spend), so an apparent
discrepancy means the transcription is wrong, not the arithmetic. Change them
only from an updated mockup.

## Conventions

- Interactive elements are `<button>`, not clickable `<div>`s. Accordions carry
  `aria-expanded` and `aria-controls`. Collapsed panels unmount rather than
  being clipped to `max-height: 0`, so screen readers do not read hidden
  content. Programmatic scrolling checks `prefers-reduced-motion`.
- Team photos are square, 1024x1024.
- Before pushing: run `npm run build`, then check the page in a browser for
  horizontal overflow at 320, 768 and 1440px.
