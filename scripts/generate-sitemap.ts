import { writeFileSync } from 'node:fs'
import { site } from '../data/site'

const lastmod = new Date().toISOString().slice(0, 10)

const pages = [
  { loc: `${site.siteUrl}/`, priority: '1.0' },
  { loc: `${site.siteUrl}/pt`, priority: '0.9' },
] as const

const hreflangBlock = `
    <xhtml:link rel="alternate" hreflang="en" href="${site.siteUrl}/"/>
    <xhtml:link rel="alternate" hreflang="pt" href="${site.siteUrl}/pt"/>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${site.siteUrl}/pt"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${site.siteUrl}/"/>`

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>${hreflangBlock}
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync('public/sitemap.xml', xml)
console.log(`Generated public/sitemap.xml (lastmod: ${lastmod})`)
