export type StickerMenu = 0 | 1 | 2 | 3

export interface SendRecentStickersPayload {
  stickerIds: string[]
  boardId: string
}

export interface StickerStyle {
  width: string
  height: string
  x: string
  y: string
  angle: string
  file: string
}
