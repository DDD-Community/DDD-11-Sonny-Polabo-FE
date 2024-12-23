'use client'

import React, { useEffect, useState } from 'react'
import Sticker from '@/app/board/[boardId]/decorate/_components/Sticker'
import Image from 'next/image'
import SubmitBtn from '@/app/board/[boardId]/decorate/_components/SubmitBtn'
import { ensureArray } from '@/lib/utils/array'
import { getStickerStyles } from '@/app/board/[boardId]/decorate/_utils/getStickerStyles'
import { downloadImage } from '@/lib/utils/image'
import { useParams, useSearchParams } from 'next/navigation'
import { getBoard } from '@/lib'
import OpenStickerModalBtn from '@/app/board/[boardId]/decorate/_components/OpenStickerModalBtn'
import SelectSticker from '@/app/board/[boardId]/decorate/_components/SelectStickerModal'

const DecorateScreenshot = () => {
  const { boardId } = useParams<{ boardId: string }>()
  const searchParams = useSearchParams()
  const polaroidIds = searchParams.getAll('polaroidIds')
  const imageUrl = searchParams.get('imageUrl')!
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
    <div className="relative flex h-full touch-none flex-col items-center justify-between gap-5">
      <header className="my-5 w-full bg-gray-0 bg-transparent">
        <div>
          <div className="text-center text-md font-semiBold leading-6">
            보드 꾸미기
          </div>
        </div>
      </header>
      <div
        id="preview"
        className="relative w-auto overflow-hidden shadow-screenshot"
      >
        <OpenStickerModalBtn>
          <SelectSticker />
        </OpenStickerModalBtn>
        <Sticker />
        <Image
          src={imageUrl}
          alt="screenshot"
          width={1080}
          height={1920}
          className="max-h-full w-auto object-contain"
        />
      </div>
      <div className="mb-5 w-full">
        <SubmitBtn onClick={takeScreenshot} />
      </div>
    </div>
  )
}

export default DecorateScreenshot
