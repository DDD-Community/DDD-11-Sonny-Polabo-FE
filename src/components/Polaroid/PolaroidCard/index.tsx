import { Polaroid } from '@/types'
import PolaroidImage from '@/components/Polaroid/Base/PolaroidImage'
import PolaroidFrame from '@/components/Polaroid/Base/PolaroidFrame'
import PolaroidDescription from '@/components/Polaroid/Base/PolaroidDescription'
import PolaroidMessage from '@/components/Polaroid/Base/PolaroidMessage'
import PolaroidNickname from '@/components/Polaroid/Base/PolaroidNickname'

interface PolaroidCardProps {
  polaroid: Polaroid
}

function PolaroidCard({ polaroid }: PolaroidCardProps) {
  return (
    <PolaroidFrame className="cursor-pointer">
      <div className="p-2">
        <PolaroidImage imageUrl={polaroid.imageUrl} />
      </div>
      <PolaroidDescription>
        <PolaroidMessage
          className="h-6 text-sm leading-5"
          message={polaroid.oneLineMessage}
        />
        <PolaroidNickname
          className="h-3 text-xs leading-3"
          nickName={polaroid.nickname}
        />
      </PolaroidDescription>
    </PolaroidFrame>
  )
}

export default PolaroidCard
