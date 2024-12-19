'use client'

import Modal from '@/components/Modal'
import CopyIcon from 'public/icons/copy.svg'
import Share from 'public/icons/ios_share.svg'
import TwoPolaroidsIcon from 'public/icons/linkShare.svg'
import FacebookIcon from 'public/icons/sns/sns-facebook.svg'
import IGIcon from 'public/icons/sns/sns-ig.svg'
import KakaoIcon from 'public/icons/sns/sns-kakao.svg'
import XIcon from 'public/icons/sns/sns-x.svg'
import PolaroidIcon from 'public/icons/polaroid.svg'
import { useState } from 'react'
import Button from '@/components/Button'
import Separator from '@/components/Separator'
import CopyCompleteToast from '@/app/board/[boardId]/_components/Share/CopyCompleteToast'
import NoPolaroidToSelectToast from '@/app/board/[boardId]/_components/Share/NoPolaroidToSelectToast'
import { useTutorial } from '@/app/board/[boardId]/_contexts/TutorialContext'
import { useBoard } from '@/app/board/[boardId]/_contexts/BoardContext'
import { useSelect } from '@/app/board/[boardId]/_contexts/SelectModeContext'
import { sendGTMEvent } from '@next/third-parties/google'
import { GTM_EVENT } from '@/lib'
import { SnsKeyType } from '@/types'
import { SNS } from '@/lib/constants/snsConfig'
import Section from './Section'
import useSnsShare from '../../_hooks/useSnsShare'

const ShareBtn = () => {
  const { board } = useBoard()
  const { setIsSelectMode } = useSelect()
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
        shareToKakao(board.title)
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

  const [showCopyCompleteToast, setShowCopyCompleteToast] = useState(false)
  const [showNoPolaroidToast, setShowNoPolaroidToast] = useState(false)

  const closeCopyCompleteToast = () => setShowCopyCompleteToast(false)
  const closeNoPolaroidToast = () => setShowNoPolaroidToast(false)

  const copyLink = () => {
    sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_COPYLINK_BOARD })
    setShowShareModal(false)
    const currentURL = window.location.href
    return navigator.clipboard.writeText(currentURL).then(() => {
      setShowCopyCompleteToast(true)
    })
  }

  const onClickDecorateBoard = () => {
    setShowShareModal(false)
    if (board && board.items.length > 0) {
      setIsSelectMode(true)
    } else {
      setShowNoPolaroidToast(true)
    }
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
      <CopyCompleteToast
        show={showCopyCompleteToast}
        close={closeCopyCompleteToast}
      />
      <NoPolaroidToSelectToast
        show={showNoPolaroidToast}
        close={closeNoPolaroidToast}
      />
      <Modal isOpen={showShareModal} onClose={onShareModalClose}>
        <Modal.BottomModal icon={<TwoPolaroidsIcon className="scale-[2]" />}>
          <Modal.Close />
          <Modal.Title>보드를 친구에게 공유해보세요!</Modal.Title>
          <Section>
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
          <div className="mb-5 flex w-[calc(100%-20px)] flex-col gap-5">
            <Separator />
            <Button className="w-full" onClick={onClickDecorateBoard}>
              <div className="flex items-center justify-center gap-1">
                내 보드 꾸미고 저장하기 <PolaroidIcon />
              </div>
            </Button>
          </div>
        </Modal.BottomModal>
      </Modal>
    </>
  )
}

export default ShareBtn
