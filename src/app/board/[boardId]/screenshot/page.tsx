import React from 'react'
import { getBoard } from '@/lib'
import BigPinIcon from 'public/icons/BigPinIcon.svg'
import PolaboLogo from 'public/images/polabo-logo.png'
import Image from 'next/image'
import { ensureArray } from '@/lib/utils/array'
import PolaroidList from '@/app/board/[boardId]/screenshot/_components/PolaroidList'
import { twMerge } from 'tailwind-merge'
import { getBoardStyle } from '@/lib/utils/board'

interface BoardScreenshotPageProps {
  params: {
    boardId: string
  }
  searchParams: {
    polaroidIds: string | string[]
  }
}

const BoardScreenshotPage = async ({
  params,
  searchParams,
}: BoardScreenshotPageProps) => {
  const { boardId } = params
  const board = await getBoard(boardId)
  const polaroidIds = ensureArray(searchParams.polaroidIds)
  const selectedPolaroids = board.items.filter((item) =>
    polaroidIds.includes(String(item.id)),
  )
  const { titleClassName, backgroundImage } = getBoardStyle(board)

  if (selectedPolaroids.length === 0) {
    throw new Error('No polaroids found')
  }

  return (
    <div
      id="screenshot_target"
      className="relative flex h-[1920px] w-[1080px] flex-col justify-between bg-gray-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={twMerge(
          'flex items-center justify-center gap-2 py-11',
          titleClassName,
        )}
      >
        <BigPinIcon />
        <span className="font-jooree text-[68px] font-semiBold">
          {board.title}
        </span>
      </div>
      <PolaroidList polaroids={selectedPolaroids} />
      <div className="flex w-full items-center justify-center">
        <Image
          src={PolaboLogo}
          priority
          alt="logo"
          className="mb-12 w-[230px] opacity-50"
        />
      </div>
    </div>
  )
}

export default BoardScreenshotPage
