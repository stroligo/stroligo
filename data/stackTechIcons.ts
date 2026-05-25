import type { SimpleIcon } from 'simple-icons'
import {
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
}

export function getStackTechIcon(label: string): StackTechIcon | null {
  return stackTechIcons[label] ?? null
}
