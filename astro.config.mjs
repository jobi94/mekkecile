// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Replace with the real production domain ({{DOMAIN}} in src/site.config.ts)
// before launch — it drives canonical URLs and the generated sitemap.
const PRODUCTION_DOMAIN = 'https://www.example.cz';

// https://astro.build/config
export default defineConfig({
  site: PRODUCTION_DOMAIN,
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
