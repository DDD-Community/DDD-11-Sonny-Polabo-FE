'use client'

import CloseIcon from 'public/icons/close.svg'
import { useState } from 'react'
import AskBfCloseModal from '../modals/AskBfCloseModal'
import { usePolaroidModal } from './ModalContext'

const ArrowBack = () => {
  const [showAskBfCloseModal, setShowAskBfCloseModal] = useState<boolean>(false)
  const { closeModal } = usePolaroidModal()
  return (
    <>
      <CloseIcon
        className="cursor-pointer text-gray-0"
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
