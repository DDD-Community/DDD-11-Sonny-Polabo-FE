'use client'

import Modal from '@/components/Modal'
import CopyIcon from 'public/icons/copy.svg'
import Share from 'public/icons/ios_share.svg'
import TwoPolaroidsIcon from 'public/icons/twopolaroids.svg'
import { useEffect, useState } from 'react'
import { useTutorial } from './Tutorial/TutorialContext'

const ShareBtn = () => {
  const [showShareModal, setShowShareModal] = useState<boolean>(false)
  const [currentURL, setCurrentURL] = useState<string>('')

  useEffect(() => {
    setCurrentURL(window.location.href)
  }, [])

  const copyLink = () => {
    return navigator.clipboard.writeText(currentURL)
  }

  const { run, nextStep } = useTutorial()
  const handleClose = () => {
    setShowShareModal(false)
    if (run) {
      nextStep()
    }
  }

  return (
    <>
      <Share onClick={() => setShowShareModal(true)} className="w-6" />

      <Modal isOpen={showShareModal} onClose={handleClose}>
        <Modal.CenterModal icon={<TwoPolaroidsIcon />}>
          <Modal.Close />
          <Modal.Title>보드를 친구에게 공유해보세요!</Modal.Title>
          <Modal.Content>
            <div className="truncate">{currentURL}</div>
          </Modal.Content>

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
    </>
  )
}

export default ShareBtn
