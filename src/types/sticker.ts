export type StickerMenu = 0 | 1 | 2 | 3

export interface SendRecentStickersPayload {
  stickerIds: string[]
  boardId: string
}
