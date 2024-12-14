'use client'

import React from 'react'
import { useSelect } from '@/app/board/[boardId]/_contexts/SelectModeContext'
import BoardHeader from '@/app/board/[boardId]/_components/Header/BoardHeader'
import SelectHeader from '@/app/board/[boardId]/_components/Header/SelectHeader'

const Header = () => {
  const { isSelectMode } = useSelect()

  if (isSelectMode) {
    return <SelectHeader />
  }
  return <BoardHeader />
}

export default Header
