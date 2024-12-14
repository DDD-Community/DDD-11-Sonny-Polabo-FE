'use client'

import Modal from '@/components/Modal'
import { useSession } from 'next-auth/react'
import AddPolaroid from 'public/icons/add_polaroid.svg'
import { ReactNode } from 'react'
import { useBoardContext } from '@/app/board/[boardId]/_contexts/BoardContext'
import { useModal } from './CreatePolaroidModal/ModalContext'
import CannotUploadModal from './modals/CannotUploadModal'
import Tutorial from './Tutorial'
import { Step2Tooltip } from './Tutorial/Tooltips'

interface OpenModalBtnProps {
  children: ReactNode
}

const OpenModalBtn = ({ children }: OpenModalBtnProps) => {
  const { data: session } = useSession()
  const { isOpen, openModal, closeModal } = useModal()
  const { board } = useBoardContext()

  const renderModalContent = () => {
    if (board?.items.length >= 30) {
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
