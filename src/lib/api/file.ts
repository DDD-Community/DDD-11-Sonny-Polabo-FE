import { PreSignedUrl } from '@/types'
import { get, deleteApi } from './base'

export const getPreSignedUrl = async (
  boardId: string,
): Promise<PreSignedUrl> => {
  const result = await get(`/api/v1/file/pre-signed-url?fileKey=${boardId}`)

  return result.data
}

export const uploadImage = ({ url, file }: { url: string; file: File }) => {
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': file.type,
    },
    body: file,
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
