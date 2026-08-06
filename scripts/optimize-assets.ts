/**
 * Otimiza foto de perfil, capas de projetos e gera OG 1200×630.
 * Uso: npm run optimize:assets
 */
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const projectsDir = join(root, 'public/projects')
const profileDir = join(root, 'public/profile')
const publicDir = join(root, 'public')

const SOURCE_PHOTO = join(root, 'PROJETO/foto.png')

async function optimizeProfilePhoto() {
  const input = sharp(SOURCE_PHOTO, { failOn: 'none' }).rotate()
  const meta = await input.metadata()
  console.log(
    `photo source: ${meta.width}×${meta.height} ${meta.format}`,
  )

  await mkdir(profileDir, { recursive: true })

  // Display: portrait ~640×800 WebP
  await input
    .clone()
    .resize(640, 800, { fit: 'cover', position: 'centre' })
    .webp({ quality: 82, effort: 6 })
    .toFile(join(profileDir, 'photo.webp'))

  // Fallback PNG (also used if something still points to .png)
  await input
    .clone()
    .resize(640, 800, { fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 9, palette: false })
    .toFile(join(profileDir, 'photo.png'))

  const webpStat = await readFile(join(profileDir, 'photo.webp'))
  const pngStat = await readFile(join(profileDir, 'photo.png'))
  console.log(
    `  → photo.webp ${(webpStat.length / 1024).toFixed(1)} KB, photo.png ${(pngStat.length / 1024).toFixed(1)} KB`,
  )
}

async function generateOgImage() {
  const photo = await sharp(SOURCE_PHOTO, { failOn: 'none' })
    .rotate()
    .resize(420, 420, { fit: 'cover', position: 'centre' })
    .png()
    .toBuffer()

  const svg = Buffer.from(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1020"/>
      <stop offset="55%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#151b2e"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="50%" stop-color="#3B82F6"/>
      <stop offset="100%" stop-color="#06B6D4"/>
    </linearGradient>
    <clipPath id="avatar">
      <rect x="780" y="105" width="320" height="420" rx="28"/>
    </clipPath>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="180" cy="80" r="220" fill="#8B5CF6" fill-opacity="0.12"/>
  <circle cx="1050" cy="560" r="260" fill="#06B6D4" fill-opacity="0.10"/>
  <rect x="0" y="0" width="1200" height="6" fill="url(#accent)"/>
  <text x="72" y="120" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="28" fill="#06B6D4">&lt;stroligo.dev/&gt;</text>
  <text x="72" y="230" font-family="ui-sans-serif, system-ui, sans-serif" font-size="64" font-weight="700" fill="#F3F4F6">Gabriel Stroligo</text>
  <text x="72" y="300" font-family="ui-sans-serif, system-ui, sans-serif" font-size="32" fill="#94A3B8">Front-end · impact-driven projects</text>
  <text x="72" y="370" font-family="ui-sans-serif, system-ui, sans-serif" font-size="24" fill="#64748B">Nuxt · Vue · React · TypeScript</text>
  <rect x="72" y="430" width="280" height="4" rx="2" fill="url(#accent)"/>
  <image x="780" y="105" width="320" height="420" clip-path="url(#avatar)" xlink:href="data:image/png;base64,${photo.toString('base64')}"/>
  <rect x="780" y="105" width="320" height="420" rx="28" fill="none" stroke="#8B5CF6" stroke-opacity="0.45" stroke-width="2"/>
</svg>`)

  await sharp(svg)
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(join(publicDir, 'og.jpg'))

  await sharp(svg)
    .png({ compressionLevel: 9 })
    .toFile(join(publicDir, 'og.png'))

  await sharp(svg)
    .webp({ quality: 85, effort: 6 })
    .toFile(join(publicDir, 'og.webp'))

  const ogJpg = await readFile(join(publicDir, 'og.jpg'))
  console.log(`  → og.jpg ${(ogJpg.length / 1024).toFixed(1)} KB (1200×630)`)
}

async function optimizeProjectCovers() {
  await mkdir(projectsDir, { recursive: true })
  const files = await readdir(projectsDir)
  const images = files.filter((f) =>
    /\.(webp|png|jpe?g|avif)$/i.test(f),
  )

  for (const file of images) {
    const src = join(projectsDir, file)
    const id = file.replace(/\.(webp|png|jpe?g|avif)$/i, '')
    const dest = join(projectsDir, `${id}.webp`)

    try {
      const before = (await readFile(src)).length
      const pipeline = sharp(src, { failOn: 'none' }).rotate()
      const meta = await pipeline.metadata()

      await pipeline
        .resize({
          width: 960,
          height: 540,
          fit: 'inside',
          withoutEnlargement: true,
        })
        .webp({ quality: 75, effort: 6 })
        .toFile(dest + '.tmp')

      const { rename, unlink } = await import('node:fs/promises')
      await rename(dest + '.tmp', dest)

      // Remove non-webp originals if extension differed
      if (extname(file).toLowerCase() !== '.webp' || file !== `${id}.webp`) {
        // If source was same as dest path after rename we're fine;
        // if source had different name, delete source
        if (src !== dest) {
          try {
            await unlink(src)
          } catch {
            /* ignore */
          }
        }
      }

      const after = (await readFile(dest)).length
      console.log(
        `  ${id}: ${meta.width}×${meta.height} ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`,
      )
    } catch (err) {
      console.warn(`  [skip] ${file}: ${(err as Error).message}`)
    }
  }
}

async function main() {
  console.log('Optimizing profile photo…')
  await optimizeProfilePhoto()

  console.log('Generating Open Graph image…')
  await generateOgImage()

  console.log('Optimizing project covers…')
  await optimizeProjectCovers()

  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
