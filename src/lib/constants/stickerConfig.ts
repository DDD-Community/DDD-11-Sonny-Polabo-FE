import { StickerMenu, StickerType } from '@/types'

export const STICKER_MENU: StickerMenu[] = [0, 1, 2, 3]
export const GUEST_STICKER_MENU: StickerMenu[] = [1, 2, 3]

export const STICKERS: Record<StickerMenu, StickerType> = {
  0: {
    gtm: 'recent',
  },
  1: {
    gtm: 'doodle',
  },
  2: {
    gtm: 'analog',
  },
  3: {
    gtm: 'polabo',
  },
}
