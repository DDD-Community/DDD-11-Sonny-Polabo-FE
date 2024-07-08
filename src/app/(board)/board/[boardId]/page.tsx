import Empty from '@/components/Board/Empty'
import BoardHeader from '@/components/Board/Header'
import Polaroid from '@/components/Polaroid'
import { getBoard } from '@/lib'
import Link from 'next/link'
import AddPolaroid from 'public/icons/add_polaroid.svg'

const BoardPage = async ({ params }: { params: { boardId: string } }) => {
  const { boardId } = params
  const board = await getBoard(boardId)

  return (
    <div className="flex-1 flex flex-col relative">
      <BoardHeader name={board.title} />

      {board.items.length === 0 ? (
        <Empty />
      ) : (
        <div className="flex-1 flex flex-wrap justify-center">
          {board.items.map((item) => (
            <Polaroid
              key={item.id}
              imageUrl={item.imageUrl}
              oneLineMessage={item.oneLineMessage}
            />
          ))}
        </div>
      )}

      <Link
        href={`/board/${boardId}/polaroid/create`}
        className="absolute right-10 bottom-10"
      >
        <AddPolaroid />
      </Link>
    </div>
  )
}

export default BoardPage
