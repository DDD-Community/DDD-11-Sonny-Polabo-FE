'use client'

import CopyCompleteToast from '@/app/board/[boardId]/_components/Share/CopyCompleteToast'
import NoPolaroidToSelectToast from '@/app/board/[boardId]/_components/Share/NoPolaroidToSelectToast'
import { useBoard } from '@/app/board/[boardId]/_contexts/BoardContext'
import { useSelect } from '@/app/board/[boardId]/_contexts/SelectModeContext'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { useBoardTutorial } from '@/components/Tutorial'
import CopyIcon from 'public/icons/copy.svg'
import Share from 'public/icons/ios_share.svg'
import TwoPolaroidsIcon from 'public/icons/linkShare.svg'
import PolaroidIcon from 'public/icons/polaroid.svg'
import FacebookIcon from 'public/icons/sns/sns-facebook.svg'
import IGIcon from 'public/icons/sns/sns-ig.svg'
import KakaoIcon from 'public/icons/sns/sns-kakao.svg'
import XIcon from 'public/icons/sns/sns-x.svg'
import { useState } from 'react'
import useSnsShare from '../../_hooks/useSnsShare'
import Section from './Section'

const ShareBtn = () => {
  const { board } = useBoard()
  const { setIsSelectMode } = useSelect()
  const [showShareModal, setShowShareModal] = useState<boolean>(false)
  const { shareToKakao, shareToInsta, shareToFacebook, shareToX } =
    useSnsShare()

  const { run, nextStep } = useBoardTutorial()

  const onShareModalClose = () => {
    setShowShareModal(false)
    if (run) nextStep()
  }

  const handleShare = (shareFn: () => void) => {
    shareFn()
    setShowShareModal(false)
  }

  const handleKakaoShare = () => {
    handleShare(() => shareToKakao(board.title))
  }

  const [showCopyCompleteToast, setShowCopyCompleteToast] = useState(false)
  const [showNoPolaroidToast, setShowNoPolaroidToast] = useState(false)

  const closeCopyCompleteToast = () => setShowCopyCompleteToast(false)
  const closeNoPolaroidToast = () => setShowNoPolaroidToast(false)

  const copyLink = () => {
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
      <Share onClick={() => setShowShareModal(true)} className="w-6" />
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
              onClick={() => handleShare(copyLink)}
            />

            <Section.Item
              icon={<KakaoIcon />}
              bg="bg-kakao"
              desc="카카오톡"
              onClick={handleKakaoShare}
            />
            <Section.Item
              icon={<IGIcon />}
              bg="bg-[url('/icons/sns/sns-ig-bg.png')]"
              desc="인스타그램"
              onClick={() => handleShare(shareToInsta)}
            />
            <Section.Item
              icon={<XIcon />}
              bg="bg-gray-1000"
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
          <div className="mb-5 flex w-[calc(100%-20px)] flex-col gap-5">
            <div className="h-px bg-gray-300" />
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
