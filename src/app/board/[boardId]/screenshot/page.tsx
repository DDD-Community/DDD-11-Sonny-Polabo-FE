import React from 'react'
import { getBoard } from '@/lib'
import PinIcon from 'public/icons/PinIcon.svg'
import PolaboLogo from 'public/images/polabo-logo.png'
import Image from 'next/image'
import { ensureArray } from '@/lib/utils/array'
import ExportPolaroidList from '@/app/board/[boardId]/screenshot/_components/ExportPolaroidList'

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

  if (selectedPolaroids.length === 0) {
    throw new Error('No polaroids found')
  }

  return (
    <div
      id="screenshot_target"
      className="relative flex h-[1920px] w-[1080px] flex-col justify-between bg-gray-0"
    >
      <div className="flex items-center justify-center py-11">
        <PinIcon />
        <span className="font-jooree text-[68px] font-semiBold">
          {board.title}
        </span>
      </div>
      <ExportPolaroidList polaroids={selectedPolaroids} />
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
