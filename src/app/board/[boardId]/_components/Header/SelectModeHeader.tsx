import React from 'react'
import Header from '@/components/Header'
import { useSelect } from '@/app/board/[boardId]/_contexts/SelectModeContext'
import { useBoard } from '@/app/board/[boardId]/_contexts/BoardContext'
import { twMerge } from 'tailwind-merge'

const SelectModeHeader = ({ className }: { className: string }) => {
  const { selectedIds, MAX_SELECT_COUNT } = useSelect()
  const { board } = useBoard()
  const maxLength = Math.min(board.items.length, MAX_SELECT_COUNT)

  return (
    <Header
      title={
        <div className="flex flex-col items-center justify-center gap-[3px] text-center text-md font-semiBold leading-6">
          <h1>꾸미고 싶은 폴라로이드를 골라주세요</h1>
          <h2 className="flex gap-0.5">
            <span className="text-gray-400">{selectedIds.length}</span>
            <span className="text-gray-400">/</span>
            <span>{maxLength}</span>
          </h2>
        </div>
      }
      className={twMerge('bg-transparent', className)}
      shadow={false}
    />
  )
}

export default SelectModeHeader
