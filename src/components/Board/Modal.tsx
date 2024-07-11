'use client'

import ArrowBack from 'public/icons/arrow_back_ios.svg'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button'
import PolaroidMaker from '../Polaroid/PolaroidMaker'

interface ModalProps {
  setModalOpen: (open: boolean) => void
}

const CreatePolaroidModal = ({ setModalOpen }: ModalProps) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)

  const uploadHandler = () => {
    console.log('upload')
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-950 bg-opacity-60">
      <div className="max-w-md mx-auto min-h-screen px-5 py-10 flex flex-col justify-between">
        <ArrowBack
          className="text-gray-0"
          onClick={() => setModalOpen(false)}
        />

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <PolaroidMaker setButtonDisabled={setButtonDisabled} />
        </div>
        <div className="px-5">
          <Button
            onClick={uploadHandler}
            size="lg"
            className="w-full"
            disabled={buttonDisabled}
          >
            업로드하기
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  )
}

export default CreatePolaroidModal
