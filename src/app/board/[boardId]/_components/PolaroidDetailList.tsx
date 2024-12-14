'use client'

import React, { useState } from 'react'
import PolaroidDetailModal from '@/components/Polaroid/PolaroidDetail'
import PolaroidList from '@/components/PolaroidList'
import { useBoardContext } from '@/app/board/[boardId]/_contexts/BoardContext'

const PolaroidDetailList = () => {
  const { board, boardId } = useBoardContext()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState<number>(0)

  const openDetailModal = (idx: number) => {
    setSelectedIdx(idx)
    setIsModalOpen(true)
  }

  return (
    <div>
      <PolaroidList board={board} onSelectPolaroid={openDetailModal} />
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

export default PolaroidDetailList
