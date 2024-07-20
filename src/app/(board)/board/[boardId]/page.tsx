import PolaroidCard from '@/components/Polaroid/PolaroidCard'
import { getBoard } from '@/lib'
import CreatePolaroid from './components/CreatePolaroidModal'
import { ModalProvider } from './components/CreatePolaroidModal/ModalContext'
import Empty from './components/Empty'
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
        <div className="overflow-y-scroll overflow-x-hidden w-[280px] mx-auto scrollbar-hide">
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

      <ModalProvider>
        <OpenModalBtn polaroidNum={board.items.length}>
          <CreatePolaroid id={boardId} />
        </OpenModalBtn>
      </ModalProvider>
    </div>
  )
}

export default BoardPage
