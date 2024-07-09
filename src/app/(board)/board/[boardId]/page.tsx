import Empty from '@/components/Board/Empty'
import BoardHeader from '@/components/Board/Header'
import Modal from '@/components/Board/Modal'
import Polaroid from '@/components/Polaroid'
import PolaroidMaker from '@/components/Polaroid/PolaroidMaker'
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

      {show && (
        <Modal>
          <Link href={`${headerPathname}`} className="w-full h-fullz-10" />
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <PolaroidMaker />
          </div>
        </Modal>
      )}
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
