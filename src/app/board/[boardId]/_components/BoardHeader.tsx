import React from 'react'
import Header from '@/components/Header'
import PinIcon from 'public/icons/pinFilled.svg'
import Hamburger from '@/components/HamburgerMenu'
import Tutorial from '@/app/board/[boardId]/_components/Tutorial'
import { Step1Tooltip } from '@/app/board/[boardId]/_components/Tutorial/Tooltips'
import ShareBtn from '@/app/board/[boardId]/_components/Share'
import { Board } from '@/types'
import { auth } from '@/auth'

interface BoardHeaderInterface {
  board: Board
}

const BoardHeader = async ({ board }: BoardHeaderInterface) => {
  const session = await auth()

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
            <ShareBtn boardName={board.title} />
          </Tutorial>
        ) : (
          <ShareBtn boardName={board.title} />
        )
      }
      className="bg-transparent"
      shadow={false}
    />
  )
}

export default BoardHeader
