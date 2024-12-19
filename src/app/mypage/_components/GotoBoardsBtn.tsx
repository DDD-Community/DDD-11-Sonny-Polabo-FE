'use client'

import MenuLink from '@/components/Menu/MenuLink'
import { GTM_EVENT } from '@/lib'
import { sendGTMEvent } from '@next/third-parties/google'
import Link from 'next/link'
import JoinedBoardIcon from 'public/icons/sketchIcons-1.svg'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import PinIcon from 'public/icons/sketchIcons-4.svg'

interface GoToBoardsBtnProps {
  name: string
  icon: ReactNode
  number: number
  className?: React.ComponentProps<'a'>['className']
  linkTo: string
  onClick?: () => void
}

const GoToBoardsBtn = ({
  name,
  icon,
  number,
  className = '',
  linkTo = '',
  onClick = () => {},
}: GoToBoardsBtnProps) => {
  return (
    <Link href={linkTo} onClick={onClick}>
      <div
        className={twMerge(
          'relative flex flex-col items-center gap-2 rounded-[4px] bg-gray-50 px-6 py-3 font-semiBold shadow-myPageBox',
          className,
        )}
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          {icon}
        </div>
        <span className="text-sm">{name}</span>
        <span className="text-2xl leading-8">{number}</span>
      </div>
    </Link>
  )
}

export const MyBoard = ({ totalCount }: { totalCount: number }) => {
  return (
    <div className="flex h-[108px] w-[120px] items-center justify-center">
      <GoToBoardsBtn
        name="내 보드"
        icon={<PinIcon />}
        number={totalCount}
        className="-rotate-[5deg] transform"
        linkTo="/mypage/boards"
        onClick={() => sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_MYBOARD })}
      />
    </div>
  )
}

export const JoinedBoard = ({ totalCount }: { totalCount: number }) => {
  return (
    <div className="flex h-[108px] w-[140px] items-center justify-center">
      <GoToBoardsBtn
        name="참여한 보드"
        icon={<JoinedBoardIcon className="-rotate-90 transform" />}
        number={totalCount}
        className="rotate-[3deg] transform"
        linkTo="/mypage/boards/?participant=true"
        onClick={() => sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_JOINEDBOARD })}
      />
    </div>
  )
}

export const BoardList = () => (
  <MenuLink
    icon={<PinIcon />}
    text="내 보드 목록"
    linkTo="/mypage/boards"
    onClick={() => sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_BOARDLIST })}
  />
)
