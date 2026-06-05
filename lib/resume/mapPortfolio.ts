import { experienceBodyForLocale, experienceBodyParagraphs } from '~/data/experienceBodies'
import { experienceStackForId } from '~/data/experiences'
import type { ContentLocale } from '~/lib/portfolio/locale'
import { projectBodyForLocale } from '~/data/projectBodies'
import { projectStacksById } from '~/data/projectStacks'

type ResumeLocale = ContentLocale

function bodyParagraphs(body: string | undefined): string[] {
  if (!body?.trim()) return []
  return body
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean)
}

export function resumeProjectCopy(
  id: string,
  locale: ResumeLocale,
  fallback: {
    description: string
    contribution: string
  },
): { description: string; contribution: string; stack: string } {
  const paragraphs = bodyParagraphs(projectBodyForLocale(id, locale))
  const stack = (projectStacksById[id] ?? []).join(', ')

  return {
    description: paragraphs[0] ?? fallback.description,
    contribution: paragraphs[1] ?? fallback.contribution,
    stack,
  }
}

export function resumeEuipoCopy(locale: ResumeLocale): {
  description: string
  contribution: string
  stack: string
} {
  const paragraphs = experienceBodyParagraphs(
    experienceBodyForLocale('vex-tech', locale),
  ).filter(
    (p) =>
      !/^(main stack|stack principal|technologies|tecnologias)\s*:/i.test(p),
  )

  return {
    description: paragraphs[0] ?? '',
    contribution: paragraphs[1] ?? paragraphs[2] ?? '',
    stack: (experienceStackForId('vex-tech') ?? []).join(', '),
  }
}
