'use client'

import PolaroidMaker from '@/components/Polaroid/PolaroidMaker'
import { useRef, useState } from 'react'
import { uploadAction } from '../../actions/uploadAction'
import ArrowBack from './ArrowBack'
import { useModal } from './ModalContext'
import UploadBtn from './UploadBtn'

interface CreatePolaroidProps {
  id: string
}

const CreatePolaroid = ({ id }: CreatePolaroidProps) => {
  const formRef = useRef<HTMLFormElement>(null)
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true)
  const { closeModal } = useModal()

  return (
    <div className="max-w-md mx-auto h-dvh px-5 py-10 flex flex-col justify-between flex-1">
      <ArrowBack />
      <form
        action={async (formData) => {
          const res = await uploadAction(id, formData)
          if (res) {
            closeModal()
          }
        }}
        ref={formRef}
      >
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <PolaroidMaker setBtnDisabled={setBtnDisabled} />
        </div>
        <UploadBtn formRef={formRef} btnDisabled={btnDisabled} />
      </form>
    </div>
  )
}

export default CreatePolaroid
