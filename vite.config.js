import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // Caminho relativo funciona melhor no GitHub Pages
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'docs',  // GitHub Pages pode servir diretamente da pasta 'docs'
    assetsDir: 'assets',
    sourcemap: false
  }
}) 