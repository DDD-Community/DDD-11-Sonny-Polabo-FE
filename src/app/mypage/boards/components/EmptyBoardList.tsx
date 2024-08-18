'use client'

import Button from '@/components/Button'
import EmptyBoardIcon from 'public/icons/empty_board.svg'
import ArrowRightIcon from 'public/icons/arrow_right.svg'
import { useRouter } from 'next/navigation'

const EmptyBoardList = () => {
  const router = useRouter()
  return (
    <div className="absolute left-[50%] top-[50%] flex -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center">
      <EmptyBoardIcon />
      <span className="my-2 font-jooree text-xl text-gray-900/40">
        보드를 만들어보세요!
      </span>
      <Button
        size="md"
        className="flex items-center justify-center"
        onClick={() => router.push('/board/create')}
      >
        보드 만들러가기
        <ArrowRightIcon fill="#" />
      </Button>
    </div>
  )
}

export default EmptyBoardList
