/**
 * Baixa capas dos projetos para public/projects/{id}.webp
 * Uso: npm run sync:projects [-- --force]
 */
import { mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import {
  behanceFetchUrl,
  projectImageSources,
} from '../data/projects.images'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const force = process.argv.includes('--force')

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

function extractOgImage(html: string): string | null {
  const patterns = [
    /<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image(?::secure_url)?["']/i,
    /<meta[^>]+name=["']twitter:image(?::src)?["'][^>]+content=["']([^"']+)["']/i,
  ]
  for (const re of patterns) {
    const m = html.match(re)
    if (m?.[1]) return m[1].replace(/&amp;/g, '&')
  }
  return null
}

function resolveImageUrl(imageUrl: string, pageUrl: string): string {
  try {
    return new URL(imageUrl, pageUrl).href
  } catch {
    return imageUrl
  }
}

async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, Accept: 'text/html' },
    redirect: 'follow',
    signal: AbortSignal.timeout(25_000),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.text()
}

async function downloadImage(
  imageUrl: string,
  pageUrl: string,
  dest: string,
): Promise<void> {
  const absolute = resolveImageUrl(imageUrl, pageUrl)
  const res = await fetch(absolute, {
    headers: { 'User-Agent': UA, Accept: 'image/*,*/*' },
    redirect: 'follow',
    signal: AbortSignal.timeout(35_000),
  })
  if (!res.ok) throw new Error(`image HTTP ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  if (buf.length < 400) throw new Error('image too small')

  const sharp = (await import('sharp')).default
  await sharp(buf, { failOn: 'none' })
    .rotate()
    .resize({
      width: 960,
      height: 540,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({ quality: 75, effort: 6 })
    .toFile(dest)
}

async function resolveFromUrls(
  id: string,
  urls: string[],
): Promise<string | null> {
  for (const url of urls) {
    try {
      const html = await fetchHtml(url)
      const imageUrl = extractOgImage(html)
      if (imageUrl) {
        return resolveImageUrl(imageUrl, url)
      }
    } catch (err) {
      console.warn(`  [try] ${id} @ ${url}: ${(err as Error).message}`)
    }
  }
  return null
}

async function syncOne(id: string): Promise<void> {
  const dest = join(root, 'public', 'projects', `${id}.webp`)
  const source = projectImageSources[id]
  const urls = [
    ...(source?.fetchUrls ?? []),
    behanceFetchUrl(id),
  ].filter(Boolean) as string[]

  let imageUrl = source?.image ?? null
  if (!imageUrl && urls.length) {
    imageUrl = await resolveFromUrls(id, urls)
  }

  if (!imageUrl) {
    console.warn(`[skip] ${id}: sem imagem`)
    return
  }

  const pageUrl = urls[0] ?? imageUrl
  await downloadImage(imageUrl, pageUrl, dest)
  console.log(`[ok] ${id}`)
}

async function main() {
  const outDir = join(root, 'public', 'projects')
  await mkdir(outDir, { recursive: true })

  const ids = Object.keys(projectImageSources)
  for (const id of ids) {
    const dest = join(outDir, `${id}.webp`)
    if (!force) {
      try {
        const { stat } = await import('node:fs/promises')
        const s = await stat(dest)
        if (s.size > 1000) {
          console.log(`[keep] ${id}`)
          continue
        }
      } catch {
        /* download */
      }
    }
    try {
      await syncOne(id)
    } catch (err) {
      console.warn(`[fail] ${id}: ${(err as Error).message}`)
    }
  }
}

main()
