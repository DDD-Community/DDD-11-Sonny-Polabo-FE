import Header from '@/app/board/[boardId]/_components/Header'
import PolaroidList from '@/app/board/[boardId]/_components/PolaroidList'
import { BoardContextProvider } from '@/app/board/[boardId]/_contexts/BoardContext'
import { SelectContextProvider } from '@/app/board/[boardId]/_contexts/SelectModeContext'
import { BoardTutorialProvider } from '@/components/Tutorial'
import { getBoard } from '@/lib'
import { Metadata } from 'next'
import { getBoardStyle } from '@/lib/utils/board'
import CreatePolaroid from './_components/CreatePolaroidModal'
import { ModalProvider } from './_components/CreatePolaroidModal/ModalContext'
import Empty from './_components/Empty'
import OpenModalBtn from './_components/OpenModalBtn'

export async function generateMetadata({
  params,
}: BoardPageProps): Promise<Metadata> {
  const { boardId } = params
  const board = await getBoard(boardId)

  return {
    openGraph: {
      title: board.title,
      description: '내 보드를 우리의 소중한 추억들로 꾸며줘!',
      images: [
        {
          url: '/images/opengraph-image-v3.png',
          alt: 'Polabo',
        },
      ],
    },
    twitter: {
      title: board.title,
      description: '내 보드를 우리의 소중한 추억들로 꾸며줘!',
      images: [
        {
          url: '/images/opengraph-image-v3.png',
          alt: 'Polabo',
        },
      ],
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
  const { backgroundImage } = getBoardStyle(board)

  return (
    <SelectContextProvider>
      <BoardContextProvider boardId={boardId} board={board}>
        <BoardTutorialProvider>
          <div
            className="relative flex h-dvh flex-col bg-cover bg-bottom"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <Header />
            {board.items.length === 0 ? <Empty /> : <PolaroidList />}

            <ModalProvider>
              <OpenModalBtn>
                <CreatePolaroid />
              </OpenModalBtn>
            </ModalProvider>
          </div>
        </BoardTutorialProvider>
      </BoardContextProvider>
    </SelectContextProvider>
  )
}

export default BoardPage
