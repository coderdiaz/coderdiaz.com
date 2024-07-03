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
  trailingSlash: 'always',
  redirects: {
    '/jardin/': '/notas/',
    '/jardin/2021-en-retrospectiva/': '/notas/2021-en-retrospectiva/',
    '/jardin/actualizacion-octubre-2023/': '/notas/actualizacion-octubre-2023/',
    '/jardin/mejorando-el-rendimiento-del-sitio-expanish': '/notas/mejorando-el-rendimiento-del-sitio-expanish/',
    '/web-expanish/': '/expanish-website/',
    '/checkout-expanish/': '/expanish-checkout/',
    '/garden/como-he-construido-mi-sitio-web-con-nextjs/': '/',
    '/garden/actualizacion-octubre/': '/notas/actualizacion-octubre-2023/',
    '/garden/2021-en-retrospectiva/': '/notas/2021-en-retrospectiva/',
    '/academia-baile-aria/': '/academia-de-baile-aria/',
    '/crossfit-quiniela/': '/proyectos/',
    '/expanish-post/': '/notas/',
    '/expanish-sitio-web/': '/expanish-website/',
    '/live': 'https://www.twitch.tv/coderdiaz',
    '/git': 'https://github.com/coderdiaz',
    '/meet': 'https://cal.com/coderdiaz/intro',
  },
  integrations: [react(), tailwind(), sitemap(), mdx({
    optimize: true,
    syntaxHighlight: 'shiki',
  })]
});