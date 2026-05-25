/**
 * Captura screenshot do site ao vivo → public/projects/{id}.webp
 * Uso: npm run sync:screenshots
 *      npm run sync:screenshots -- inovahc safernet
 */
import { mkdir, unlink } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { chromium } from 'playwright'
import sharp from 'sharp'

import { projectAssetsById } from '../data/projects.assets'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const VIEWPORT = { width: 1280, height: 720 }

const defaultIds = [
  'dr-jose-messias',
  'layane-moura',
  'olliv-pericias',
  'safernet',
  'inovahc',
  'hfpm-who',
  'weplan-forests',
  'desiderata',
  'golpe-flix',
] as const

const ids = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [...defaultIds]

async function capture(id: string) {
  const url = projectAssetsById[id]?.siteUrl
  if (!url) throw new Error(`sem siteUrl para ${id}`)

  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
  })

  try {
    await page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 90_000,
    })
    await page.waitForTimeout(2500)

    const dest = join(root, 'public', 'projects', `${id}.webp`)
    const tmpPng = join(root, 'public', 'projects', `${id}.png`)
    await page.screenshot({
      path: tmpPng,
      type: 'png',
      fullPage: false,
    })
    await sharp(tmpPng).webp({ quality: 82 }).toFile(dest)
    await unlink(tmpPng)
    console.log(`[ok] ${id} ← ${url}`)
  } finally {
    await browser.close()
  }
}

async function main() {
  await mkdir(join(root, 'public', 'projects'), { recursive: true })

  for (const id of ids) {
    try {
      await capture(id)
    } catch (err) {
      console.error(`[fail] ${id}:`, (err as Error).message)
      process.exitCode = 1
    }
  }
}

main()
