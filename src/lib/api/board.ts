import { Board, CreateBoardPayload } from '@/types'
import { get, post } from './base'

export const getBoard = async (id: string): Promise<Board> => {
  const res = await get(`/api/v1/boards/${id}`, {
    next: {
      tags: [`board:${id}`],
    },
  })

  // console.log(res.data[0])

  return res.data[0]
}

export const postBoard = async (
  payload: CreateBoardPayload,
): Promise<string> => {
  const res = await post('/api/v1/boards', {
    body: JSON.stringify(payload),
  })

  return res.data
}

export const getTotalBoards = async (): Promise<number> => {
  const res = await get('/api/v1/boards/total-count', {
    cache: 'no-cache',
  })

  return res.data
}

export const getBoardAvailableCount = async (): Promise<number> => {
  const res = await get('/api/v1/boards/create-available', {
    cache: 'no-cache',
  })

  return res.data
}
