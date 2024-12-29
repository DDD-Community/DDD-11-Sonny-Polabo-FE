'use client'

import Icon from 'public/icons/pinned.svg'
import { getBoardStyle } from '@/lib/utils/board'
import { useBoard } from '@/app/board/[boardId]/_contexts/BoardContext'

const Empty = () => {
  const { board } = useBoard()
  const { titleClassName } = getBoardStyle(board)

  return (
    <div className="flex flex-1 flex-col items-center justify-center pb-16">
      <Icon className="size-24" />
      <span className={`font-jooree text-2xl opacity-40 ${titleClassName}`}>
        보드를 꾸며주세요!
      </span>
    </div>
  )
}

export default Empty
