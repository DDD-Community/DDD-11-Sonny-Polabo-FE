import { getBoard } from '@/lib'
import { Metadata } from 'next'
import BoardPolaroidList from '@/app/board/[boardId]/_components/BoardPolaroidList'
import { BoardContextProvider } from '@/app/board/[boardId]/_contexts/BoardContext'
import { SelectContextProvider } from '@/app/board/[boardId]/_contexts/SelectModeContext'
import Header from '@/app/board/[boardId]/_components/Header'
import CreatePolaroid from './_components/CreatePolaroidModal'
import { ModalProvider } from './_components/CreatePolaroidModal/ModalContext'
import Empty from './_components/Empty'
import OpenModalBtn from './_components/OpenModalBtn'
import { TutorialProvider } from './_contexts/TutorialContext'

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

  const background = `/images/boardThemas/${board.options.THEMA}.png`

  return (
    <SelectContextProvider>
      <BoardContextProvider boardId={boardId} board={board}>
        <TutorialProvider>
          <div
            className="relative flex h-dvh flex-col bg-cover bg-bottom"
            style={{ backgroundImage: `url(${background})` }}
          >
            <Header />
            {board.items.length === 0 ? <Empty /> : <BoardPolaroidList />}

            <ModalProvider>
              <OpenModalBtn>
                <CreatePolaroid />
              </OpenModalBtn>
            </ModalProvider>
          </div>
        </TutorialProvider>
      </BoardContextProvider>
    </SelectContextProvider>
  )
}

export default BoardPage
