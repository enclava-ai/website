import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://enclava.ai',
  base: '/',
  build: {
    assets: '_astro'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
