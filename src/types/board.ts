import { Polaroid } from './polaroid'

export interface Board {
  title: string
  items: Polaroid[]
  mine: boolean
}

export interface CreateBoardPayload {
  title: string
  userId: string | null
  options: {
    THEMA: BoardThemaKeyType
  }
}

export type BoardThemaKeyType = 'B-0' | 'B-1' | 'B-2' | 'B-3'
