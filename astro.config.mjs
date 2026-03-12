import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// GitHub Pages: base s koncovým lomítkem kvůli konkatenaci cest (base + 'images/...')
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const base = process.env.GITHUB_REPOSITORY ? `/${repoName}/` : '/';
const site = process.env.GITHUB_REPOSITORY
  ? `https://${process.env.GITHUB_REPOSITORY.split('/')[0]}.github.io/${repoName}`
  : 'https://example.com';

export default defineConfig({
  integrations: [tailwind()],
  site,
  base,
  output: 'static',
});
