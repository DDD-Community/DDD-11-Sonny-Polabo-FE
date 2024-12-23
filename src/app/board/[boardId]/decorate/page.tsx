import Header from '@/components/Header'
import { DecorateTutorialProvider } from '@/components/Tutorial'
import DecorateScreenshot from '@/app/board/[boardId]/decorate/_components/DecorateScreenshot'
import OpenStickerModalBtn from './_components/OpenStickerModalBtn'
import SelectSticker from './_components/SelectStickerModal'
import { StickerModalProvider } from './_contexts/ModalContext'
import { StickerProvider } from './_contexts/StickerContext'

const BoardDecoratePage = () => {
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
            <DecorateScreenshot />
          </div>
        </StickerProvider>
      </div>
    </DecorateTutorialProvider>
  )
}

export default BoardDecoratePage
