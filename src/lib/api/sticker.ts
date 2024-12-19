import { SendRecentStickersPayload } from '@/types'
import { get, post } from './base'

export const postStickers = async (payload: SendRecentStickersPayload) => {
  return post('/api/v1/stickers/use', {
    body: JSON.stringify(payload),
  })
}

export const getRecentStickers = async (): Promise<string[]> => {
  const res = await get('/api/v1/stickers/recent-use')
  return res.data
}
