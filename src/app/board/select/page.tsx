import React from 'react'
import { getBoard } from '@/lib'
import PolaroidSelectList from '@/app/board/select/_components/PolaroidSelectList'

interface SelectPageProps {
  searchParams: {
    boardId: string
  }
}

const SelectPage = async ({ searchParams }: SelectPageProps) => {
  const { boardId } = searchParams
  const board = await getBoard(boardId)

  return (
    <div className="relative flex h-dvh flex-col bg-cover">
      <PolaroidSelectList board={board} />
    </div>
  )
}

export default SelectPage
