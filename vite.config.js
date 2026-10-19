import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' supaya hasil build bisa ditaruh di subfolder GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './',
})
