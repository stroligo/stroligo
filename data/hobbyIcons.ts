import type { SimpleIcon } from 'simple-icons'
import { siBoardgamegeek, siInstagram } from 'simple-icons'

export type HobbyIconId = 'instagram' | 'boardgamegeek'

export type HobbyIconDef = {
  path: string
  color: string
  title: string
}

const icons: Record<HobbyIconId, SimpleIcon> = {
  instagram: siInstagram,
  boardgamegeek: siBoardgamegeek,
}

export function getHobbyIcon(id: HobbyIconId): HobbyIconDef {
  const icon = icons[id]
  return {
    path: icon.path,
    color: `#${icon.hex}`,
    title: icon.title,
  }
}
