import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-dark',
      },
    },
  },
  redirects: {
    '/web-expanish/': '/expanish-website/',
    '/checkout-expanish/': '/expanish-checkout/',
  },
  integrations: [react(), tailwind(), sitemap(), mdx({
    optimize: true,
    syntaxHighlight: 'shiki',
  })]
});