import PolaroidList from '@/app/board/[boardId]/_components/PolaroidList'
import { auth } from '@/auth'
import Hamburger from '@/components/HamburgerMenu'
import Header from '@/components/Header'
import { getBoard } from '@/lib'
import { Metadata } from 'next'
import PinIcon from 'public/icons/pinFilled.svg'
import CreatePolaroid from './_components/CreatePolaroidModal'
import { PolaroidModalProvider } from './_components/CreatePolaroidModal/ModalContext'
import Empty from './_components/Empty'
import OpenPolaroidModalBtn from './_components/OpenPolaroidModalBtn'
import OpenStickerModalBtn from './_components/OpenStickerModalBtn'
import ShareBtn from './_components/Share'
import Tutorial from './_components/Tutorial'
import { Step1Tooltip } from './_components/Tutorial/Tooltips'
import { TutorialProvider } from './_components/Tutorial/TutorialContext'
import { StickerModalProvider } from './_components/StickerModal/ModalContext'
import CreateSticker from './_components/StickerModal'

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

  const session = await auth()

  return (
    <TutorialProvider>
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
            session ? (
              <Tutorial step={1} tooltip={<Step1Tooltip />} hasNext>
                <ShareBtn boardName={board.title} />
              </Tutorial>
            ) : (
              <ShareBtn boardName={board.title} />
            )
          }
        />
        {board.items.length === 0 ? (
          <Empty />
        ) : (
          <PolaroidList polaroids={board.items} />
        )}

        <div className="absolute bottom-10 right-4">
          <StickerModalProvider>
            <OpenStickerModalBtn>
              <CreateSticker />
            </OpenStickerModalBtn>
          </StickerModalProvider>

          <PolaroidModalProvider>
            <OpenPolaroidModalBtn polaroidNum={board.items.length}>
              <CreatePolaroid id={boardId} />
            </OpenPolaroidModalBtn>
          </PolaroidModalProvider>
        </div>
      </div>
    </TutorialProvider>
  )
}

export default BoardPage
