export interface Polaroid {
  id: number
  imageUrl: string
  oneLineMessage: string
  nickname: string
  options: {
    FONT: string
    THEMA: string
  }
}

export interface CreatePolaroidPayload {
  imageKey: string
  oneLineMessage: string
  nickname: string
  options: {
    FONT: string
    THEMA: string
  }
}

export type FontKeyType = 'HESOM' | 'EUNYOUNG' | 'TTAEROM' | 'HIPI'

export interface FontType {
  title: string
  className: string
}
