'use client'

import Modal from '@/components/Modal'
import CopyIcon from 'public/icons/copy.svg'
import Share from 'public/icons/ios_share.svg'
import TwoPolaroidsIcon from 'public/icons/linkShare.svg'
import FacebookIcon from 'public/icons/sns/sns-facebook.svg'
import IGIcon from 'public/icons/sns/sns-ig.svg'
import KakaoIcon from 'public/icons/sns/sns-kakao.svg'
import XIcon from 'public/icons/sns/sns-x.svg'
import { useState } from 'react'
import { sendGTMEvent } from '@next/third-parties/google'
import { GTM_EVENT } from '@/lib'
import { SnsKeyType } from '@/types'
import { SNS } from '@/lib/constants/snsConfig'
import Toast from '@/components/Toast'
import { useTutorial } from '../Tutorial/TutorialContext'
import Section from './Section'
import useSnsShare from '../../_hooks/useSnsShare'

const ShareBtn = ({ boardName }: { boardName: string }) => {
  const [showShareModal, setShowShareModal] = useState<boolean>(false)
  const { shareToKakao, shareToInsta, shareToFacebook, shareToX } =
    useSnsShare()

  const { run, nextStep } = useTutorial()

  const onShareModalClose = () => {
    setShowShareModal(false)
    if (run) nextStep()
  }

  const handleShare = (snsType: SnsKeyType) => {
    sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_SHARE_SNS(snsType) })

    switch (snsType) {
      case 'KAKAO':
        shareToKakao(boardName)
        break
      case 'INSTAGRAM':
        shareToInsta()
        break
      case 'X':
        shareToX()
        break
      case 'FACEBOOK':
        shareToFacebook()
        break
      default:
        break
    }

    setShowShareModal(false)
  }

  const [showToast, setShowToast] = useState(false)

  const copyLink = () => {
    sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_COPYLINK_BOARD })
    setShowShareModal(false)
    const currentURL = window.location.href
    return navigator.clipboard.writeText(currentURL).then(() => {
      setShowToast(true)
    })
  }

  return (
    <>
      <Share
        onClick={() => {
          sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_SHARE })
          setShowShareModal(true)
        }}
        className="w-6"
      />
      <Toast
        message="클립보드에 링크가 복사되었어요!"
        isOpen={showToast}
        setClose={() => setShowToast(false)}
      />
      <Modal isOpen={showShareModal} onClose={onShareModalClose}>
        <Modal.BottomModal icon={<TwoPolaroidsIcon className="scale-[2]" />}>
          <Modal.Close />
          <Modal.Title>보드를 친구에게 공유해보세요!</Modal.Title>
          <Section title="링크 공유">
            <Section.Item
              icon={<CopyIcon className="-rotate-45 scale-150" />}
              bg="bg-gray-900"
              desc="링크 복사"
              onClick={copyLink}
            />
            <Section.Item
              icon={<KakaoIcon />}
              bg={SNS.KAKAO.bg}
              desc={SNS.KAKAO.name}
              onClick={() => handleShare('KAKAO')}
            />
            <Section.Item
              icon={<IGIcon />}
              bg={SNS.INSTAGRAM.bg}
              desc={SNS.INSTAGRAM.name}
              onClick={() => handleShare('INSTAGRAM')}
            />
            <Section.Item
              icon={<XIcon />}
              bg={SNS.X.bg}
              desc={SNS.X.name}
              onClick={() => handleShare('X')}
            />
            <Section.Item
              icon={<FacebookIcon />}
              bg={SNS.FACEBOOK.bg}
              desc={SNS.FACEBOOK.name}
              onClick={() => handleShare('FACEBOOK')}
            />
          </Section>
        </Modal.BottomModal>
      </Modal>
    </>
  )
}

export default ShareBtn
