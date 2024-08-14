'use client'

import Modal from '@/components/Modal'
import AddPolaroid from 'public/icons/add_polaroid.svg'
import { ReactNode } from 'react'
import { useModal } from './CreatePolaroidModal/ModalContext'
import CannotUploadModal from './modals/CannotUploadModal'
import Tutorial from './Tutorial'

interface OpenModalBtnProps {
  polaroidNum: number
  children: ReactNode
}

const OpenModalBtn = ({ polaroidNum, children }: OpenModalBtnProps) => {
  const { isOpen, openModal, closeModal } = useModal()

  const renderModalContent = () => {
    if (polaroidNum > 50) {
      return <CannotUploadModal isOpen={isOpen} onClose={closeModal} />
    }
    return (
      <Modal isOpen={isOpen} onClose={closeModal} closeOnOutsideClick={false}>
        {children}
      </Modal>
    )
  }

  return (
    <div>
      {isOpen && renderModalContent()}
      <div className="absolute bottom-10 right-4">
        <Tutorial step={2}>
          <AddPolaroid onClick={openModal} />
        </Tutorial>
      </div>
    </div>
  )
}

export default OpenModalBtn
