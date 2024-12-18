import Header from '@/components/Header'
import Image from 'next/image'
import OpenStickerModalBtn from './_components/OpenStickerModalBtn'
import CreateSticker from './_components/StickerModal'
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
    <div className="h-dvh bg-gray-100">
      <Header title="보드 꾸미기" shadow={false} className="bg-transparent" />
      <StickerProvider>
        <div className="relative">
          <StickerModalProvider>
            <OpenStickerModalBtn>
              <CreateSticker />
            </OpenStickerModalBtn>
          </StickerModalProvider>
          <div className="h-[480px] w-[270px]">
            <Image src={imageUrl} alt="screenshot" width={1080} height={1920} />
          </div>
        </div>
      </StickerProvider>
    </div>
  )
}

export default BoardDecoratePage
