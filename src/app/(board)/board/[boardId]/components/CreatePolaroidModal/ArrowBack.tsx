'use client'

import ArrowBackIcon from 'public/icons/arrow_back_ios.svg'
import { useState } from 'react'
import AskBfCloseModal from '../modals/AskBfCloseModal'
import { useModal } from './ModalContext'

const ArrowBack = () => {
  const [showAskBfCloseModal, setShowAskBfCloseModal] = useState<boolean>(false)
  const { closeModal } = useModal()
  return (
    <>
      <ArrowBackIcon
        className="text-gray-0 cursor-pointer"
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
