import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://coderdiaz.com',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-dark',
      },
    },
  },
  trailingSlash: 'always',
  redirects: {
    '/live': 'https://www.twitch.tv/coderdiaz',
    '/git': 'https://github.com/coderdiaz',
    '/intro': 'https://cal.com/coderdiaz/intro',
    '/notas/personaliza-tu-terminal/': '/notas/personaliza-tu-terminal-con-iterm-starship/',
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
    '/academia-de-baile-aria/': '/proyectos/academia-de-baile-aria/',
    '/expanish-checkout/': '/proyectos/expanish-checkout/',
    '/expanish-website/': '/proyectos/expanish-website/',
    '/codigofacilito/': '/proyectos/codigofacilito/',
    '/panda-salud/': '/proyectos/panda-salud/',
    '/software-para-academia-de-baile/': '/proyectos/software-para-academia-de-baile/',
  },
  integrations: [react(), tailwind(), sitemap(), mdx({
    optimize: true,
    syntaxHighlight: 'shiki',
  })]
});