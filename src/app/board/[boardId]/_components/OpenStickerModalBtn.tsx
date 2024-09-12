'use client'

import AddSticker from 'public/icons/add_sticker.svg'
import { ReactNode } from 'react'
import Modal from '@/components/Modal'
import { useStickerModal } from './StickerModal/ModalContext'

interface OpenModalBtnProps {
  children: ReactNode
}

const OpenStickerModalBtn = ({ children }: OpenModalBtnProps) => {
  const { isOpen, openModal, closeModal } = useStickerModal()

  return (
    <div>
      <AddSticker onClick={openModal} className="cursor-pointer" />

      <Modal isOpen={isOpen} onClose={closeModal} closeOnOutsideClick={false}>
        {children}
      </Modal>
    </div>
  )
}

export default OpenStickerModalBtn
