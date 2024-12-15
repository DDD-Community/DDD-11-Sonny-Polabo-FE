'use client'

import React, { useState } from 'react'
import PolaroidDetailModal from '@/components/Polaroid/PolaroidDetail'
import PolaroidList from '@/components/PolaroidList'
import { useBoard } from '@/app/board/[boardId]/_contexts/BoardContext'
import { useSelect } from '@/app/board/[boardId]/_contexts/SelectModeContext'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import { takeScreenshot } from '@/lib/utils/screenshot'

const BoardPolaroidList = () => {
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

  const onSelectComplete = async () => {
    const polaroidIdsSearchParam = selectedIds
      .map((id) => `polaroidIds=${id}`)
      .join('&')

    const body = JSON.stringify({
      url: `/board/${boardId}/screenshot?${polaroidIdsSearchParam}`,
      targetElementSelector: 'div#screenshot_target',
    })

    const imageUrl = await takeScreenshot(body)

    router.push(`/board/${boardId}/decorate?imageUrl=${imageUrl}`)
  }

  return (
    <>
      <PolaroidList
        board={board}
        getPolaroidClassName={getPolaroidClassName}
        onSelectPolaroid={onSelectPolaroid}
      />
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

export default BoardPolaroidList
