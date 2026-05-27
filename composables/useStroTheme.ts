export type StroTheme = 'dark' | 'light'

const STORAGE_KEY = 'stroligo_theme'
const DARK_DEFAULT_MIGRATION = 'stroligo_theme_dark_default_v3'

function resolveThemeFromStorage(): StroTheme {
  if (!import.meta.client) return 'dark'

  try {
    if (!localStorage.getItem(DARK_DEFAULT_MIGRATION)) {
      localStorage.removeItem(STORAGE_KEY)
      localStorage.removeItem('stroligo_theme_light_default')
      localStorage.setItem(DARK_DEFAULT_MIGRATION, '1')
      return 'dark'
    }

    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === 'light') return 'light'
    if (raw === 'dark') return 'dark'
  } catch {
    /* ignore */
  }

  return 'dark'
}

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
    applyTheme(resolveThemeFromStorage())
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
