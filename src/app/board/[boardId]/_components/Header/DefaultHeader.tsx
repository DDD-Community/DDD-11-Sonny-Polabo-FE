'use client'

import React from 'react'
import Header from '@/components/Header'
import PinIcon from 'public/icons/pinFilled.svg'
import Hamburger from '@/components/HamburgerMenu'
import Tutorial from '@/app/board/[boardId]/_components/Tutorial'
import { Step1Tooltip } from '@/app/board/[boardId]/_components/Tutorial/Tooltips'
import ShareBtn from '@/app/board/[boardId]/_components/Share'
import { useSession } from 'next-auth/react'
import { useBoard } from '@/app/board/[boardId]/_contexts/BoardContext'
import { BOARDTHEMAS } from '@/lib/constants/boardConfig'

const DefaultHeader = () => {
  const { data: session } = useSession()
  const { board } = useBoard()
  const boardTheme = BOARDTHEMAS[board.options.THEMA].theme

  return (
    <Header
      title={
        <div className="flex items-center justify-center gap-[3px] text-center">
          <PinIcon />
          <h1 className="text-md font-semiBold leading-6">{board.title}</h1>
        </div>
      }
      leftButton={<Hamburger />}
      rightButton={
        session ? (
          <Tutorial step={1} tooltip={<Step1Tooltip />} hasNext>
            <ShareBtn />
          </Tutorial>
        ) : (
          <ShareBtn />
        )
      }
      className={`bg-transparent ${boardTheme === 'LIGHT' ? 'text-gray-900' : 'text-gray-0'}`}
      shadow={false}
    />
  )
}

export default DefaultHeader
