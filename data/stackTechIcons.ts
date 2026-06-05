import type { SimpleIcon } from 'simple-icons'
import {
  siCss,
  siGit,
  siHtml5,
  siJavascript,
  siJoomla,
  siMui,
  siNextdotjs,
  siNodedotjs,
  siNuxt,
  siPhp,
  siReact,
  siTailwindcss,
  siTypescript,
  siVite,
  siVuedotjs,
  siWordpress,
} from 'simple-icons'

export type StackTechIcon = {
  path: string
  color: string
  title: string
}

function fromSimpleIcon(icon: SimpleIcon, color?: string): StackTechIcon {
  return {
    path: icon.path,
    color: color ?? `#${icon.hex}`,
    title: icon.title,
  }
}

/** Slugs oficiais — https://simpleicons.org */
export const stackTechIcons: Record<string, StackTechIcon> = {
  React: fromSimpleIcon(siReact),
  'Next.js': fromSimpleIcon(siNextdotjs, '#EDEDED'),
  Vue: fromSimpleIcon(siVuedotjs),
  Nuxt: fromSimpleIcon(siNuxt),
  TypeScript: fromSimpleIcon(siTypescript),
  'Tailwind CSS': fromSimpleIcon(siTailwindcss),
  'Material UI': fromSimpleIcon(siMui),
  Vite: fromSimpleIcon(siVite),
  'Node.js': fromSimpleIcon(siNodedotjs),
  PHP: fromSimpleIcon(siPhp),
  Joomla: fromSimpleIcon(siJoomla),
  HTML: fromSimpleIcon(siHtml5),
  CSS: fromSimpleIcon(siCss),
  JavaScript: fromSimpleIcon(siJavascript),
  Git: fromSimpleIcon(siGit),
  WordPress: fromSimpleIcon(siWordpress),
}

export function getStackTechIcon(label: string): StackTechIcon | null {
  return stackTechIcons[label] ?? null
}
