import type { ContentLocale } from '~/lib/portfolio/locale'
import type { HobbyIconId } from '~/data/hobbyIcons'

export type Hobby = {
  id: string
  iconId: HobbyIconId
  title: string
  bullets: string[]
  href?: string
  linkLabel?: string
}

const hobbiesPt: Hobby[] = [
  {
    id: 'travel-europe',
    iconId: 'instagram',
    title: 'Viagens na Europa',
    bullets: [
      'Explorar cidades e culturas pelo continente',
      'Lista de países visitados no Instagram @gabrielstroligo',
      'Diário de viagem no projeto @elestaoviajando',
    ],
    href: 'https://www.instagram.com/gabrielstroligo',
    linkLabel: '@gabrielstroligo',
  },
  {
    id: 'nerd-fantasy',
    iconId: 'boardgamegeek',
    title: 'Nerd & universos de fantasia',
    bullets: [
      'Senhor dos Anéis e mundos de fantasia épica',
      'Ficção científica, séries e franquias geek',
      'Livros e universos que inspiram criatividade fora do código',
    ],
  },
  {
    id: 'board-games',
    iconId: 'boardgamegeek',
    title: 'Jogos de tabuleiro',
    bullets: [
      'Estratégia, narrativa e mecânicas bem desenhadas',
      'Noites de jogo com amigos',
      'Curadoria e experiência no 42 Bar e Board Games',
    ],
  },
]

const hobbiesEn: Hobby[] = [
  {
    id: 'travel-europe',
    iconId: 'instagram',
    title: 'Travel across Europe',
    bullets: [
      'Exploring cities and cultures across the continent',
      'List of countries visited on Instagram @gabrielstroligo',
      'Travel diary on the @elestaoviajando project',
    ],
    href: 'https://www.instagram.com/gabrielstroligo',
    linkLabel: '@gabrielstroligo',
  },
  {
    id: 'nerd-fantasy',
    iconId: 'boardgamegeek',
    title: 'Nerd & fantasy worlds',
    bullets: [
      'The Lord of the Rings and epic fantasy worlds',
      'Sci-fi, series, and geek franchises',
      'Books and universes that fuel creativity beyond code',
    ],
  },
  {
    id: 'board-games',
    iconId: 'boardgamegeek',
    title: 'Board games',
    bullets: [
      'Strategy, storytelling, and solid game design',
      'Game nights with friends',
      'Curation and hands-on experience at 42 Bar & Board Games',
    ],
  },
]

export function hobbiesForLocale(locale: ContentLocale): Hobby[] {
  return locale === 'en' ? hobbiesEn : hobbiesPt
}
