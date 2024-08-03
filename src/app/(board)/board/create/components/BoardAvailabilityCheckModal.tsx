'use client'

import { useCallback, useEffect, useState } from 'react'
import { getBoardAvailableCount } from '@/lib'
import Modal from '@/components/Modal'
import TwoPolaroidsIcon from 'public/icons/twopolaroids.svg'
import { useRouter } from 'next/navigation'

const BoardAvailabilityCheckModal = () => {
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const checkBoardAvailability = async () => {
      try {
        const availableCount = await getBoardAvailableCount()
        setShowModal(availableCount === 0)
      } catch (e) {
        console.error('Failed to fetch board availability count', e)
      }
    }

    checkBoardAvailability()
  }, [])

  const redirectToHome = useCallback(() => {
    router.replace('/')
  }, [router])

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
