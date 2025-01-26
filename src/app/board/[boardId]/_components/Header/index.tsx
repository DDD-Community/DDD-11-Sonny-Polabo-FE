'use client'

import React from 'react'
import { useSelect } from '@/app/board/[boardId]/_contexts/SelectModeContext'
import DefaultHeader from '@/app/board/[boardId]/_components/Header/DefaultHeader'
import SelectModeHeader from '@/app/board/[boardId]/_components/Header/SelectModeHeader'

const Header = () => {
  const { isSelectMode } = useSelect()

  if (isSelectMode) {
    return <SelectModeHeader />
  }
  return <DefaultHeader />
}

export default Header
