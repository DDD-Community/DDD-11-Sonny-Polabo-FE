import { Polaroid } from './polaroid'

export interface Board {
  title: string
  items: Polaroid[]
  mine: boolean
}

export interface CreateBoardPayload {
  title: string
  userId: string | null
}
