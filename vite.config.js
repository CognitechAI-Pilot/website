import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Forward API calls to the local Azure Functions host during `npm run dev`.
      '/api': 'http://localhost:7071'
    }
  }
})
