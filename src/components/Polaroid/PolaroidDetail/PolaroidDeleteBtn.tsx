'use client'

import Modal from '@/components/Modal'
import Icon from 'public/icons/polaroid_fire.svg'
import TrashIcon from 'public/icons/trash.svg'
import { useState } from 'react'

interface PolaroidDeleteBtnProps {
  detailModalClose: () => void
  onDelete: () => void
}

const PolaroidDeleteBtn = ({
  detailModalClose,
  onDelete,
}: PolaroidDeleteBtnProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)

  const handleDelete = () => {
    onDelete() // delete polaroid
    setShowDeleteModal(false) // close delete modal
    detailModalClose() // close polaroid detail modal
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowDeleteModal(true)}
        className="mx-auto rounded-full bg-gray-800 p-2.5"
        aria-label="Delete"
      >
        <TrashIcon className="cursor-pointer text-gray-0" />
      </button>
      <Modal isOpen={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <Modal.CenterModal icon={<Icon />}>
          <Modal.Close />
          <Modal.Title>정말로 삭제하시겠습니까?</Modal.Title>
          <Modal.Content>삭제된 폴라로이드는 되돌릴 수 없어요.</Modal.Content>
          <Modal.CenterConfirmCancel
            cancelText="아니요"
            confirmText="예"
            onConfirm={handleDelete}
          />
        </Modal.CenterModal>
      </Modal>
    </>
  )
}

export default PolaroidDeleteBtn
