import React from 'react'
import { getBoard } from '@/lib'
import PinIcon from 'public/icons/PinIcon.svg'
import PolaboLogo from 'public/images/polabo_logo.png'
import Image from 'next/image'
import PolaroidList from '@/app/board/[boardId]/decorate/_components/PolaroidList'
import { ensureArray } from '@/lib/utils/array'

interface BoardDecoratePageProps {
  params: {
    boardId: string
  }
  searchParams: {
    polaroidIds: string | string[]
  }
}

const BoardDecoratePage = async ({
  params,
  searchParams,
}: BoardDecoratePageProps) => {
  const { boardId } = params
  const board = await getBoard(boardId)
  const polaroidIds = ensureArray(searchParams.polaroidIds)
  const selectedPolaroids = board.items.filter((item) =>
    polaroidIds.includes(String(item.id)),
  )

  return (
    <div className="relative flex h-[1920px] w-[1080px] flex-col justify-between bg-gray-0">
      <div className="flex items-center justify-center py-11">
        <PinIcon />
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

export default BoardDecoratePage
