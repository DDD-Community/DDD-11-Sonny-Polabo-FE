import { PreSignedUrl } from '@/types'
import { get, deleteApi } from './base'

export const getPreSignedUrl = async (
  boardId: string,
): Promise<PreSignedUrl> => {
  const response = await fetch(
    `${process.env.API_HOST}/api/v1/file/pre-signed-url?fileKey=${boardId}`,
  )
  if (!response.ok) {
    throw new Error('Failed to get pre-signed URL')
  }
  const result = await response.json()
  return result.data
}

export const getImageUrl = (imageKey: string): Promise<string> => {
  return get(`/api/v1/file/image-url?imageKey=${imageKey}`)
}

export const deleteImage = (imageKey: string) => {
  return deleteApi('/api/v1/file/uploaded-image', {
    body: JSON.stringify({ imageKey }),
  })
}
