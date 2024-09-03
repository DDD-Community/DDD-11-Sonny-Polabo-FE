'use server'

import { revalidateTag } from 'next/cache'
import { CreatePolaroidPayload, Polaroid } from '@/types'
import { get, post } from './base'

export const getPolaroid = (id: string): Promise<Polaroid> => {
  return get(`/api/v1/polaroids/${id}`, {
    next: {
      tags: [`polaroid:${id}`],
    },
  })
}

export const postPolaroid = async (
  boardId: string,
  body: CreatePolaroidPayload,
): Promise<number> => {
  const result = await post(`/api/v2/boards/${boardId}/polaroids`, {
    body: JSON.stringify(body),
  })

  revalidateTag(`board:${boardId}`)

  return result.data
}
