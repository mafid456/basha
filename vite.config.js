import { defineConfig } from 'vite'

export default defineConfig({
  root: 'frontend',
  build: {
    outDir: '../dist',   // dist will be created at project root
    emptyOutDir: true
  }
})

