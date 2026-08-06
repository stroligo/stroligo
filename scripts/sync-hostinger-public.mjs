/**
 * Hostinger Web App builds Nuxt into .output/public, but hCDN often serves
 * static paths (/_nuxt/*) from domains/<site>/public_html — which stays empty.
 * After build on Hostinger, copy the public output into public_html.
 */
import { cpSync, existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const publicOut = resolve('.output/public')
const cwd = process.cwd()

console.log(`[hostinger-sync] cwd=${cwd}`)

if (!existsSync(publicOut)) {
  console.log('[hostinger-sync] Skip: .output/public not found')
  process.exit(0)
}

const domainRoot = cwd.match(/^(.*?\/domains\/[^/]+)/)?.[1]
const candidates = [
  process.env.HOSTINGER_PUBLIC_HTML,
  domainRoot ? join(domainRoot, 'public_html') : null,
  resolve('../../../public_html'),
  resolve('../../../../public_html'),
  resolve('../../public_html'),
  resolve('/home/u317256614/domains/stroligo.dev/public_html'),
].filter(Boolean)

console.log('[hostinger-sync] candidates:', candidates.join(' | '))

const dest = candidates.find((dir) => {
  try {
    if (existsSync(dir) && statSync(dir).isDirectory()) return true
    // Try create if parent domain folder exists
    const parent = resolve(dir, '..')
    if (existsSync(parent) && statSync(parent).isDirectory()) {
      mkdirSync(dir, { recursive: true })
      return true
    }
  } catch (err) {
    console.log(`[hostinger-sync] cannot use ${dir}:`, err?.message || err)
  }
  return false
})

if (!dest) {
  console.warn('[hostinger-sync] public_html not reachable from this build jail')
  process.exit(0)
}

const entries = readdirSync(publicOut)
console.log(`[hostinger-sync] Copying ${entries.length} entries → ${dest}`)

for (const name of entries) {
  cpSync(join(publicOut, name), join(dest, name), { recursive: true, force: true })
}

const nuxtDir = join(dest, '_nuxt')
const nuxtCount = existsSync(nuxtDir) ? readdirSync(nuxtDir).length : 0
console.log(`[hostinger-sync] Done. public_html/_nuxt files: ${nuxtCount}`)

try {
  writeFileSync(
    join(dest, '.hostinger-sync-ok'),
    `${new Date().toISOString()} nuxt=${nuxtCount}\n`,
    'utf8',
  )
} catch {
  /* ignore */
}
