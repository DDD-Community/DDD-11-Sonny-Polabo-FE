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
  options: {
    FONT: FontKeyType
    THEMA: ThemaKeyType
  }
}

export type FontKeyType = 'HESOM' | 'EUNYOUNG' | 'TTAEROM' | 'HIPI'

export interface FontType {
  title: string
  className: string
  gtm: string
}

export type ThemaKeyType =
  | 'F-0'
  | 'F-1'
  | 'F-2'
  | 'F-3'
  | 'F-4'
  | 'F-5'
  | 'F-6'
  | 'F-7'
  | 'F-8'
  | 'F-9'
  | 'F-10'
  | 'F-11'
  | 'F-12'
  | 'F-13'
  | 'F-14'
  | 'F-15'
  | 'F-16'
  | 'F-17'

export interface ThemaType {
  className: string
  descriptionStyle: string
}
