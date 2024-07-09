import { Polaroid } from './polaroid'

export interface Board {
  title: string
  items: Polaroid[]
}

export interface CreateBoardPayload {
  title: string
  userId: string
}
