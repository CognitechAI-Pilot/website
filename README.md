# Cognitech Limited — Website

Marketing site for Cognitech Limited, built with React + Vite + Tailwind CSS and
deployed to Vercel, with a serverless function backing the enquiry form.

## Getting started

```bash
npm install
npm run dev      # Vite dev server on http://localhost:5173 (UI only)
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

`npm run dev` does not serve `/api`. To run the site and the enquiry function
together, use the Vercel CLI:

```bash
npm i -g vercel
vercel dev       # app + /api/inquiry on http://localhost:3000
```

## Layout

```
index.html              Vite entry point, SEO + Open Graph tags
vercel.json             SPA rewrite so /resources resolves client-side
public/                 Static assets served from the site root
src/
  main.jsx              React bootstrap (Font Awesome + Tailwind imports)
  App.jsx               Router, Navbar, cross-route hash scrolling
  index.css             Tailwind layers, glow-card/tier-highlight, motion prefs
  pages/
    Home.jsx            Landing page composition and cross-section state
    Resources.jsx       /resources — Digital Co-Worker Blueprint
  data/
    site.js             Nav, enquiry purposes, pricing CTA mapping
    portfolio.js        Role cards, engagement phases, pricing tiers
    blueprint.js        Six-plane reference architecture content
    team.js             Team members and photos
  components/           One component per page section
api/
  inquiry.js            Vercel function: POST /api/inquiry -> Mailtrap
```

## Enquiry form

`api/inquiry.js` needs these environment variables set in the Vercel project
(Settings → Environment Variables) for every environment the form should work in:

| Variable | Purpose |
| --- | --- |
| `MAILTRAP_API_TOKEN` | Mailtrap sending API token |
| `FROM_EMAIL` | Sender address (must be a verified Mailtrap domain) |
| `TO_EMAIL` | Where enquiries are delivered |

### Abuse controls

`api/inquiry.js` layers cheap filters before it will send anything:

| Control | Behaviour |
| --- | --- |
| Honeypot (`hp_token` field) | Hidden from people; if filled, the API answers 200 without sending, so bots record success and move on |
| Minimum fill time | Submissions faster than 3s are rejected |
| Field length caps | name 100, jobTitle 120, email 254, purpose 120, message 4000 |
| Email format | Rejected before any upstream call |
| Per-IP rate limit | 3 per 10 minutes, then HTTP 429 with `Retry-After` |

**Do not rename the honeypot to anything a browser recognises.** It was called
`company` until 2026-10-03, and a real enquiry was silently dropped: browsers
and password managers ignore `autocomplete="off"` and autofilled the hidden
field, so the API treated a genuine submission as a bot and discarded it. The
field is now `hp_token`, with opt-out attributes for LastPass, 1Password,
Bitwarden and Dashlane, and its label no longer names a real-world field.

A honeypot trip is logged at `error` level precisely because it means a
submission was thrown away — if one shows up in the Vercel error view and the
sender was a real person, the hidden field is being filled again.

The rate limit counter lives in the function instance's memory. Vercel can run
several instances and cold starts reset them, so it throttles a single noisy
source rather than guaranteeing a global cap. For a hard limit, add a **Vercel
Firewall** rate-limiting rule on `/api/inquiry` (Project → Firewall) — it runs
at the edge, before the function is invoked, so it also saves the invocation
cost. For a challenge-based defence, Cloudflare Turnstile is the usual next
step.

The pricing CTAs preselect the enquiry purpose. The values live in
`pricingPurpose` in `src/data/site.js` and must stay within `enquiryPurposes` in
the same file — that is what keeps them from drifting apart.

## Pages and routing

Two routes, served by `react-router-dom` from `src/App.jsx`:

- `/` — `src/pages/Home.jsx`
- `/resources` — `src/pages/Resources.jsx`, holding the Digital Co-Worker Blueprint

Both are client-side routes in a single-page build, so `vercel.json` rewrites
everything except `/api/*` to `index.html`. Without that rewrite a direct hit on
`/resources` would 404.

`ScrollToHash` in `App.jsx` handles `#anchor` targets across a route change —
the browser only scrolls to a hash on the initial load, so a link such as
`/resources#blueprint` from the home page needs the scroll done by hand once the
target has mounted.

## Engagement phases and pricing

Clicking an engagement phase highlights the matching pricing tier and scrolls to
it. The selected tier is state in `Home.jsx`, read by both `Engagement.jsx` and
`Pricing.jsx`; the highlight itself is the `.tier-highlight` class in
`index.css`. The approved mockup did this with an inline
`onclick="highlightPricingTier(n)"`.

All three tiers use the same `glow-card` treatment. Tier 2 is deliberately not
styled as a "featured" plan.

## Client anonymity

The flagship case study is published without naming the client. The copy, the
hosted video's filename and the `hasVideo` flag in `src/data/coworker.js` are
all deliberately client-neutral — filenames and data keys ship in public URLs
and the JS bundle, so a client name in either would defeat the anonymisation.
Keep it that way when editing.

## Outstanding before launch

- **Hero image.** `src/components/Hero.jsx` still hot-links a stock photo from
  Unsplash. Replace it with a self-hosted, licensed image in `public/`.
- **Open Graph image.** `index.html` references `/og-cover.jpg`, which does not
  exist yet. Add a 1200×630 image, or link previews will fall back to a bare link.

## Case study video

The demo in the flagship case study streams from Vercel Blob; the URL is
`BA_DEMO_VIDEO` at the top of `src/components/Customers.jsx`. It used to be a
16 MB file committed under `public/`.

The player sets `controlsList="nodownload"` and suppresses the context menu.
That hides the browser's own save affordances, but it is a deterrent rather
than access control — the blob URL is public, so the file can still be fetched
straight from the page source. Anything that genuinely must not be redistributed
needs a signed or access-controlled URL instead.

## Deployment

Vercel builds this repo directly from Git — no workflow file and no `vercel.json`
needed. Vercel auto-detects the Vite preset, runs `npm run build`, serves `dist`,
and deploys everything in `api/` as serverless functions. Pushes to `main` go to
production; pull requests get preview deployments.
