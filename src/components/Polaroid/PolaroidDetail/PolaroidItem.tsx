import { Polaroid } from '@/types'
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
    <PolaroidFrame className="mx-auto flex w-[272px] touch-pinch-zoom flex-col overflow-y-hidden">
      <div className="mt-5 px-3">
        <PolaroidImage imageUrl={polaroid.imageUrl} />
      </div>
      <PolaroidDescription>
        <PolaroidMessage
          className="min-h-6 text-xl"
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
