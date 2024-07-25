'use server'

import { getPreSignedUrl, postPolaroid, uploadImage } from '@/lib'

export const uploadAction = async (id: string, formData: FormData) => {
  try {
    const fileInput = formData.get('fileInput')
    const oneLineMessage = formData.get('oneLineMessage')

    if (!fileInput || !(fileInput instanceof File)) {
      throw new Error('Invalid file input')
    }

    // upload image to S3
    const { url, imageKey } = await getPreSignedUrl(id)
    await uploadImage({ url, file: fileInput })
    // upload polaroid
    const res = await postPolaroid(id, {
      imageKey,
      oneLineMessage: oneLineMessage as string,
    })
    return res
  } catch (error) {
    console.error('Error in uploadAction:', error)
    throw new Error(`Failed to upload polaroid`)
  }
}
