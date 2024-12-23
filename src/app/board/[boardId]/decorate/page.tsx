import { DecorateTutorialProvider } from '@/components/Tutorial'
import DecorateScreenshot from '@/app/board/[boardId]/decorate/_components/DecorateScreenshot'
import { StickerModalProvider } from './_contexts/ModalContext'
import { StickerProvider } from './_contexts/StickerContext'

const BoardDecoratePage = () => {
  return (
    <DecorateTutorialProvider>
      <div className="h-dvh bg-gray-100">
        <StickerProvider>
          <StickerModalProvider>
            <DecorateScreenshot />
          </StickerModalProvider>
        </StickerProvider>
      </div>
    </DecorateTutorialProvider>
  )
}

export default BoardDecoratePage
