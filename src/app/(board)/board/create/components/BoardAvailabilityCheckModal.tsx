'use client'

import { useEffect, useState } from 'react'
import { getBoardAvailableCount } from '@/lib'
import Modal from '@/components/Modal'
import TwoPolaroidsIcon from 'public/icons/twopolaroids.svg'
import { useRouter } from 'next/navigation'

const BoardAvailabilityCheckModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    getBoardAvailableCount().then((availableBoardCount) => {
      setShowModal(availableBoardCount === 0)
    })
  }, [])

  const redirectToHome = () => {
    router.replace('/')
  }

  return (
    <Modal
      closeOnOutsideClick={false}
      isOpen={showModal}
      onClose={() => setShowModal(false)}
    >
      <Modal.CenterModal icon={<TwoPolaroidsIcon />}>
        <Modal.Title>
          {'오늘 만들 수 있는\n보드 수량이 마감되었어요'}
        </Modal.Title>
        <Modal.Content>내일 다시 만들어주세요!</Modal.Content>
        <Modal.CenterConfirm confirmText="확인" onConfirm={redirectToHome} />
      </Modal.CenterModal>
    </Modal>
  )
}

export default BoardAvailabilityCheckModal
