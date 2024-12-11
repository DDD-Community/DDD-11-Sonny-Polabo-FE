import { FontKeyType, FontType, ThemaKeyType, ThemaType } from '@/types'

export const FILTERS = {
  NORMAL: 'none',
  POLAROID: 'sepia(0.2) contrast(1.0) brightness(1) saturate(1.2) blur(0px)',
  VINTAGE:
    'sepia(0.4) contrast(1.1) brightness(0.9) saturate(0.8) hue-rotate(-20deg) blur(0.6px)',
} as const

export const THEMAS: Record<ThemaKeyType, ThemaType> = {
  'F-0': {
    className: 'bg-[#eaeaea]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #eaeaea',
  },
  'F-1': {
    className: 'bg-[#ede2d8]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #ede2d8',
  },
  'F-2': {
    className: 'bg-[#ffd7e0]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #ffd7e0',
  },
  'F-3': {
    className: 'bg-[#ffdbfb]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #ffdbfb',
  },
  'F-4': {
    className: 'bg-[#fff7db]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #fff7db',
  },
  'F-5': {
    className: 'bg-[#e5ffdc]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #e5ffdc',
  },
  'F-6': {
    className: 'bg-[#c4f0e6]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #c4f0e6',
  },
  'F-7': {
    className: 'bg-[#dbf2ff]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #dbf2ff',
  },
  'F-8': {
    className: 'bg-[#e6daff]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #e6daff',
  },
  'F-9': {
    className: 'bg-[#FFFEF2]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, #FAF0FE 0%, #F1CFFF 100%)',
  },
  'F-10': {
    className: 'bg-[#FFFEF2]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, #FFF9EA 0%, #FFDE83 100%)',
  },
  'F-11': {
    className: 'bg-[#FFFEF2]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, #FFE7F0 0%, #FFAECD 100%)',
  },
  'F-12': {
    className: 'bg-[#FFFEF2]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, #E0E0E0 0%, #58957E 100%)',
  },
  'F-13': {
    className: 'bg-[#FFFEF2]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 10.71%, rgba(255, 255, 255, 0.15) 57.96%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, #E0E0E0 0%, #FF71B1 100%)',
  },
  'F-14': {
    className: 'bg-[#FFFEF2]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 10.71%, rgba(255, 255, 255, 0.15) 57.96%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, #A90400 0%, #A90400 100%)',
  },
  'F-15': {
    className: 'bg-[#000000]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 10.71%, rgba(255, 255, 255, 0.15) 57.96%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, #A90400 0%, #A90400 100%)',
  },
  'F-16': {
    className: 'bg-[#FFFEF2]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 10.71%, rgba(255, 255, 255, 0.15) 57.96%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, #AF0301 0%, #AF0301 100%)',
  },
  'F-17': {
    className: 'bg-[#FFFEF2]',
    descriptionStyle:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.06) 10.71%, rgba(255, 255, 255, 0.15) 57.96%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, #AF0301 0%, #AF0301 100%)',
  },
} as const

export const FONTS: Record<FontKeyType, FontType> = {
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
