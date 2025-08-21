import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',              // use current folder as project root
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});


