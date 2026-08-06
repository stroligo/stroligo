/**
 * Hostinger Web App builds Nuxt into .output/public, but hCDN often serves
 * static paths (/_nuxt/*) from domains/<site>/public_html — which stays empty.
 * After build on Hostinger, copy the public output into public_html.
 */
import { cpSync, existsSync, readdirSync, statSync } from 'node:fs'
import { resolve, join } from 'node:path'

const publicOut = resolve('.output/public')

if (!existsSync(publicOut)) {
  console.log('[hostinger-sync] Skip: .output/public not found')
  process.exit(0)
}

const candidates = [
  process.env.HOSTINGER_PUBLIC_HTML,
  // hbuilds/source/repository → ../../../public_html
  resolve('../../../public_html'),
  resolve('../../../../public_html'),
  resolve('../../public_html'),
].filter(Boolean)

const dest = candidates.find((dir) => {
  try {
    return existsSync(dir) && statSync(dir).isDirectory()
  } catch {
    return false
  }
})

if (!dest) {
  console.log('[hostinger-sync] Skip: public_html not found (local build)')
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
