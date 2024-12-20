'use client'

import { useBoard } from '@/app/board/[boardId]/_contexts/BoardContext'
import { useSelect } from '@/app/board/[boardId]/_contexts/SelectModeContext'
import Modal from '@/components/Modal'
import { useSession } from 'next-auth/react'
import AddPolaroid from 'public/icons/add_polaroid.svg'
import { ReactNode } from 'react'
import { BoardTutorial } from '@/components/Tutorial'
import { useModal } from './CreatePolaroidModal/ModalContext'
import { Step2Tooltip } from './Tooltips'
import CannotUploadModal from './modals/CannotUploadModal'

interface OpenModalBtnProps {
  children: ReactNode
}

const OpenModalBtn = ({ children }: OpenModalBtnProps) => {
  const { data: session } = useSession()
  const { isOpen, openModal, closeModal } = useModal()
  const { board } = useBoard()
  const { isSelectMode } = useSelect()

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

  if (isSelectMode) {
    return null
  }

  return (
    <div>
      {isOpen && renderModalContent()}
      <div className="absolute bottom-10 right-4 cursor-pointer">
        <BoardTutorial
          step={session ? 2 : 1}
          tooltip={<Step2Tooltip />}
          hasNext={false}
        >
          <AddPolaroid onClick={openModal} />
        </BoardTutorial>
      </div>
    </div>
  )
}

export default OpenModalBtn
