import { Polaroid } from '@/types'
import { getPolaroidStyle } from '@/lib/utils/polaroid'
import PolaroidDescription from '../Base/PolaroidDescription'
import PolaroidFrame from '../Base/PolaroidFrame'
import PolaroidImage from '../Base/PolaroidImage'
import PolaroidMessage from '../Base/PolaroidMessage'
import PolaroidNickname from '../Base/PolaroidNickname'

interface PolaroidItemProps {
  polaroid: Polaroid
}

const PolaroidItem = ({ polaroid }: PolaroidItemProps) => {
  return (
    <PolaroidFrame
      className="mx-auto flex w-[272px] touch-pinch-zoom flex-col overflow-y-hidden"
      themaKey={polaroid.options.THEMA}
      fontKey={polaroid.options.FONT}
    >
      <div
        className="px-3 pb-3 pt-5"
        style={getPolaroidStyle(polaroid.options.THEMA)}
      >
        <PolaroidImage imageUrl={polaroid.imageUrl} />
      </div>
      <PolaroidDescription themaKey={polaroid.options.THEMA}>
        <PolaroidMessage
          className="max-h-[60px] min-h-[34px] whitespace-normal break-all text-xl leading-[30px]"
          message={polaroid.oneLineMessage}
        />
        <PolaroidNickname
          className="min-h-5 text-lg"
          nickName={polaroid.nickname}
        />
      </PolaroidDescription>
    </PolaroidFrame>
  )
}

export default PolaroidItem
