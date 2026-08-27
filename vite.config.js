import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `vercel dev` serves the Vite app and the /api functions together on one
// origin, so no dev-server proxy is needed.
export default defineConfig({
  plugins: [react()]
})
