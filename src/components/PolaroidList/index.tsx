'use client'

import { Board, Polaroid } from '@/types'
import PolaroidListItem from './PolaroidListItem'

interface PolaroidListProps {
  board: Board
  onSelectPolaroid: (idx: Polaroid['id']) => void
}

const PolaroidList = ({ board, onSelectPolaroid }: PolaroidListProps) => {
  return (
    <div className="mx-auto w-full flex-1 overflow-x-hidden overflow-y-scroll pb-10 scrollbar-hide">
      <div className="grid grid-cols-2 gap-6 px-[20px] py-[10px]">
        {board.items.map((item, idx) => (
          <PolaroidListItem
            key={item.id}
            item={item}
            onClick={() => onSelectPolaroid(idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default PolaroidList
