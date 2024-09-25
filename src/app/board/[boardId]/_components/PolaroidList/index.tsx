'use client'

import PolaroidDetailModal from '@/components/Polaroid/PolaroidDetail'
import { Board } from '@/types'
import { useState } from 'react'
import PolaroidListItem from './PolaroidListItem'

interface PolaroidListProps {
  board: Board
  boardId: string
}

const PolaroidList = ({ boardId, board }: PolaroidListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState<number>(0)

  const openDetailModal = (idx: number) => {
    setSelectedIdx(idx)
    setIsModalOpen(true)
  }

  return (
    <div className="mx-auto w-full flex-1 overflow-x-hidden overflow-y-scroll pb-10 scrollbar-hide">
      <div className="grid grid-cols-2 gap-6 px-[20px] py-[10px]">
        {board.items.map((item, idx) => (
          <PolaroidListItem
            key={item.id}
            item={item}
            onClick={() => openDetailModal(idx)}
          />
        ))}
      </div>
      <PolaroidDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedIdx={selectedIdx}
        polaroids={board.items}
        boardId={boardId}
        isBoardOwner={board.mine}
      />
    </div>
  )
}

export default PolaroidList
