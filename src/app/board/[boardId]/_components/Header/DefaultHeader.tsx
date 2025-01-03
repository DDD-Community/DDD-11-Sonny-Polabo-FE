'use client'

import Hamburger from '@/components/HamburgerMenu'
import Header from '@/components/Header'
import { BoardTutorial } from '@/components/Tutorial'
import { useSession } from 'next-auth/react'
import PinIcon from 'public/icons/pinFilled.svg'
import { twMerge } from 'tailwind-merge'
import { getBoardStyle } from '@/lib/utils/board'
import { useBoard } from '../../_contexts/BoardContext'
import ShareBtn from '../Share'
import { Step1Tooltip } from '../Tooltips'

const DefaultHeader = () => {
  const { data: session } = useSession()
  const { board } = useBoard()
  const { titleClassName } = getBoardStyle(board)

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
          <BoardTutorial step={1} tooltip={<Step1Tooltip />} hasNext>
            <ShareBtn />
          </BoardTutorial>
        ) : (
          <ShareBtn />
        )
      }
      className={twMerge('bg-transparent', titleClassName)}
      shadow={false}
    />
  )
}

export default DefaultHeader
