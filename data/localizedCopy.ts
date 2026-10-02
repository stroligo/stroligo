import type { ContentLocale } from '~/lib/portfolio/locale'

export type LocalizedCopy = {
  en: string
  pt: string
  es?: string
}

export function localizedCopyForLocale(
  entry: LocalizedCopy | undefined,
  locale: ContentLocale,
): string | undefined {
  if (!entry) return undefined
  if (locale === 'en') return entry.en
  if (locale === 'pt') return entry.pt
  return entry.es ?? entry.en
}
