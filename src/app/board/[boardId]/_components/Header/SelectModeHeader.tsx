import React from 'react'
import Header from '@/components/Header'
import { useSelect } from '@/app/board/[boardId]/_contexts/SelectModeContext'
import { useBoard } from '@/app/board/[boardId]/_contexts/BoardContext'
import { twMerge } from 'tailwind-merge'
import { getBoardStyle } from '@/lib/utils/board'
import BackIcon from 'public/icons/arrow_back_ios.svg'

const SelectModeHeader = () => {
  const { selectedIds, MAX_SELECT_COUNT, setIsSelectMode, resetSelectedIds } =
    useSelect()
  const { board } = useBoard()
  const maxLength = Math.min(board.items.length, MAX_SELECT_COUNT)
  const { selectCountClassName, titleClassName } = getBoardStyle(board)

  const toUnselectMode = () => {
    setIsSelectMode(false)
    resetSelectedIds()
  }

  return (
    <Header
      leftButton={<BackIcon onClick={toUnselectMode} />}
      title={
        <div className="flex flex-col items-center justify-center gap-[3px] text-center text-md font-semiBold leading-6">
          <h1>꾸미고 싶은 폴라로이드를 골라주세요</h1>
          <h2 className="flex gap-0.5">
            <span className={selectCountClassName}>{selectedIds.length}</span>
            <span className="text-gray-400">/</span>
            <span>{maxLength}</span>
          </h2>
        </div>
      }
      className={twMerge('h-20 bg-transparent p-3', titleClassName)}
      shadow={false}
    />
  )
}

export default SelectModeHeader
