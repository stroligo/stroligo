/** Remove cookie legado `stroligo_locale` (antes da detecção via @nuxtjs/i18n). */
export default defineNuxtPlugin(() => {
  const MIGRATION = 'stroligo_locale_legacy_cleared'
  if (localStorage.getItem(MIGRATION)) return

  document.cookie = 'stroligo_locale=; Max-Age=0; path=/; SameSite=Lax'
  localStorage.setItem(MIGRATION, '1')
})
