import Empty from '@/components/Board/Empty'
import BoardHeader from '@/components/Board/Header'
import { getBoard } from '@/lib'
import { Board } from '@/types'
import Link from 'next/link'
import AddPolaroid from 'public/icons/add_polaroid.svg'

const BoardPage = async ({ params }: { params: { boardId: string } }) => {
  const { boardId } = params
  let board: Board = { id: 0, name: '' }
  try {
    board = await getBoard(boardId)
  } catch (e) {
    console.error(e)
  }

  return (
    <div className="flex-1 flex flex-col relative">
      <BoardHeader name={board.name} />
      <Empty />
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
