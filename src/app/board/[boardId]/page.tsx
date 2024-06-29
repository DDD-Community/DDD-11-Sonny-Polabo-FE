import { getBoard } from '@/lib'
import { Board } from '@/types'
import Link from 'next/link'

const BoardPage = async ({ params }: { params: { boardId: string } }) => {
  const { boardId } = params
  let board: Board | null = null
  try {
    board = await getBoard(boardId)
  } catch (e) {
    console.error(e)
  }

  if (!board) {
    return <div>보드를 불러오는 중입니다...</div>
  }
  return (
    <div className="min-h-screen">
      <h1>{board.id}</h1>
      <h2>{board.name}</h2>
      <Link href={`/board/${boardId}/polaroid/create`}>폴라로이드 추가</Link>
    </div>
  )
}

export default BoardPage
