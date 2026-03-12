import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Vlastní doména = stránka na kořeni, base musí být /
// (Na github.io/grill-hobby/ by byl base: '/grill-hobby/')
const site = 'https://grillandhobby.com';
const base = '/';

export default defineConfig({
  integrations: [tailwind()],
  site,
  base,
  output: 'static',
  build: {
    assets: 'assets',
  },
});
