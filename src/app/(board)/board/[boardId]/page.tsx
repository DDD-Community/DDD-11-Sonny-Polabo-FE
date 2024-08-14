import Hamburger from '@/components/HamburgerMenu'
import Header from '@/components/Header'
import PolaroidCard from '@/components/Polaroid/PolaroidCard'
import { getBoard } from '@/lib'
import { Metadata } from 'next'
import PinIcon from 'public/icons/pinFilled.svg'
import CreatePolaroid from './components/CreatePolaroidModal'
import { ModalProvider } from './components/CreatePolaroidModal/ModalContext'
import Empty from './components/Empty'
import OpenModalBtn from './components/OpenModalBtn'
import ShareBtn from './components/ShareBtn'
import Tutorial from './components/Tutorial'

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
          url: '/images/opengraph-image.png',
          alt: 'Polabo',
        },
      ],
    },
    twitter: {
      title: board.title,
      description: '내 보드를 우리의 소중한 추억들로 꾸며줘!',
      images: [
        {
          url: '/images/opengraph-image.png',
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

  return (
    <div className="relative flex h-dvh flex-col bg-gray-50">
      <Header
        title={
          <div className="flex items-center justify-center gap-[3px] text-center">
            <PinIcon />
            <h1 className="text-md font-semiBold leading-6">{board.title}</h1>
          </div>
        }
        leftButton={<Hamburger />}
        rightButton={
          <Tutorial step={1}>
            <ShareBtn />
          </Tutorial>
        }
      />
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
