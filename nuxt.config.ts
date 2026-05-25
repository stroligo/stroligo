import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  experimental: {
    appManifest: false,
  },
  modules: ['@nuxt/content', '@nuxtjs/i18n', 'nuxt-studio'],
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
  studio: {
    route: '/_studio',
    repository: {
      provider: 'github',
      owner: 'stroligo',
      repo: 'stroligo',
      branch: 'main',
    },
  },
  app: {
    head: {
      htmlAttrs: {
        'data-theme': 'dark',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'stroligo.dev',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.svg' },
      ],
      script: [
        {
          tagPosition: 'head',
          innerHTML: `(function(){try{var t=localStorage.getItem('stroligo_theme');if(t==='light')document.documentElement.setAttribute('data-theme','light');}catch(e){}})();`,
        },
      ],
      meta: [
        { name: 'author', content: 'Gabriel Stroligo' },
        { name: 'theme-color', content: '#0B1020' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },
  i18n: {
    baseUrl: 'https://stroligo.dev',
    restructureDir: false,
    locales: [
      { code: 'pt', language: 'pt-BR', file: 'pt.ts', name: 'Português' },
      { code: 'en', language: 'en-US', file: 'en.ts', name: 'English' },
    ],
    defaultLocale: 'pt',
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'stroligo_locale',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'pt',
    },
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
      routes: ['/', '/en'],
      ignore: ['/_studio', '/_studio/**', '/uikit'],
    },
  },
})
