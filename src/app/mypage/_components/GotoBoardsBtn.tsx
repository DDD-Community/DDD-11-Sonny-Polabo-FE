import Link from 'next/link'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import MyBoardIcon from 'public/icons/sketchIcons-4.svg'
import JoinedBoardIcon from 'public/icons/sketchIcons-1.svg'
import { getMyBoards } from '@/lib'

interface GoToBoardsBtnProps {
  name: string
  icon: ReactNode
  number: number
  className?: React.ComponentProps<'a'>['className']
}

const GoToBoardsBtn = ({
  name,
  icon,
  number,
  className = '',
}: GoToBoardsBtnProps) => {
  return (
    // TODO: JoinedBoard는 /mypage/boards 두번째 탭으로 이동
    <Link href="/mypage/boards">
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

export const MyBoard = async () => {
  const {
    pagination: { totalCount },
  } = await getMyBoards()
  return (
    <div className="flex h-[108px] w-[120px] items-center justify-center">
      <GoToBoardsBtn
        name="내 보드"
        icon={<MyBoardIcon />}
        number={totalCount}
        className="-rotate-[5deg] transform"
      />
    </div>
  )
}

export const JoinedBoard = () => {
  return (
    <div className="flex h-[108px] w-[140px] items-center justify-center">
      <GoToBoardsBtn
        name="참여한 보드"
        icon={<JoinedBoardIcon className="-rotate-90 transform" />}
        number={23}
        className="rotate-[3deg] transform"
      />
    </div>
  )
}