import { FontType } from '@/types'

export const FILTERS = {
  NORMAL: 'none',
  POLAROID: 'sepia(0.2) contrast(1.0) brightness(1) saturate(1.2) blur(0px)',
  VINTAGE:
    'sepia(0.4) contrast(1.1) brightness(0.9) saturate(0.8) hue-rotate(-20deg) blur(0.6px)',
} as const

export const FRAME = {
  'F-0': {
    color: '#eaeaea',
  },
  'F-1': {
    color: '#ede2d8',
  },
  'F-2': {
    color: '#ffd7e0',
  },
  'F-3': {
    color: '#ffdbfb',
  },
  'F-4': {
    color: '#fff7db',
  },
  'F-5': {
    color: '#e5ffdc',
  },
  'F-6': {
    color: '#c4f0e6',
  },
  'F-7': {
    color: '#dbf2ff',
  },
  'F-8': {
    color: '#e6daff',
  },
} as const

export const FONTS: Record<string, FontType> = {
  HESOM: {
    title: '해솜체',
    className: 'font-hesom',
  },
  EUNYOUNG: {
    title: '은영체',
    className: 'font-eunyoung',
  },
  TTAEROM: {
    title: '때롬체',
    className: 'font-ttaerom',
  },
  HIPI: {
    title: '바른히피체',
    className: 'font-hipi',
  },
}
