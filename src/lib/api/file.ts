import { PreSignedUrl } from '@/types'
import { get, deleteApi } from './base'

export const getPreSignedUrl = (boardId: string): Promise<PreSignedUrl> => {
  return get(`/api/v1/file/pre-signed-url?fileKey=${boardId}`, {
    next: {
      tags: [`preSignedUrl:${boardId}`],
    },
  })
}

export const getImageUrl = (imageKey: string): Promise<string> => {
  return get(`/api/v1/file/image-url?imageKey=${imageKey}`)
}

export const deleteImage = (imageKey: string) => {
  return deleteApi('/api/v1/file/uploaded-image', {
    body: JSON.stringify({ imageKey }),
  })
}
