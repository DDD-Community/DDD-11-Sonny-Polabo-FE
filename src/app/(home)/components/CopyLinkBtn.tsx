'use client'

import LinkIcon from 'public/icons/linkcopy.svg'
import TwoPolaroidsIcon from 'public/icons/twopolaroids.svg'
import Modal from '@/components/Modal'
import { useCallback, useState } from 'react'

const CopyLinkBtn = () => {
  const [showLinkCopyModal, setShowLinkCopyModal] = useState(false)

  const closeModal = useCallback(() => setShowLinkCopyModal(false), [])

  const copyLink = useCallback(async () => {
    try {
      const currentURL = window.location.href
      await navigator.clipboard.writeText(currentURL)
      setShowLinkCopyModal(true)
    } catch (error) {
      console.log('Failed to copy link:', error)
    }
  }, [])

  return (
    <>
      <div className="mb-1 text-center text-xxs leading-3 text-gray-700">
        copy link!
      </div>
      <button
        type="button"
        className="rounded-[30px] bg-gray-100 p-3 shadow-[0_4px_8px_0_rgba(0,0,0,0.15)]"
        aria-label="copy link"
        onClick={copyLink}
      >
        <LinkIcon />
      </button>
      <Modal isOpen={showLinkCopyModal} onClose={closeModal}>
        <Modal.CenterModal icon={<TwoPolaroidsIcon />}>
          <Modal.Title>링크가 복사되었습니다!</Modal.Title>
          <Modal.Content>{'POLABO를\n 지인들에게도 알려주세요!'}</Modal.Content>
          <Modal.CenterConfirm confirmText="확인" />
        </Modal.CenterModal>
      </Modal>
    </>
  )
}

export default CopyLinkBtn
