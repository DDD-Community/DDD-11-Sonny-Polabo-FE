'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { getPolaroidNickname } from '@/lib/utils/polaroid'
import PolaroidMaker from '@/components/Polaroid/PolaroidMaker'
import { uploadAction } from '../../_actions/uploadAction'
import ArrowBack from './ArrowBack'
import { usePolaroidModal } from './ModalContext'
import UploadBtn from './UploadBtn'

interface CreatePolaroidProps {
  id: string
}

const CreatePolaroid = ({ id }: CreatePolaroidProps) => {
  const [isValid, setIsValid] = useState<boolean>(false)
  const [image, setImage] = useState<File | null>(null)
  const [nickname, setNickname] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const { closeModal } = usePolaroidModal()

  useEffect(() => {
    setIsValid(!!image)
  }, [image])

  const { data: session } = useSession()

  const submit = async () => {
    if (!isValid) {
      return
    }

    const formData = new FormData()
    formData.append('fileInput', image!)
    formData.append('oneLineMessage', message)
    formData.append('nickname', getPolaroidNickname(nickname, session))

    const res = await uploadAction(id, formData)

    if (res) {
      closeModal()
    }
  }

  return (
    <div className="w-md mx-auto flex h-dvh max-w-md flex-1 flex-col justify-between px-5 py-10">
      <ArrowBack />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <PolaroidMaker
          image={image}
          message={message}
          nickname={nickname}
          setImage={setImage}
          setMessage={setMessage}
          setNickname={setNickname}
        />
      </div>
      <UploadBtn submitForm={submit} btnDisabled={!isValid} />
    </div>
  )
}

export default CreatePolaroid
