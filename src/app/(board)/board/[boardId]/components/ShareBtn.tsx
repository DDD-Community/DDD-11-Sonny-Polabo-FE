'use client'

import Modal from '@/components/Modal'
import Share from 'public/icons/ios_share.svg'
import TwoPolaroidsIcon from 'public/icons/twopolaroids.svg'
import { useState } from 'react'
import CopyIcon from 'public/icons/copy.svg'

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
            <Modal.Title>보드를 친구에게 공유해보세요!</Modal.Title>
            <Modal.Content>{currentURL}</Modal.Content>

            <Modal.CenterConfirm
              confirmText={
                <>
                  <CopyIcon />
                  복사하기
                </>
              }
              onConfirm={copyLink}
            />
          </Modal.CenterModal>
        </Modal>
      )}
    </>
  )
}

export default ShareBtn
