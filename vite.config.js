import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './',
  rollupOptions: {
      input: {
        popup: resolve("dist", 'index.html'), // Your main HTML file
        // If you have a background script:
        // background: resolve(__dirname, 'src/background.js'),
        // If you have a content script:
        // 'content-script': resolve(__dirname, 'src/content-script.js'),
      },
      output: {
        // Keep original filenames for easier debugging
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash].[ext]',
      },
    },
})
