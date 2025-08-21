import { defineConfig } from 'vite'

export default defineConfig({
  // tell Vite where to look for index.html
  root: 'frontend',

  build: {
    // output built files into /dist at project root
    outDir: '../dist',
    emptyOutDir: true
  }
})


