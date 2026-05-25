export type ContentLocale = 'pt' | 'en'

export type LocaleValue = {
  pt?: string | null
  en?: string | null
}

import { resolveI18nString } from '~/utils/resolveI18nMessage'

export function pickLocale(
  value: LocaleValue | null | undefined,
  locale: ContentLocale,
): string {
  if (!value) return ''
  const primary = locale === 'en' ? value.en : value.pt
  const fallback = locale === 'en' ? value.pt : value.en
  return resolveI18nString(primary || fallback).trim()
}

export function pickLocaleList(
  blocks: Array<LocaleValue | null | undefined> | null | undefined,
  locale: ContentLocale,
): string[] {
  if (!blocks?.length) return []
  return blocks.map((block) => pickLocale(block, locale)).filter(Boolean)
}
