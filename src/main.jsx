import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Self-hosted variable fonts. They replace the render-blocking cross-origin
// request to fonts.googleapis.com — the last third-party call on the page, on
// a site that sells onshore data sovereignty. Both are unicode-range subset,
// so a latin visitor downloads one file per family.
import '@fontsource-variable/inter'
import '@fontsource-variable/urbanist'
import './index.css'
import App from './App.jsx'

// The markup is prerendered at build time (see prerender.js), so the client
// hydrates it rather than rendering from an empty root.
hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
