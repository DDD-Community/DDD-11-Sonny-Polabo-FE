import React from 'react'
import Modal from '@/components/Modal'
import TwoPolaroidsIcon from 'public/icons/twopolaroids.svg'

interface LinkCopiedModalProps {
  isOpen: boolean
  onClose: () => void
}

const LinkCopiedModal = ({
  isOpen,
  onClose: handleCloseModal,
}: LinkCopiedModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <Modal.CenterModal icon={<TwoPolaroidsIcon />}>
        <Modal.Title>링크가 복사되었습니다!</Modal.Title>
        <Modal.Content>{'POLABO를\n 지인들에게도 알려주세요!'}</Modal.Content>
        <Modal.CenterConfirm confirmText="확인" />
      </Modal.CenterModal>
    </Modal>
  )
}

export default LinkCopiedModal
