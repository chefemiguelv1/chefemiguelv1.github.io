import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // relative paths, so the build works in any folder (GitHub Pages, GoFact server)
  base: './',
  plugins: [react()],
})
