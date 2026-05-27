/**
 * Gera PDFs do currículo (ATS) em PT e EN.
 * Uso: npm run generate:resume
 */
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { chromium } from 'playwright'

import { getResumeContent, type ResumeLocale } from '../data/resume'
import { renderResumeAtsHtml } from './lib/render-resume-ats-html'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const profileDir = join(root, 'profile')
const publicDir = join(root, 'public/profile')
const locales: ResumeLocale[] = ['en', 'pt']

async function main() {
  await mkdir(profileDir, { recursive: true })
  await mkdir(publicDir, { recursive: true })

  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()

  const pdfOptions = {
    format: 'A4' as const,
    printBackground: false,
    margin: { top: '14mm', right: '16mm', bottom: '14mm', left: '16mm' },
  }

  for (const locale of locales) {
    const content = getResumeContent(locale)
    const html = renderResumeAtsHtml(content)
    const htmlPath = join(profileDir, `resume-${locale}.html`)
    await writeFile(htmlPath, html, 'utf8')

    await page.setContent(html, { waitUntil: 'domcontentloaded' })

    const pdfPath = join(profileDir, content.filename)
    const publicPdfPath = join(publicDir, content.filename)

    await page.pdf({ path: pdfPath, ...pdfOptions })
    await page.pdf({ path: publicPdfPath, ...pdfOptions })

    console.log(`✓ ${locale.toUpperCase()} ${pdfPath}`)
  }

  await browser.close()
  console.log('  Downloads: /profile/gabriel-stroligo-cv-en.pdf | -pt.pdf')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
