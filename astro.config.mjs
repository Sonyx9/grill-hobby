import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sonyx9.github.io/grill-hobby',
  base: '/grill-hobby/',
  output: 'static',
  build: {
    assets: 'assets',
  },
});
