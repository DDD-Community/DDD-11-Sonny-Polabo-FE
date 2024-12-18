'use client'

import React from 'react'
import { useSelect } from '@/app/board/[boardId]/_contexts/SelectModeContext'
import DefaultHeader from '@/app/board/[boardId]/_components/Header/DefaultHeader'
import SelectModeHeader from '@/app/board/[boardId]/_components/Header/SelectModeHeader'
import { useBoard } from '@/app/board/[boardId]/_contexts/BoardContext'
import { BOARDTHEMAS } from '@/lib/constants/boardConfig'

const Header = () => {
  const { isSelectMode } = useSelect()
  const { board } = useBoard()
  const boardTheme = BOARDTHEMAS[board.options.THEMA].theme
  const className = boardTheme === 'LIGHT' ? 'text-gray-900' : 'text-gray-0'

  if (isSelectMode) {
    return <SelectModeHeader className={className} />
  }
  return <DefaultHeader className={className} />
}

export default Header
