export type StroTheme = 'dark' | 'light'

const STORAGE_KEY = 'stroligo_theme'

export function useStroTheme() {
  const theme = useState<StroTheme>('stro-theme', () => 'dark')

  const isDark = computed(() => theme.value === 'dark')

  function applyTheme(value: StroTheme) {
    theme.value = value
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', value)
      localStorage.setItem(STORAGE_KEY, value)
    }
  }

  function initTheme() {
    if (!import.meta.client) return

    let stored: StroTheme | null = null
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw === 'light' || raw === 'dark') stored = raw
    } catch {
      stored = null
    }

    applyTheme(stored ?? 'dark')
  }

  function setDarkMode(enabled: boolean) {
    applyTheme(enabled ? 'dark' : 'light')
  }

  function toggleTheme() {
    setDarkMode(!isDark.value)
  }

  const themeColor = computed(() =>
    isDark.value ? '#0b1020' : '#f4f6fb',
  )

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
    setDarkMode,
    toggleTheme,
  }
}
