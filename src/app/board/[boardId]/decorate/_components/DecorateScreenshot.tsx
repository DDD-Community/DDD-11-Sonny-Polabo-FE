'use client'

import React, { useEffect, useState } from 'react'
import Sticker from '@/app/board/[boardId]/decorate/_components/Sticker'
import Image from 'next/image'
import SubmitBtn from '@/app/board/[boardId]/decorate/_components/SubmitBtn'
import { ensureArray } from '@/lib/utils/array'
import { getStickerStyles } from '@/app/board/[boardId]/decorate/_utils/getStickerStyles'
import { downloadImage } from '@/lib/utils/image'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { getBoard } from '@/lib'
import OpenStickerModalBtn from '@/app/board/[boardId]/decorate/_components/OpenStickerModalBtn'
import SelectSticker from '@/app/board/[boardId]/decorate/_components/SelectStickerModal'
import ScreenshotLoading from 'public/images/screenshot_loading.gif'
import Button from '@/components/Button'
import { useSticker } from '@/app/board/[boardId]/decorate/_contexts/StickerContext'
import DownloadIcon from 'public/icons/download.svg'

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
      <header className="my-5 w-full bg-gray-0 bg-transparent">
        <div>
          <div className="text-center text-md font-semiBold leading-6">
            {isDownloaded ? '앨범에 저장되었습니다!' : '보드 꾸미기'}
          </div>
        </div>
      </header>
      {previewUrl && (
        <div
          id="preview"
          className="relative aspect-[9/16] w-auto overflow-hidden shadow-screenshot"
        >
          <OpenStickerModalBtn>
            <SelectSticker />
          </OpenStickerModalBtn>
          <Sticker />
          <Image
            src={previewUrl}
            alt="screenshot"
            width={1080}
            height={1920}
            className="aspect-[9/16] max-h-full w-auto object-contain"
          />
        </div>
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
