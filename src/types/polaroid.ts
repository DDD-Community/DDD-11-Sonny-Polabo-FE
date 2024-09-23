export interface Polaroid {
  id: number
  imageUrl: string
  oneLineMessage: string
  nickname: string
  mine: boolean
  options: {
    FONT: FontKeyType
    THEMA: ThemaKeyType
  }
}

export interface CreatePolaroidPayload {
  imageKey: string
  oneLineMessage: string
  nickname: string
}

export type FontKeyType = 'HESOM' | 'EUNYOUNG' | 'TTAEROM' | 'HIPI'

export interface FontType {
  title: string
  className: string
}
