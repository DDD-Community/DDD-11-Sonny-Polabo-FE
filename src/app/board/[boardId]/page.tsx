import { getBoard } from '@/lib'
import { Metadata } from 'next'
import BoardHeader from '@/app/board/[boardId]/_components/BoardHeader'
import PolaroidDetailList from '@/app/board/[boardId]/_components/PolaroidDetailList'
import { BoardContextProvider } from '@/app/board/[boardId]/_contexts/BoardContext'
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
    <BoardContextProvider boardId={boardId} board={board}>
      <TutorialProvider>
        <div
          className="relative flex h-dvh flex-col bg-cover"
          style={{ backgroundImage: `url(${background})` }}
        >
          <BoardHeader title={board.title} />
          {board.items.length === 0 ? <Empty /> : <PolaroidDetailList />}

          <ModalProvider>
            <OpenModalBtn>
              <CreatePolaroid />
            </OpenModalBtn>
          </ModalProvider>
        </div>
      </TutorialProvider>
    </BoardContextProvider>
  )
}

export default BoardPage
