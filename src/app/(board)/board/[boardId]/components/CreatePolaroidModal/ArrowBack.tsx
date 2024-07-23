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
