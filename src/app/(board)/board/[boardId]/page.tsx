import PolaroidCard from '@/components/Polaroid/PolaroidCard'
import { getBoard } from '@/lib'
import { Metadata } from 'next'
import CreatePolaroid from './components/CreatePolaroidModal'
import { ModalProvider } from './components/CreatePolaroidModal/ModalContext'
import Empty from './components/Empty'
import BoardHeader from './components/Header'
import OpenModalBtn from './components/OpenModalBtn'

export async function generateMetadata({
  params,
}: BoardPageProps): Promise<Metadata> {
  const { boardId } = params
  const board = await getBoard(boardId)

  return {
    openGraph: {
      title: board.title,
      description: '내 보드를 우리의 소중한 추억들로 꾸며줘!',
    },
    twitter: {
      title: board.title,
      description: '내 보드를 우리의 소중한 추억들로 꾸며줘!',
    },
  }
}

interface BoardPageProps {
  params: {
    boardId: string
  }
}

const BoardPage = async ({ params }: BoardPageProps) => {
  const { boardId } = params
  const board = await getBoard(boardId)

  return (
    <div className="relative flex h-dvh flex-col bg-gray-50">
      <BoardHeader name={board.title} />
      {board.items.length === 0 ? (
        <Empty />
      ) : (
        <div className="mx-auto flex-1 overflow-x-hidden overflow-y-scroll scrollbar-hide">
          <div className="grid grid-cols-2 gap-3 p-[10px]">
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

      <ModalProvider>
        <OpenModalBtn polaroidNum={board.items.length}>
          <CreatePolaroid id={boardId} />
        </OpenModalBtn>
      </ModalProvider>
    </div>
  )
}

export default BoardPage
