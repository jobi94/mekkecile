// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Replace with the real production domain ({{DOMAIN}} in src/site.config.ts)
// before launch — it drives canonical URLs and the generated sitemap.
const PRODUCTION_DOMAIN = 'https://www.example.cz';

// Set only by the GitHub Pages workflow, since a project page is served at
// https://<user>.github.io/<repo>/ — leave unset for Netlify/local, where the
// site lives at the domain root. Always normalized with a trailing slash —
// import.meta.env.BASE_URL is used verbatim (string-concatenated) all over
// the app, so a missing slash here silently glues it to the next path segment.
const GH_PAGES_BASE = process.env.GH_PAGES_BASE
  ? process.env.GH_PAGES_BASE.replace(/\/?$/, '/')
  : '/';

// https://astro.build/config
export default defineConfig({
  site: PRODUCTION_DOMAIN,
  base: GH_PAGES_BASE,
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
