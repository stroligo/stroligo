import interLatin from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url'
import mono400 from '@fontsource/jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2?url'
import mono600 from '@fontsource/jetbrains-mono/files/jetbrains-mono-latin-600-normal.woff2?url'

/** Self-hosted fonts + preload das faces críticas (LCP / UI). */
export function useStroFonts() {
  useHead({
    link: [
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        crossorigin: '',
        href: interLatin,
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        crossorigin: '',
        href: mono600,
      },
      {
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        crossorigin: '',
        href: mono400,
      },
    ],
  })
}
