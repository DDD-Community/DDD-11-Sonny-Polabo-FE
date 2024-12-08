'use client'

import React, { useState } from 'react'
import SelectHeader from '@/app/board/select/_components/SelectHeader'
import PolaroidList from '@/components/PolaroidList'
import { Board } from '@/types'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

interface PolaroidSelectListProps {
  board: Board
}

const PolaroidSelectList = ({ board }: PolaroidSelectListProps) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const router = useRouter()

  const toggleSelectPolaroid = (idx: number) => {
    const { id } = board.items[idx]

    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  const getPolaroidClassName = (idx: number) => {
    const { id } = board.items[idx]

    if (selectedIds.includes(id)) {
      return 'border-2 border-negative'
    }
    return 'border-2'
  }

  const onSelectComplete = () => {
    const polaroidIdsSearchParam = selectedIds
      .map((id) => `polaroidIds=${id}`)
      .join('&')

    router.push(`/board/decorate?${polaroidIdsSearchParam}`)
  }

  return (
    <div>
      <SelectHeader total={board.items.length} selected={selectedIds.length} />
      <PolaroidList
        getPolaroidClassName={getPolaroidClassName}
        board={board}
        onSelectPolaroid={toggleSelectPolaroid}
      />
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
    </div>
  )
}

export default PolaroidSelectList
