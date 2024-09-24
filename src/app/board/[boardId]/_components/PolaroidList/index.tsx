'use client'

import { Polaroid } from '@/types'
import { useState } from 'react'
import PolaroidDetailModal from '@/components/Polaroid/PolaroidDetail'
import PolaroidListItem from './PolaroidListItem'

interface PolaroidListProps {
  polaroids: Polaroid[]
  boardId: string
}

const PolaroidList = ({ polaroids, boardId }: PolaroidListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState<number>(0)

  const openDetailModal = (idx: number) => {
    setSelectedIdx(idx)
    setIsModalOpen(true)
  }

  return (
    <div className="mx-auto w-full flex-1 overflow-x-hidden overflow-y-scroll pb-10 scrollbar-hide">
      <div className="grid grid-cols-2 gap-6 px-[20px] py-[10px]">
        {polaroids.map((item, idx) => (
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
        polaroids={polaroids}
        boardId={boardId}
      />
    </div>
  )
}

export default PolaroidList
