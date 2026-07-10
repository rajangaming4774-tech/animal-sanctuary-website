import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path: '/' for local dev, '/animal-sanctuary-website/' for the
// GitHub Pages project site. Controlled by the DEPLOY_TARGET env var
// set by the GitHub Actions workflow.
const base = process.env.DEPLOY_TARGET === 'gh-pages' ? '/animal-sanctuary-website/' : '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
