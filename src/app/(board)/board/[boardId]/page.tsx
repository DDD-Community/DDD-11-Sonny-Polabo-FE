import Empty from '@/components/Board/Empty'
import BoardHeader from '@/components/Board/Header'
import OpenModalBtn from '@/components/Board/OpenModalBtn'
import PolaroidCard from '@/components/Polaroid/PolaroidCard'
import { getBoard } from '@/lib'

interface BoardPageProps {
  params: {
    boardId: string
  }
}

const BoardPage = async ({ params }: BoardPageProps) => {
  const { boardId } = params
  const board = await getBoard(boardId)

  return (
    <div className="flex-1 flex flex-col relative">
      <BoardHeader name={board.title} />
      {board.items.length === 0 ? (
        <Empty />
      ) : (
        board.items.map((item) => (
          <PolaroidCard
            key={item.id}
            imageUrl={item.imageUrl}
            oneLineMessage={item.oneLineMessage}
          />
        ))
      )}

      <OpenModalBtn id={boardId} />
    </div>
  )
}

export default BoardPage
