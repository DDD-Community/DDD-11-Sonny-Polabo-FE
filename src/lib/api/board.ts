import { Board, CreateBoardPayload } from '@/types'
import { get, post } from './base'

export const getBoard = (id: string): Promise<Board> => {
  return get(
    `/boards/${id}`,
    {
      next: {
        tags: [`board:${id}`],
      },
    },
    true,
  )
}

export const postBoard = (payload: CreateBoardPayload): Promise<Board> => {
  return post(
    '/boards',
    {
      body: JSON.stringify(payload),
    },
    true,
  )
}
