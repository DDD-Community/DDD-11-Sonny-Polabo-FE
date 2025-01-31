'use client'

import PolaroidListItem from '@/app/board/[boardId]/_components/PolaroidList/PolaroidListItem'
import { useBoard } from '@/app/board/[boardId]/_contexts/BoardContext'
import { useSelect } from '@/app/board/[boardId]/_contexts/SelectModeContext'
import Button from '@/components/Button'
import PolaroidDetailModal from '@/components/Polaroid/PolaroidDetail'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { createPolaroidSearchParams } from '@/lib/utils/query'
import { sendGTMEvent } from '@next/third-parties/google'
import { GTM_EVENT } from '@/lib'

const PolaroidList = () => {
  const { board, boardId } = useBoard()
  const { isSelectMode, selectedIds, toggleSelectedId } = useSelect()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState<number>(0)
  const router = useRouter()

  const openDetailModal = (idx: number) => {
    setSelectedIdx(idx)
    setIsModalOpen(true)
  }

  const selectPolaroid = (idx: number) => {
    const { id } = board.items[idx]
    toggleSelectedId(id)
  }

  const onSelectPolaroid = isSelectMode ? selectPolaroid : openDetailModal

  const getPolaroidClassName = (idx: number) => {
    const { id } = board.items[idx]

    if (isSelectMode && selectedIds.includes(id)) {
      return 'border-2 border-negative'
    }

    return ''
  }

  const onSelectComplete = () => {
    sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_CHOOSE_POLAROID })
    const polaroidIdsSearchParam = createPolaroidSearchParams(selectedIds)
    router.push(`/board/${boardId}/decorate?${polaroidIdsSearchParam}`)
  }

  return (
    <>
      <div className="mx-auto w-full flex-1 overflow-x-hidden overflow-y-scroll pb-10 scrollbar-hide">
        <div className="grid grid-cols-2 gap-6 px-[20px] py-[10px]">
          {board.items.map((item, idx) => (
            <PolaroidListItem
              isFirstItem={idx === 0}
              key={item.id}
              PolaroidCardClassName={getPolaroidClassName(idx)}
              item={item}
              onClick={() => onSelectPolaroid(idx)}
            />
          ))}
        </div>
      </div>
      {isSelectMode ? (
        <div className="absolute bottom-10 mx-10 flex w-[calc(100%-80px)] justify-center">
          <Button
            size="lg"
            className="w-full"
            disabled={selectedIds.length === 0}
            onClick={onSelectComplete}
          >
            선택 완료
          </Button>
        </div>
      ) : (
        <PolaroidDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedIdx={selectedIdx}
          polaroids={board.items}
          boardId={boardId}
          isBoardOwner={board.mine}
        />
      )}
    </>
  )
}

export default PolaroidList
