'use client'

import CloseIcon from 'public/icons/close.svg'
import { useState } from 'react'
import AskBfCloseModal from '../modals/AskBfCloseModal'
import { useModal } from './ModalContext'

const ArrowBack = () => {
  const [showAskBfCloseModal, setShowAskBfCloseModal] = useState<boolean>(false)
  const { closeModal } = useModal()
  return (
    <>
      <CloseIcon
        className="absolute left-5 top-10 cursor-pointer text-gray-0"
        onClick={() => setShowAskBfCloseModal(true)}
      />
      <AskBfCloseModal
        isOpen={showAskBfCloseModal}
        onClose={() => setShowAskBfCloseModal(false)}
        onConfirm={closeModal}
      />
    </>
  )
}

export default ArrowBack
