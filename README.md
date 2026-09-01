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
public/                 Static assets served from the site root
src/
  main.jsx              React bootstrap (Font Awesome + Tailwind imports)
  App.jsx               Page composition and cross-section state
  index.css             Tailwind layers, glow-card/tab styles, motion prefs
  data/
    site.js             Nav, enquiry purposes, pricing CTA mapping
    team.js             Team member bios and photos
    coworker.js         Stage/role/blueprint/persona content
  components/           One component per page section
api/
  inquiry.js            Vercel function: POST /api/inquiry -> Mailtrap
```

### About `src/data/coworker.js`

The architecture blueprints, role case studies and persona panels are large
blocks of static, author-authored markup. They are stored as HTML strings and
rendered with `dangerouslySetInnerHTML`. No user input reaches them. Editing the
copy means editing that file.

## Enquiry form

`api/inquiry.js` needs these environment variables set in the Vercel project
(Settings → Environment Variables) for every environment the form should work in:

| Variable | Purpose |
| --- | --- |
| `MAILTRAP_API_TOKEN` | Mailtrap sending API token |
| `FROM_EMAIL` | Sender address (must be a verified Mailtrap domain) |
| `TO_EMAIL` | Where enquiries are delivered |

The pricing CTAs preselect the enquiry purpose. The values live in
`pricingPurpose` in `src/data/site.js` and must stay within `enquiryPurposes` in
the same file — that is what keeps them from drifting apart.

## Client anonymity

The flagship case study is published without naming the client. The copy, the
video filename (`enterprise-ba-coworker-demo.mp4`) and the `hasVideo` flag in
`src/data/coworker.js` are all deliberately client-neutral — filenames and data
keys ship in public URLs and the JS bundle, so a client name in either would
defeat the anonymisation. Keep it that way when editing.

## Outstanding before launch

- **Hero image.** `src/components/Hero.jsx` still hot-links a stock photo from
  Unsplash. Replace it with a self-hosted, licensed image in `public/`.
- **Open Graph image.** `index.html` references `/og-cover.jpg`, which does not
  exist yet. Add a 1200×630 image, or link previews will fall back to a bare link.
- **Video hosting.** `public/enterprise-ba-coworker-demo.mp4` is 16 MB and is
  committed to the repository. Consider a video host or Vercel Blob if more
  demos are added.

## Deployment

Vercel builds this repo directly from Git — no workflow file and no `vercel.json`
needed. Vercel auto-detects the Vite preset, runs `npm run build`, serves `dist`,
and deploys everything in `api/` as serverless functions. Pushes to `main` go to
production; pull requests get preview deployments.
