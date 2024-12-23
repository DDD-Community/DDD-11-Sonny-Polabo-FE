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
    <div className="relative h-full">
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
      <div className="absolute bottom-0 mb-10 w-full">
        <SubmitBtn onClick={takeScreenshot} />
      </div>
    </div>
  )
}

export default DecorateScreenshot
