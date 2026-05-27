/** Limpa cookie de locale antigo (detecção automática PT) — default passa a EN. */
export default defineNuxtPlugin(() => {
  const MIGRATION = 'stroligo_locale_en_default'
  if (localStorage.getItem(MIGRATION)) return

  document.cookie =
    'stroligo_locale=; Max-Age=0; path=/; SameSite=Lax'
  document.cookie =
    'i18n_redirected=; Max-Age=0; path=/; SameSite=Lax'
  localStorage.setItem(MIGRATION, '1')
})
