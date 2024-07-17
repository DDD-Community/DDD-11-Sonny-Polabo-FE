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
    <div className="flex-1 flex flex-col relative">
      <BoardHeader name={board.title} />
      {board.items.length === 0 ? (
        <Empty />
      ) : (
        <div className="grid grid-cols-2">
          {board.items.map((item) => (
            <PolaroidCard
              key={item.id}
              imageUrl={item.imageUrl}
              oneLineMessage={item.oneLineMessage}
            />
          ))}
        </div>
      )}

      <OpenModalBtn id={boardId} />
    </div>
  )
}

export default BoardPage
