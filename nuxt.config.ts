import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  experimental: {
    appManifest: false,
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    ...(process.env.NUXT_STUDIO === '0' ? [] : ['nuxt-studio']),
  ],
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },
  devServer: {
    port: 3000,
    host: 'localhost',
  },
  css: ['~/assets/css/main.css'],
  ...(process.env.NUXT_STUDIO === '0'
    ? {}
    : {
        studio: {
          route: '/_studio',
          repository: {
            provider: 'github',
            owner: 'stroligo',
            repo: 'stroligo',
            branch: 'main',
          },
        },
      }),
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        'data-theme': 'dark',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'stroligo.dev',
      titleTemplate: '%s',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.svg' },
      ],
      script: [
        {
          tagPosition: 'head',
          innerHTML: `(function(){try{var k='stroligo_theme',m='stroligo_theme_dark_default_v3';if(!localStorage.getItem(m)){localStorage.removeItem(k);localStorage.removeItem('stroligo_theme_light_default');localStorage.setItem(m,'1');}var t=localStorage.getItem(k);document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
        },
      ],
      meta: [
        { name: 'author', content: 'Gabriel Stroligo' },
        { name: 'theme-color', content: '#0B1020' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-title', content: 'stroligo.dev' },
      ],
    },
  },
  i18n: {
    baseUrl: 'https://stroligo.dev',
    restructureDir: false,
    locales: [
      { code: 'en', language: 'en-US', file: 'en.ts', name: 'English' },
      { code: 'pt', language: 'pt-BR', file: 'pt.ts', name: 'Português' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        ignored: [
          '**/.nuxt/dist/**',
          '**/.output/**',
          '**/dist/**',
        ],
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/pt'],
      ignore: ['/_studio', '/_studio/**', '/uikit'],
    },
  },
})
