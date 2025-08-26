import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://enclava-ai.github.io',
  base: '/website',
  build: {
    assets: '_astro'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
