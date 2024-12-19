'use client'

import Modal from '@/components/Modal'
import StickerIcon from 'public/icons/sticker.svg'
import { ReactNode } from 'react'
import { useStickerModal } from '../_contexts/ModalContext'

interface OpenModalBtnProps {
  children: ReactNode
}

const OpenStickerModalBtn = ({ children }: OpenModalBtnProps) => {
  const { isOpen, openModal, closeModal } = useStickerModal()

  return (
    <div className="absolute right-4 z-10">
      <StickerIcon onClick={openModal} className="cursor-pointer" />
      <Modal isOpen={isOpen} onClose={closeModal} closeOnOutsideClick={false}>
        {children}
      </Modal>
    </div>
  )
}

export default OpenStickerModalBtn
