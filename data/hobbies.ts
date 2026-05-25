import type { ContentLocale } from '~/lib/portfolio/locale'
import type { CuriosityIconId } from '~/data/curiosityIcons'

export type HobbyCuriosity = {
  id: CuriosityIconId
  text: string
}

const hobbiesPt: HobbyCuriosity[] = [
  {
    id: 'lotr',
    text: 'Viciado em Senhor dos Anéis',
  },
  {
    id: 'countries',
    text: 'Mais de 40 países visitados',
  },
  {
    id: 'nomad',
    text: 'Vida nómade pela Europa',
  },
  {
    id: 'hiking',
    text: 'Caminhadas e trilhas sempre que dá',
  },
]

const hobbiesEn: HobbyCuriosity[] = [
  {
    id: 'lotr',
    text: 'Lord of the Rings addict',
  },
  {
    id: 'countries',
    text: '40+ countries visited and counting',
  },
  {
    id: 'nomad',
    text: 'Nomadic life across Europe',
  },
  {
    id: 'hiking',
    text: 'Hiking and trails whenever the landscape calls',
  },
]

export function hobbiesForLocale(locale: ContentLocale): HobbyCuriosity[] {
  return locale === 'en' ? hobbiesEn : hobbiesPt
}
