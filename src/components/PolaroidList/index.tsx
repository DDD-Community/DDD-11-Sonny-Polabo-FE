'use client'

import { Board } from '@/types'
import PolaroidListItem from './PolaroidListItem'

interface PolaroidListProps {
  board: Board
  onSelectPolaroid: (idx: number) => void
  getPolaroidClassName?: (idx: number) => string
}

const PolaroidList = ({
  board,
  onSelectPolaroid,
  getPolaroidClassName = () => '',
}: PolaroidListProps) => {
  return (
    <div className="mx-auto w-full flex-1 overflow-x-hidden overflow-y-scroll pb-10 scrollbar-hide">
      <div className="grid grid-cols-2 gap-6 px-[20px] py-[10px]">
        {board.items.map((item, idx) => (
          <PolaroidListItem
            PolaroidCardClassName={getPolaroidClassName(idx)}
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
