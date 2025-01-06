'use client'

import Modal from '@/components/Modal'
import { DecorateTutorial, useDecorateTutorial } from '@/components/Tutorial'
import StickerIcon from 'public/icons/sticker.svg'
import { ReactNode } from 'react'
import { useStickerModal } from '../_contexts/ModalContext'
import { Step1Tooltip } from './Tooltips'

interface OpenModalBtnProps {
  children: ReactNode
}

const OpenStickerModalBtn = ({ children }: OpenModalBtnProps) => {
  const { isOpen, openModal, closeModal } = useStickerModal()

  const { run, nextStep } = useDecorateTutorial()

  const openStickerModal = () => {
    openModal()
    if (run) nextStep()
  }

  return (
    <div className="absolute right-7 top-14 z-10">
      <DecorateTutorial step={1} tooltip={<Step1Tooltip />} hasNext>
        <StickerIcon onClick={openStickerModal} className="cursor-pointer" />
      </DecorateTutorial>
      <Modal isOpen={isOpen} onClose={closeModal} closeOnOutsideClick={false}>
        {children}
      </Modal>
    </div>
  )
}

export default OpenStickerModalBtn
