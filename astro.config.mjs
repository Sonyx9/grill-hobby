import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Pro GitHub Pages: base = '/název-repo/' (např. /Grill-and-Hobby/)
const base = process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
  : '/';

export default defineConfig({
  integrations: [tailwind()],
  site: process.env.GITHUB_REPOSITORY
    ? `https://${process.env.GITHUB_REPOSITORY.split('/')[0]}.github.io`
    : 'https://example.com',
  base,
  output: 'static',
});
