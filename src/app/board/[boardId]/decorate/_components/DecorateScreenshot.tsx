'use client'

import OpenStickerModalBtn from '@/app/board/[boardId]/decorate/_components/OpenStickerModalBtn'
import SelectSticker from '@/app/board/[boardId]/decorate/_components/SelectStickerModal'
import Sticker from '@/app/board/[boardId]/decorate/_components/Sticker'
import SubmitBtn from '@/app/board/[boardId]/decorate/_components/SubmitBtn'
import { useSticker } from '@/app/board/[boardId]/decorate/_contexts/StickerContext'
import { getStickerStyles } from '@/app/board/[boardId]/decorate/_utils/getStickerStyles'
import Button from '@/components/Button'
import Header from '@/components/Header'
import { GTM_EVENT, getBoard } from '@/lib'
import { ensureArray } from '@/lib/utils/array'
import { downloadImage } from '@/lib/utils/image'
import Image from 'next/image'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import BackIcon from 'public/icons/arrow_back_ios.svg'
import DownloadIcon from 'public/icons/download.svg'
import ScreenshotLoading from 'public/images/screenshot_loading.gif'
import { useEffect, useState } from 'react'
import { sendGTMEvent } from '@next/third-parties/google'
import GoBackModal from './GoBackModal'

const DecorateScreenshot = () => {
  const { boardId } = useParams<{ boardId: string }>()
  const searchParams = useSearchParams()
  const polaroidIds = searchParams.getAll('polaroidIds')
  const [boardName, setBoardName] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')
  const [isLoadingPreview, setIsLoadingPreview] = useState(true)
  const [isLoadingDownload, setIsLoadingDownload] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)
  const { isDecorating, setIsDecorating } = useSticker()
  const [isGoBackModalOpen, setIsGoBackModalOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    getBoard(boardId).then((board) => {
      setBoardName(board.title)
    })
  }, [])

  useEffect(() => {
    const takePreview = async () => {
      const res = await fetch(`/board/api/screenshot`, {
        method: 'POST',
        body: JSON.stringify({
          polaroids: polaroidIds,
          boardId,
        }),
      })

      if (!res.ok) {
        throw new Error('Failed to take screenshot')
      }

      const blob = await res.blob()
      const previewURl = URL.createObjectURL(blob)
      setPreviewUrl(previewURl)
      setIsLoadingPreview(false)
    }

    takePreview()
  }, [])

  const takeScreenshot = () => {
    sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_SAVE })
    setIsLoadingDownload(true)
    fetch(`/board/api/screenshot`, {
      method: 'POST',
      body: JSON.stringify({
        polaroids: ensureArray(polaroidIds),
        boardId,
        stickers: getStickerStyles(),
      }),
    })
      .then((res) => res.blob())
      .then((blob) => {
        const screenshotUrl = URL.createObjectURL(blob)
        downloadImage(screenshotUrl, boardName)
        setIsLoadingDownload(false)
        setIsDownloaded(true)
      })
  }

  const routeToHome = () => {
    sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_GOTOMAIN })
    router.push('/')
  }

  if (isLoadingPreview) {
    return (
      <div className="flex h-dvh items-center justify-center bg-gray-0">
        <Image src={ScreenshotLoading} alt="loading" className="w-[80%]" />
      </div>
    )
  }

  return (
    <div className="relative flex h-full touch-none flex-col items-center justify-between gap-5">
      <Header
        title={isDownloaded ? '앨범에 저장되었습니다!' : '보드 꾸미기'}
        leftButton={<BackIcon onClick={() => setIsGoBackModalOpen(true)} />}
        shadow={false}
        className="bg-transparent"
      />
      <GoBackModal
        isOpen={isGoBackModalOpen}
        onClose={() => setIsGoBackModalOpen(false)}
        goBack={() => router.back()}
      />
      {previewUrl && (
        <>
          {!isDownloaded && (
            <OpenStickerModalBtn>
              <SelectSticker />
            </OpenStickerModalBtn>
          )}
          <div
            id="preview"
            className="relative aspect-[9/16] w-auto overflow-hidden shadow-screenshot"
          >
            <Sticker isDecorating={isDecorating} />
            <Image
              src={previewUrl}
              alt="screenshot"
              width={1080}
              height={1920}
              className="aspect-[9/16] max-h-full w-auto object-contain"
            />
          </div>
        </>
      )}
      <div className="mb-5 w-full">
        {isDownloaded && (
          <Button
            size="lg"
            variant="primary"
            className="mx-5"
            onClick={routeToHome}
          >
            메인으로 가기
          </Button>
        )}
        {!isDownloaded && isDecorating && (
          <Button
            size="lg"
            variant="secondary"
            className="mx-5"
            onClick={() => {
              setIsDecorating(false)
            }}
          >
            꾸미기 완료
          </Button>
        )}
        {!isDownloaded && !isDecorating && (
          <SubmitBtn disabled={isLoadingDownload} onClick={takeScreenshot}>
            <span className="flex items-center justify-center gap-2">
              내 보드 이미지 저장 <DownloadIcon />
            </span>
          </SubmitBtn>
        )}
      </div>
    </div>
  )
}

export default DecorateScreenshot
