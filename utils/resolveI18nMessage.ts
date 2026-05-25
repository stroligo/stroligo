/**
 * vue-i18n `tm()` pode devolver nós AST (objetos) em vez de strings.
 * Estes helpers normalizam para texto exibível na UI.
 */

type MessageNode = {
  static?: string
  source?: string
  body?: MessageNode | MessageNode[]
  loc?: { source?: string }
}

export function resolveI18nString(value: unknown): string {
  if (value == null) return ''
  if (typeof value === 'string') return value
  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value)
  }

  if (Array.isArray(value)) {
    return value.map(resolveI18nString).join('')
  }

  if (typeof value === 'object') {
    const node = value as MessageNode

    if (typeof node.static === 'string') return node.static
    if (typeof node.source === 'string') return node.source
    if (node.loc && typeof node.loc.source === 'string') return node.loc.source
    if (node.body) return resolveI18nString(node.body)
  }

  return ''
}

export function resolveI18nList(value: unknown): string[] {
  if (!Array.isArray(value)) return []
  return value.map(resolveI18nString).filter((item) => item.length > 0)
}

export function resolveI18nRecord<T extends Record<string, unknown>>(
  value: unknown,
  stringKeys: (keyof T)[],
): T {
  const raw = (value && typeof value === 'object' ? value : {}) as Record<
    string,
    unknown
  >

  const resolved = { ...raw } as T

  for (const key of stringKeys) {
    const k = key as string
    if (k in raw) {
      ;(resolved as Record<string, unknown>)[k] = resolveI18nString(raw[k])
    }
  }

  return resolved
}
