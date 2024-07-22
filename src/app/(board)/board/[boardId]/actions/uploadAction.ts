'use server'

import { getPreSignedUrl, postPolaroid, uploadImage } from '@/lib'

export const uploadAction = async (id: string, formData: FormData) => {
  const fileInput = formData.get('fileInput')
  const oneLineMessage = formData.get('oneLineMessage')

  // upload image to S3
  const { url, imageKey } = await getPreSignedUrl(id)
  await uploadImage({ url, file: fileInput as File })

  // upload polaroid
  const res = await postPolaroid(id, {
    imageKey,
    oneLineMessage: oneLineMessage as string,
  })
  return res
}
