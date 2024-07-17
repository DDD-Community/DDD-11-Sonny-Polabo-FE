'use client'

import Modal from '@/components/Modal'
import Share from 'public/icons/ios_share.svg'
import TwoPolaroidsIcon from 'public/icons/twopolaroids.svg'
import { useState } from 'react'

const ShareBtn = () => {
  const [showShareModal, setShowShareModal] = useState<boolean>(false)

  let currentURL = ''
  if (typeof window !== 'undefined') {
    currentURL = window.location.href
  }

  const copyLink = () => {
    return navigator.clipboard.writeText(currentURL).then(() => {
      setShowShareModal(false)
    })
  }

  return (
    <>
      <Share onClick={() => setShowShareModal(true)} className="w-6" />
      {showShareModal && (
        <Modal isOpen={showShareModal} onClose={() => setShowShareModal(false)}>
          <Modal.CenterModal icon={<TwoPolaroidsIcon />}>
            <Modal.Body>
              <Modal.BodyTitle>보드를 친구에게 공유해보세요!</Modal.BodyTitle>
              <Modal.BodyContent>{currentURL}</Modal.BodyContent>
            </Modal.Body>
            <Modal.Footer>
              <Modal.FooterConfirm
                confirmText="복사하기"
                onConfirm={copyLink}
              />
            </Modal.Footer>
          </Modal.CenterModal>
        </Modal>
      )}
    </>
  )
}

export default ShareBtn
