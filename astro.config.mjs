import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import { siteConfig } from './src/config/site';

export default defineConfig({
  site: siteConfig.url,
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    // Privacy policies must stay crawlable: Google Play checks the policy URL,
    // and users find them by searching for the app name.
    robotsTxt({
      userAgent: '*',
      allow: '/',
      sitemap: `${siteConfig.url}/sitemap-index.xml`,
    }),
  ],
});