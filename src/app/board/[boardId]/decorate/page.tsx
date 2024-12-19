import Header from '@/components/Header'
import Image from 'next/image'
import Button from '@/components/Button'
import OpenStickerModalBtn from './_components/OpenStickerModalBtn'
import SelectSticker from './_components/SelectStickerModal'
import { StickerModalProvider } from './_contexts/ModalContext'
import { StickerProvider } from './_contexts/StickerContext'
import Sticker from './_components/Sticker'

interface BoardDecoratePageProps {
  searchParams: {
    imageUrl: string
  }
}

const BoardDecoratePage = async ({ searchParams }: BoardDecoratePageProps) => {
  const { imageUrl } = searchParams

  return (
    <div className="flex h-dvh flex-col bg-gray-100">
      <Header title="보드 꾸미기" shadow={false} className="bg-transparent" />
      <StickerProvider>
        <div className="relative flex-1">
          <StickerModalProvider>
            <OpenStickerModalBtn>
              <SelectSticker />
            </OpenStickerModalBtn>
          </StickerModalProvider>
          <div className="relative h-full overflow-hidden">
            <Sticker />
            <Image
              src={imageUrl}
              alt="screenshot"
              className="object-contain"
              fill
            />
          </div>
        </div>
      </StickerProvider>
      <div className="mx-5">
        <Button
          size="lg"
          variant="secondary"
          className="mx-auto mb-10 mt-5 w-full"
        >
          꾸미기 완료
        </Button>
      </div>
    </div>
  )
}

export default BoardDecoratePage
