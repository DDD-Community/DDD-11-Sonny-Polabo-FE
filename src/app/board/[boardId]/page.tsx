import { getBoard } from '@/lib'
import { Metadata } from 'next'
import BoardHeader from '@/app/board/[boardId]/_components/BoardHeader'
import PolaroidDetailList from '@/app/board/[boardId]/_components/PolaroidDetailList'
import CreatePolaroid from './_components/CreatePolaroidModal'
import { ModalProvider } from './_components/CreatePolaroidModal/ModalContext'
import Empty from './_components/Empty'
import OpenModalBtn from './_components/OpenModalBtn'
import { TutorialProvider } from './_components/Tutorial/TutorialContext'

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
    <TutorialProvider>
      <div
        className="relative flex h-dvh flex-col bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <BoardHeader board={board} />
        {board.items.length === 0 ? (
          <Empty />
        ) : (
          <PolaroidDetailList board={board} boardId={boardId} />
        )}

        <ModalProvider>
          <OpenModalBtn polaroidNum={board.items.length}>
            <CreatePolaroid id={boardId} />
          </OpenModalBtn>
        </ModalProvider>
      </div>
    </TutorialProvider>
  )
}

export default BoardPage
