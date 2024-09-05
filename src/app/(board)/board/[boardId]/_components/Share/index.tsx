'use client'

import Modal from '@/components/Modal'
import CopyIcon from 'public/icons/copy.svg'
import DownloadIcon from 'public/icons/download.svg'
import Share from 'public/icons/ios_share.svg'
import TwoPolaroidsIcon from 'public/icons/linkShare.svg'
import FacebookIcon from 'public/icons/sns/sns-facebook.svg'
import IGIcon from 'public/icons/sns/sns-ig.svg'
import KakaoIcon from 'public/icons/sns/sns-kakao.svg'
import XIcon from 'public/icons/sns/sns-x.svg'
import { useState } from 'react'
import useSnsShare from '../../_hooks/useSnsShare'
import { useTutorial } from '../Tutorial/TutorialContext'
import Section from './Section'

const ShareBtn = () => {
  const [showShareModal, setShowShareModal] = useState<boolean>(false)
  const { shareToKakao, shareToInsta, shareToFacebook, shareToX } =
    useSnsShare()

  const { run, nextStep } = useTutorial()

  const onShareModalClose = () => {
    setShowShareModal(false)
    if (run) {
      nextStep()
    }
  }

  const handleShare = (shareFn: () => void) => {
    shareFn()
    setShowShareModal(false)
  }

  const copyLink = () => {
    const currentURL = window.location.href
    return navigator.clipboard.writeText(currentURL)
  }

  return (
    <>
      <Share onClick={() => setShowShareModal(true)} className="w-6" />

      <Modal isOpen={showShareModal} onClose={onShareModalClose}>
        <Modal.BottomModal icon={<TwoPolaroidsIcon className="scale-[2]" />}>
          <Modal.Close />
          <Modal.Title>보드를 친구에게 공유해보세요!</Modal.Title>
          <div className="mt-[21px] h-px w-full bg-gray-200" />
          <Section title="링크 공유">
            <Section.Item
              icon={<CopyIcon className="-rotate-45 scale-150" />}
              bg="bg-gray-900"
              desc="링크 복사"
              onClick={() => handleShare(copyLink)}
            />

            <Section.Item
              icon={<KakaoIcon />}
              bg="bg-kakao"
              desc="카카오톡"
              onClick={() => handleShare(shareToKakao)}
            />
            <Section.Item
              icon={<IGIcon />}
              bg="bg-[url('/icons/sns/sns-ig-bg.png')]"
              desc="인스타그램"
              onClick={() => handleShare(shareToInsta)}
            />
            <Section.Item
              icon={<XIcon />}
              bg="bg-[#000]"
              desc="X"
              onClick={() => handleShare(shareToX)}
            />
            <Section.Item
              icon={<FacebookIcon />}
              bg="bg-facebook"
              desc="페이스북"
              onClick={() => handleShare(shareToFacebook)}
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
