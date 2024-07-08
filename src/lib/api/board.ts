import { Board, CreateBoardPayload } from '@/types'
import { get, post } from './base'

export const getBoard = (id: string): Promise<Board> => {
  return get(`/api/v1/boards/${id}`, {
    next: {
      tags: [`board:${id}`],
    },
  })
}

export const postBoard = (payload: CreateBoardPayload): Promise<string> => {
  return post('/api/v1/boards', {
    body: JSON.stringify(payload),
  })
}

export const getTotalBoards = (): Promise<string> => {
  return get('/api/v1/boards/total-count', {
    next: {
      tags: ['totalBoards'],
    },
  })
}
