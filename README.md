# Cognitech Limited — Website

Marketing site for Cognitech Limited, built with React + Vite + Tailwind CSS and
deployed to Azure Static Web Apps (with an Azure Functions API for the inquiry form).

## Getting started

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

The dev server proxies `/api/*` to `http://localhost:7071`, so run the Functions
host alongside it if you need the inquiry endpoint:

```bash
cd api && npm install && npm start
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
api/                  Azure Functions API (POST /api/inquiry -> Mailtrap)
```

## Contact section

The inquiry form is currently disabled and replaced by a mailto link, matching the
previous site. Set `SHOW_INQUIRY_FORM = true` in `src/components/Contact.jsx` to
re-enable the form; it posts to `/api/inquiry`, which needs `MAILTRAP_API_TOKEN`,
`FROM_EMAIL` and `TO_EMAIL` configured in the Static Web App settings.

## Deployment

`.github/workflows/azure-static-web-apps-yellow-plant-0c9afbf10.yml` builds from the
repository root (`app_location: "/"`) and publishes `dist` on every push to `main`.
