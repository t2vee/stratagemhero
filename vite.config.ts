import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
  ],
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
        hashCharacters: 'hex',
        entryFileNames: 'core.js',
        assetFileNames: 'paint.[hash:7].css',
        chunkFileNames: "chunk.[hash:7].js",
        manualChunks: undefined,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
