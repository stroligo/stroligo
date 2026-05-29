import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs'

const outputDir = '.output/public'
const notFoundPath = `${outputDir}/404.html`

if (existsSync(notFoundPath)) {
  let html = readFileSync(notFoundPath, 'utf8')

  if (!html.includes('noindex')) {
    html = html.replace(
      '<head>',
      '<head><meta name="robots" content="noindex, follow"><title>404 — stroligo.dev</title>',
    )
    writeFileSync(notFoundPath, html)
    console.log('Patched 404.html with noindex')
  }
}

const internalDir = `${outputDir}/__nuxt_content`
if (existsSync(internalDir)) {
  rmSync(internalDir, { recursive: true, force: true })
  console.log('Removed __nuxt_content from deploy output')
}
