import type { ContentLocale } from '~/lib/portfolio/locale'

export function i18nCodeToContentLocale(code: string): ContentLocale {
  if (code === 'pt') return 'pt'
  if (code === 'es') return 'es'
  return 'en'
}

export function contentLocaleToSitePath(locale: ContentLocale): string {
  if (locale === 'en') return '/'
  return `/${locale}`
}

export function contentLocaleToHtmlLang(locale: ContentLocale): string {
  if (locale === 'pt') return 'pt-BR'
  if (locale === 'es') return 'es'
  return 'en'
}

export function contentLocaleToOpenGraphLocale(locale: ContentLocale): string {
  if (locale === 'pt') return 'pt_BR'
  if (locale === 'es') return 'es_ES'
  return 'en_US'
}
