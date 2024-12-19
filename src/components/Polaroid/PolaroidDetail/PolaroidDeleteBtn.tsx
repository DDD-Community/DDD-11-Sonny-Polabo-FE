'use client'

import Modal from '@/components/Modal'
import { GTM_EVENT } from '@/lib'
import { sendGTMEvent } from '@next/third-parties/google'
import Icon from 'public/icons/polaroid_fire.svg'
import TrashIcon from 'public/icons/trash.svg'
import { useState } from 'react'

interface PolaroidDeleteBtnProps {
  onDetailModalClose: () => void
  onDelete: () => void
}

const PolaroidDeleteBtn = ({
  onDetailModalClose,
  onDelete,
}: PolaroidDeleteBtnProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false)

  const handleDelete = () => {
    sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_DELETE_POLAROID })
    onDelete() // delete polaroid
    setShowDeleteModal(false) // close delete modal
    onDetailModalClose() // close polaroid detail modal
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
