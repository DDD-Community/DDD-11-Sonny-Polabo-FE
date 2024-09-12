'use client'

import CloseIcon from 'public/icons/arrow_back_ios.svg'
import { useStickerModal } from './ModalContext'

const CreateSticker = () => {
  const { closeModal } = useStickerModal()
  return (
    <div className="w-md mx-auto flex h-dvh max-w-md flex-1 flex-col justify-between bg-gray-1000/70 px-5 py-10 backdrop-blur-md">
      <header className="flex h-16 w-full justify-between">
        <CloseIcon
          onClick={closeModal}
          className="cursor-pointer text-gray-0"
        />
        <div className="text-md font-semiBold leading-6 text-gray-0">
          스티커
        </div>
        <div className="w-6" />
      </header>
    </div>
  )
}

export default CreateSticker
