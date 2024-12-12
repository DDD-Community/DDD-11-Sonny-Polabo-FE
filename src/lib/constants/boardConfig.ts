import { BoardThemaKeyType, BoardThemaType } from '@/types'

export const BOARDTHEMAS: Record<BoardThemaKeyType, BoardThemaType> = {
  'B-0': {
    title: '기본 테마',
    theme: 'LIGHT',
  },
  'B-1': {
    title: '밝은 테마',
    theme: 'LIGHT',
  },
  'B-2': {
    title: '수능 테마',
    theme: 'LIGHT',
  },
  'B-3': {
    title: '코르크판 테마',
    theme: 'LIGHT',
  },
  'B-4': {
    title: '크리스마스 테마',
    theme: 'DARK',
  },
  'B-5': {
    title: '크리스마스 트리 테마',
    theme: 'DARK',
  },
  'B-6': {
    title: '어두운 테마',
    theme: 'DARK',
  },
}
