import Header from '@/components/Header'
import { DecorateTutorialProvider } from '@/components/Tutorial'
import Image from 'next/image'
import OpenStickerModalBtn from './_components/OpenStickerModalBtn'
import SelectSticker from './_components/SelectStickerModal'
import Sticker from './_components/Sticker'
import SubmitBtn from './_components/SubmitBtn'
import { StickerModalProvider } from './_contexts/ModalContext'
import { StickerProvider } from './_contexts/StickerContext'

interface BoardDecoratePageProps {
  searchParams: {
    imageUrl: string
  }
}

const BoardDecoratePage = async ({ searchParams }: BoardDecoratePageProps) => {
  const { imageUrl } = searchParams

  return (
    <DecorateTutorialProvider>
      <div className="flex h-dvh flex-col bg-gray-100">
        <Header title="보드 꾸미기" shadow={false} className="bg-transparent" />
        <StickerProvider>
          <div className="relative flex-1">
            <StickerModalProvider>
              <OpenStickerModalBtn>
                <SelectSticker />
              </OpenStickerModalBtn>
            </StickerModalProvider>
            <div
              id="parent"
              className="relative mx-6 overflow-hidden shadow-screenshot"
            >
              <Sticker />
              <Image
                src={imageUrl}
                alt="screenshot"
                width={1080}
                height={1920}
                className="object-contain"
              />
            </div>
          </div>
        </StickerProvider>
        <div className="mx-5">
          <SubmitBtn />
        </div>
      </div>
    </DecorateTutorialProvider>
  )
}

export default BoardDecoratePage
