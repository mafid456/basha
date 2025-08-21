import { defineConfig } from 'vite'

export default defineConfig({
  root: './frontend',   // if index.html is inside frontend/
  build: {
    outDir: '../dist'
  }
})
