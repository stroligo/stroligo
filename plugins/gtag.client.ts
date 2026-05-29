import { site } from '~/data/site'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export default defineNuxtPlugin(() => {
  const id =
    useRuntimeConfig().public.googleAnalyticsId || site.googleAnalyticsId

  if (!id || import.meta.dev) return

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
        async: true,
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `,
      },
    ],
  })

  const router = useRouter()
  router.afterEach((to) => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', id, { page_path: to.fullPath })
    }
  })
})
