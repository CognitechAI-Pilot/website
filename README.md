# Cognitech Limited — Website

Marketing site for Cognitech Limited, built with React + Vite + Tailwind CSS and
deployed to Vercel, with a serverless function backing the inquiry form.

## Getting started

```bash
npm install
npm run dev      # Vite dev server on http://localhost:5173 (UI only)
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

`npm run dev` does not serve `/api`. To run the site and the inquiry function
together, use the Vercel CLI:

```bash
npm i -g vercel
vercel dev       # app + /api/inquiry on http://localhost:3000
```

## Layout

```
index.html            Vite entry point
public/               Static assets served from the site root (team photos)
src/
  main.jsx            React bootstrap (Font Awesome + Tailwind imports)
  App.jsx             Page composition
  index.css           Tailwind layers + the gradient-text helper
  data/site.js        Page copy (nav links, capabilities, team, etc.)
  components/         One component per page section
api/
  inquiry.js          Vercel function: POST /api/inquiry -> Mailtrap
```

## Contact section

The inquiry form is currently disabled and replaced by a mailto link. Set
`SHOW_INQUIRY_FORM = true` in `src/components/Contact.jsx` to re-enable it.

`api/inquiry.js` needs these environment variables set in the Vercel project
(Settings → Environment Variables), for every environment you want the form to
work in:

| Variable | Purpose |
| --- | --- |
| `MAILTRAP_API_TOKEN` | Mailtrap sending API token |
| `FROM_EMAIL` | Sender address (must be a verified Mailtrap domain) |
| `TO_EMAIL` | Where inquiries are delivered |

## Deployment

Vercel builds this repo directly from Git — no workflow file and no `vercel.json`
are needed. Vercel auto-detects the Vite preset, runs `npm run build`, and serves
`dist`, with everything in `api/` deployed as serverless functions. Pushes to
`main` go to production; pull requests get preview deployments.
