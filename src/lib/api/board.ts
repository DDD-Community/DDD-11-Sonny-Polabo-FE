import { Board, CreateBoardPayload } from '@/types'
import { get } from './base'
import { authFetch } from './customFetch/authFetch'

export const getBoard = async (id: string): Promise<Board> => {
  const res = await get(`/api/v1/boards/${id}`, {
    next: {
      tags: [`board:${id}`],
    },
  })

  return res.data[0]
}

export const postBoard = async (
  payload: CreateBoardPayload,
): Promise<string> => {
  const res = await authFetch('/api/v1/boards', {
    method: 'POST',
    body: JSON.stringify(payload),
  })

  return res.data
}

export const getTotalBoards = async (): Promise<number> => {
  const res = await get('/api/v1/boards/total-count', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  return res.data
}

export const getBoardAvailableCount = async (): Promise<number> => {
  const res = await get('/api/v1/boards/create-available', {
    cache: 'no-cache',
  })

  return res.data
}
