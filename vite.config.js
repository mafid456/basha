import { defineConfig } from 'vite'

export default defineConfig({
  root: 'frontend',        // where index.html lives
  build: {
    outDir: '../dist',     // put build output in /dist (outside frontend/)
    emptyOutDir: true      // clean dist before build
  }
})

