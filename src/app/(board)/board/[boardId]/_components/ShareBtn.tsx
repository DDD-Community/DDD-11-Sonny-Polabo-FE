'use client'

import Modal from '@/components/Modal'
import CopyIcon from 'public/icons/copy.svg'
import Share from 'public/icons/ios_share.svg'
import TwoPolaroidsIcon from 'public/icons/linkShare.svg'
import { useEffect, useState } from 'react'
import DownloadIcon from 'public/icons/download.svg'
import KakaoIcon from 'public/icons/sns/sns-kakao.svg'
import IGIcon from 'public/icons/sns/sns-ig.svg'
import XIcon from 'public/icons/sns/sns-x.svg'
import FacebookIcon from 'public/icons/sns/sns-facebook.svg'
import Section from './Share/Section'
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
        <Modal.BottomModal icon={<TwoPolaroidsIcon className="scale-[2]" />}>
          <Modal.Close />
          <Modal.Title>보드를 친구에게 공유해보세요!</Modal.Title>

          <div className="mt-[21px] h-px w-full bg-gray-200" />

          <Section title="링크 공유">
            <Section.Item
              icon={<CopyIcon className="-rotate-45" />}
              bg="bg-gray-900"
              desc="링크 복사"
              onClick={copyLink}
            />
            <Section.Item icon={<KakaoIcon />} bg="bg-kakao" desc="카카오톡" />
            <Section.Item
              icon={<IGIcon />}
              bg="bg-[url('/icons/sns/sns-ig-bg.png')]"
              desc="인스타그램"
            />
            <Section.Item icon={<XIcon />} bg="bg-[#000]" desc="X" />
            <Section.Item
              icon={<FacebookIcon />}
              bg="bg-facebook"
              desc="페이스북"
            />
          </Section>
          <Section title="보드 이미지 저장">
            <Section.Item icon={<DownloadIcon />} bg="bg-gray-200" />
          </Section>
        </Modal.BottomModal>
      </Modal>
    </>
  )
}

export default ShareBtn
