import Empty from '@/app/(board)/board/[boardId]/components/Empty'

import PolaroidCard from '@/components/Polaroid/PolaroidCard'
import { getBoard } from '@/lib'
import BoardHeader from './components/Header'
import OpenModalBtn from './components/OpenModalBtn'

interface BoardPageProps {
  params: {
    boardId: string
  }
}

const BoardPage = async ({ params }: BoardPageProps) => {
  const { boardId } = params
  const board = await getBoard(boardId)

  console.log('>> BOARD: ', board)

  return (
    <div className="h-dvh flex flex-col relative">
      <BoardHeader name={board.title} />
      {board.items.length === 0 ? (
        <Empty />
      ) : (
        <div className="overflow-y-scroll overflow-x-hidden w-[280px] m-auto scrollbar-hide">
          <div className="grid grid-cols-2">
            {board.items.map((item) => (
              <PolaroidCard
                key={item.id}
                imageUrl={item.imageUrl}
                oneLineMessage={item.oneLineMessage}
              />
            ))}
          </div>
        </div>
      )}

      <OpenModalBtn id={boardId} polaroidNum={board.items.length} />
    </div>
  )
}

export default BoardPage
