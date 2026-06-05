import type { Experience } from '~/types/portfolio'
import { experienceBulletsForResume } from '~/data/experienceBodies'
import type { ResumeContent } from '../../data/resume'
import { experienceDateRange, resumeExperiences } from '../../data/resume'

function escapeHtml(text: string) {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function experienceBlock(
  job: Experience,
  labels: ResumeContent['labels'],
  locale: ResumeContent['locale'],
) {
  const dates = experienceDateRange(
    job.yearStart,
    job.yearEnd,
    job.current,
    locale,
  )
  const bullets = experienceBulletsForResume(job, job.current ? 5 : 4)
  const stackLine = job.stack?.length
    ? `<p class="job-stack"><strong>${escapeHtml(labels.stack)}:</strong> ${escapeHtml(job.stack.join(', '))}</p>`
    : ''

  return `
    <article class="job">
      <h3 class="job-company">${escapeHtml(job.company)}</h3>
      <p class="job-title">${escapeHtml(job.role)}</p>
      <p class="job-meta">${escapeHtml(job.location)} | ${escapeHtml(dates)}</p>
      <ul class="job-bullets">
        ${bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join('')}
      </ul>
      ${stackLine}
    </article>`
}

function projectBlock(
  p: ResumeContent['projects'][number],
  labels: ResumeContent['labels'],
) {
  const meta = [p.organization, p.year].filter(Boolean).join(' | ')
  const contribution = p.contribution
    ? `<p class="project-role"><strong>${escapeHtml(labels.contribution)}:</strong> ${escapeHtml(p.contribution)}</p>`
    : ''

  return `
    <article class="project">
      <h3 class="project-title">${escapeHtml(p.title)}</h3>
      <p class="project-meta">${escapeHtml(meta)}</p>
      <p class="project-desc">${escapeHtml(p.description)}</p>
      ${p.stack ? `<p class="project-stack"><strong>${escapeHtml(labels.stack)}:</strong> ${escapeHtml(p.stack)}</p>` : ''}
      ${contribution}
    </article>`
}

export function renderResumeAtsHtml(content: ResumeContent) {
  const experiences = resumeExperiences(content.locale)
  const { sections } = content

  return `<!DOCTYPE html>
<html lang="${escapeHtml(content.htmlLang)}">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(content.name)} - ${escapeHtml(sections.summary)}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    @page { size: A4; margin: 14mm 16mm; }
    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 10.5pt;
      line-height: 1.4;
      color: #111827;
      background: #ffffff;
      max-width: 210mm;
      margin: 0 auto;
      padding: 14mm 16mm;
    }
    h1 { font-size: 20pt; font-weight: 700; margin-bottom: 4pt; }
    .headline {
      font-size: 10.5pt;
      font-weight: 600;
      color: #1e40af;
      margin-bottom: 6pt;
      line-height: 1.35;
    }
    .contact {
      font-size: 9.5pt;
      color: #374151;
      margin-bottom: 14pt;
      line-height: 1.5;
    }
    .contact a { color: #1e40af; text-decoration: none; }
    section { margin-bottom: 14pt; }
    h2 {
      font-size: 11pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      border-bottom: 1pt solid #9ca3af;
      padding-bottom: 3pt;
      margin-bottom: 8pt;
    }
    .summary p { margin-bottom: 6pt; }
    .skills { font-size: 10pt; line-height: 1.45; }
    .job, .project {
      margin-bottom: 10pt;
      page-break-inside: avoid;
    }
    .job-company, .project-title {
      font-size: 10.5pt;
      font-weight: 700;
      margin-bottom: 2pt;
    }
    .job-title { font-size: 10pt; font-weight: 600; color: #1e40af; margin-bottom: 2pt; }
    .job-meta, .project-meta {
      font-size: 9.5pt;
      color: #4b5563;
      margin-bottom: 4pt;
    }
    .job-bullets { margin-left: 14pt; margin-bottom: 4pt; }
    .job-bullets li { margin-bottom: 3pt; font-size: 10pt; }
    .job-stack, .project-stack, .project-role {
      font-size: 9.5pt;
      color: #374151;
      margin-bottom: 3pt;
    }
    .project-desc { font-size: 10pt; margin-bottom: 4pt; line-height: 1.45; }
    .list-plain { margin-left: 14pt; }
    .list-plain li { margin-bottom: 4pt; }
    .edu-item { margin-bottom: 6pt; }
    .edu-school { font-weight: 700; }
    .edu-degree, .edu-period { color: #374151; font-size: 10pt; }
    .footer { margin-top: 12pt; font-size: 8.5pt; color: #6b7280; }
    .projects-section { page-break-before: auto; }
  </style>
</head>
<body>
  <header>
    <h1>${escapeHtml(content.name)}</h1>
    <p class="headline">${escapeHtml(content.headline)}</p>
    <p class="contact">
      ${escapeHtml(content.location)} |
      <a href="mailto:${escapeHtml(content.email)}">${escapeHtml(content.email)}</a> |
      ${escapeHtml(content.phone)} |
      <a href="${escapeHtml(content.linkedIn)}">linkedin.com/in/gabrielstroligo</a> |
      <a href="${escapeHtml(content.github)}">github.com/stroligo</a> |
      <a href="${escapeHtml(content.siteUrl)}">stroligo.dev</a>
    </p>
  </header>

  <section class="summary">
    <h2>${escapeHtml(sections.summary)}</h2>
    ${content.summary.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
  </section>

  <section>
    <h2>${escapeHtml(sections.skills)}</h2>
    <p class="skills">${escapeHtml(content.skills)}</p>
  </section>

  <section>
    <h2>${escapeHtml(sections.experience)}</h2>
    ${experiences.map((job) => experienceBlock(job, content.labels, content.locale)).join('')}
  </section>

  <section class="projects-section">
    <h2>${escapeHtml(sections.projects)}</h2>
    ${content.projects.map((p) => projectBlock(p, content.labels)).join('')}
  </section>

  <section>
    <h2>${escapeHtml(sections.education)}</h2>
    ${content.education
      .map(
        (e) => `
      <div class="edu-item">
        <div class="edu-school">${escapeHtml(e.school)}</div>
        <div class="edu-degree">${escapeHtml(e.degree)}</div>
        <div class="edu-period">${escapeHtml(e.period)}</div>
      </div>`,
      )
      .join('')}
  </section>

  <section>
    <h2>${escapeHtml(sections.certifications)}</h2>
    <ul class="list-plain">
      ${content.certifications.map((c) => `<li>${escapeHtml(c)}</li>`).join('')}
    </ul>
  </section>

  <section>
    <h2>${escapeHtml(sections.languages)}</h2>
    <ul class="list-plain">
      ${content.languages
        .map((l) => `<li>${escapeHtml(l.name)}: ${escapeHtml(l.level)}</li>`)
        .join('')}
    </ul>
  </section>

  <p class="footer">${escapeHtml(content.labels.footer)} — ${escapeHtml(content.name)} — ${escapeHtml(content.updated)} — ${escapeHtml(content.siteUrl)}</p>
</body>
</html>`
}
