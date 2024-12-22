'use client'

import Header from '@/components/Header'
import { DecorateTutorialProvider } from '@/components/Tutorial'
import Image from 'next/image'
import { ensureArray } from '@/lib/utils/array'
import { getStickerStyles } from '@/app/board/[boardId]/decorate/_utils/getStickerStyles'
import { useEffect, useState } from 'react'
import { getBoard } from '@/lib'
import { downloadImage } from '@/lib/utils/image'
import OpenStickerModalBtn from './_components/OpenStickerModalBtn'
import SelectSticker from './_components/SelectStickerModal'
import Sticker from './_components/Sticker'
import SubmitBtn from './_components/SubmitBtn'
import { StickerModalProvider } from './_contexts/ModalContext'
import { StickerProvider } from './_contexts/StickerContext'

interface BoardDecoratePageProps {
  searchParams: {
    boardId: string
    imageUrl: string
    polaroidIds: string | string[]
  }
}

const BoardDecoratePage = ({ searchParams }: BoardDecoratePageProps) => {
  const { imageUrl, boardId, polaroidIds } = searchParams
  const [boardName, setBoardName] = useState('')

  useEffect(() => {
    getBoard(boardId).then((board) => {
      setBoardName(board.title)
    })
  })

  const takeScreenshot = () => {
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
      })
  }

  return (
    <DecorateTutorialProvider>
      <div className="flex h-dvh flex-col bg-gray-100">
        <Header title="보드 꾸미기" shadow={false} className="bg-transparent" />
        <StickerProvider>
          <div className="relative flex-1">
            <StickerModalProvider>
              <OpenStickerModalBtn>
                <SelectSticker />
              </OpenStickerModalBtn>
            </StickerModalProvider>
            <div
              id="preview"
              className="relative mx-6 overflow-hidden shadow-screenshot"
            >
              <Sticker />
              <Image
                src={imageUrl}
                alt="screenshot"
                width={1080}
                height={1920}
                className="object-contain"
              />
            </div>
          </div>
        </StickerProvider>
        <div className="mx-5">
          <SubmitBtn onClick={takeScreenshot} />
        </div>
      </div>
    </DecorateTutorialProvider>
  )
}

export default BoardDecoratePage
