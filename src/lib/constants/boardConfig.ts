import { BoardThemaKeyType, BoardThemaType } from '@/types'

export const ORDERED_BOARDTHEMAS: BoardThemaKeyType[] = [
  'B-8',
  'B-9',
  'B-4',
  'B-5',
  'B-7',
  'B-3',
  'B-2',
  'B-1',
  'B-6',
  'B-0',
]

export const BOARDTHEMAS: Record<BoardThemaKeyType, BoardThemaType> = {
  'B-0': {
    title: '기본 테마',
    theme: 'LIGHT',
    gtm: 'default',
  },
  'B-1': {
    title: '밝은 테마',
    theme: 'LIGHT',
    gtm: 'light',
  },
  'B-2': {
    title: '학교 테마',
    theme: 'LIGHT',
    gtm: 'school',
  },
  'B-3': {
    title: '코르크판 테마',
    theme: 'LIGHT',
    gtm: 'corkboard',
  },
  'B-4': {
    title: '크리스마스 테마',
    theme: 'DARK',
    gtm: 'xmas',
  },
  'B-5': {
    title: '크리스마스 트리 테마',
    theme: 'DARK',
    gtm: 'xmastree',
  },
  'B-6': {
    title: '어두운 테마',
    theme: 'DARK',
    gtm: 'dark',
  },
  'B-7': {
    title: '눈송이 테마',
    theme: 'LIGHT',
    gtm: 'snow',
  },
  'B-8': {
    title: '새해 폭죽',
    theme: 'LIGHT',
    gtm: 'snow',
  },
  'B-9': {
    title: '새해 부적',
    theme: 'LIGHT',
    gtm: 'snow',
  },
} as const
