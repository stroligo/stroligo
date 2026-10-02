export type StroTheme = 'light'

export function useStroTheme() {
  const theme = useState<StroTheme>('stro-theme', () => 'light')

  const isDark = computed(() => false)

  function initTheme() {
    if (!import.meta.client) return
    document.documentElement.setAttribute('data-theme', 'light')
  }

  const themeColor = computed(() => '#f4f6fb')

  useHead({
    meta: [
      {
        name: 'theme-color',
        content: themeColor,
      },
    ],
  })

  return {
    theme,
    isDark,
    themeColor,
    initTheme,
  }
}
