import { revalidateTag } from 'next/cache'
import { CreatePolaroidPayload, Polaroid } from '@/types/polaroid'
import { get, post } from './base'

export const getPolaroid = (id: string): Promise<Polaroid> => {
  return get(`/polaroids/${id}`, {
    next: {
      tags: [`polaroid:${id}`],
    },
  })
}

export const postPolaroid = async (
  body: CreatePolaroidPayload,
): Promise<Polaroid> => {
  const result: Polaroid = await post('/polaroids', {
    body: JSON.stringify(body),
  })

  revalidateTag(`board:${body.boardId}`)

  return result
}
