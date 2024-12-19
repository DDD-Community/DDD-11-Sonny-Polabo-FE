import { SendRecentStickersPayload } from '@/types'
import { get, post } from './base'

export const postStickers = async (payload: SendRecentStickersPayload) => {
  const res = await post('/api/v1/stickers/use', {
    body: JSON.stringify(payload),
  })
  return res.data
}

export const getRecentStickers = async () => {
  const res = await get('/api/v1/stickers/recent-use')
  return res.data
}
