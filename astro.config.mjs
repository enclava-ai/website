import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://enclava.ai',
  base: '/',
  build: {
    assets: '_astro',
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      assetsInlineLimit: 4096, // Inline small assets for better performance
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    },
    ssr: {
      noExternal: []
    }
  },
  compressHTML: true
});
