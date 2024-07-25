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
  const [compressedFile, setCompressedFile] = useState<File | null>(null)

  return (
    <div className="mx-auto flex h-dvh max-w-md flex-1 flex-col justify-between px-5 py-10">
      <ArrowBack />
      <form
        action={async (formData) => {
          if (compressedFile) {
            formData.set('fileInput', compressedFile)
          }

          const res = await uploadAction(id, formData)
          if (res) {
            closeModal()
          }
        }}
        ref={formRef}
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <PolaroidMaker
            setBtnDisabled={setBtnDisabled}
            setCompressedFile={setCompressedFile}
          />
        </div>
        <UploadBtn formRef={formRef} btnDisabled={btnDisabled} />
      </form>
    </div>
  )
}

export default CreatePolaroid
