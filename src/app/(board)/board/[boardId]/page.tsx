import Empty from '@/components/Board/Empty'
import BoardHeader from '@/components/Board/Header'
import CreatePolaroidModal from '@/components/Board/Modal'
import Polaroid from '@/components/Polaroid'
import { getBoard } from '@/lib'
import { headers } from 'next/headers'
import Link from 'next/link'
import AddPolaroid from 'public/icons/add_polaroid.svg'

interface BoardPageProps {
  params: {
    boardId: string
  }
  searchParams: Record<string, string> | null | undefined
}

const BoardPage = async ({ params, searchParams }: BoardPageProps) => {
  const { boardId } = params
  const board = await getBoard(boardId)

  const show = searchParams?.show

  // get current path
  const headersList = headers()
  const headerPathname = headersList.get('x-pathname') || ''

  return (
    <div className="flex-1 flex flex-col relative">
      <BoardHeader name={board.title} />

      {board.items.length === 0 ? (
        <Empty />
      ) : (
        <div>
          {board.items.map((item) => (
            <Polaroid
              key={item.id}
              imageUrl={item.imageUrl}
              oneLineMessage={item.oneLineMessage}
            />
          ))}
        </div>
      )}

      {show && <CreatePolaroidModal headerPathname={headerPathname} />}
      <Link
        href={`${headerPathname}?show=true`}
        className="absolute right-10 bottom-10"
      >
        <AddPolaroid />
      </Link>
    </div>
  )
}

export default BoardPage
