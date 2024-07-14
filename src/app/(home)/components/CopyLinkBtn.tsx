'use client'

import LinkIcon from 'public/icons/linkcopy.svg'
import TwoPolaroidsIcon from 'public/icons/twopolaroids.svg'
import Modal from '@/components/Modal'
import { useState } from 'react'

const CopyLinkBtn = () => {
  const [showLinkCopyModal, setShowLinkCopyModal] = useState(false)

  const closeModal = () => setShowLinkCopyModal(false)

  const copyLink = () => {
    const currentURL = window.location.href
    return navigator.clipboard.writeText(currentURL).then(() => {
      setShowLinkCopyModal(true)
    })
  }

  return (
    <>
      <div className="text-center text-gray-400 text-xxs leading-3 mb-1">
        copy link!
      </div>
      <button
        type="button"
        className="p-3 bg-gray-200 rounded-[30px]"
        aria-label="copy link"
        onClick={copyLink}
      >
        <LinkIcon />
      </button>
      {showLinkCopyModal && (
        <Modal isOpen={showLinkCopyModal} onClose={closeModal}>
          <Modal.CenterModal icon={<TwoPolaroidsIcon />}>
            <Modal.Body>
              <Modal.BodyTitle>링크가 복사되었습니다!</Modal.BodyTitle>
              <Modal.BodyContent>
                {'POLABO를\n 지인들에게도 알려주세요!'}
              </Modal.BodyContent>
            </Modal.Body>
            <Modal.Footer>
              <Modal.FooterConfirm confirmText="확인" />
            </Modal.Footer>
          </Modal.CenterModal>
        </Modal>
      )}
    </>
  )
}

export default CopyLinkBtn