import { Polaroid } from './polaroid'

export interface Board {
  title: string
  items: Polaroid[]
  mine: boolean
  options: {
    THEMA: BoardThemaKeyType
  }
}

export interface CreateBoardPayload {
  title: string
  userId: string | null
  options: {
    THEMA: BoardThemaKeyType
  }
}

export type BoardThemaKeyType =
  | 'B-0'
  | 'B-1'
  | 'B-2'
  | 'B-3'
  | 'B-4'
  | 'B-5'
  | 'B-6'
  | 'B-7'
  | 'B-8'
  | 'B-9'

export interface BoardThemaType {
  title: string
  theme: 'LIGHT' | 'DARK'
  gtm: string
}
