'use client'

import Modal from '@/components/Modal'
import { useSession } from 'next-auth/react'
import AddPolaroid from 'public/icons/add_polaroid.svg'
import { ReactNode } from 'react'
import { useModal } from './CreatePolaroidModal/ModalContext'
import CannotUploadModal from './modals/CannotUploadModal'
import Tutorial from './Tutorial'
import { Step2Tooltip } from './Tutorial/Tooltips'

interface OpenModalBtnProps {
  polaroidNum: number
  children: ReactNode
}

const OpenModalBtn = ({ polaroidNum, children }: OpenModalBtnProps) => {
  const { data: session } = useSession()
  const { isOpen, openModal, closeModal } = useModal()

  const renderModalContent = () => {
    if (polaroidNum >= 30) {
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
      <div className="absolute bottom-10 right-4 cursor-pointer">
        <Tutorial
          step={session ? 2 : 1}
          tooltip={<Step2Tooltip />}
          hasNext={false}
        >
          <AddPolaroid onClick={openModal} />
        </Tutorial>
      </div>
    </div>
  )
}

export default OpenModalBtn
