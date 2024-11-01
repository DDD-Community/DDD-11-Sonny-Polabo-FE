import { Polaroid } from '@/types'
import PolaroidImage from '@/components/Polaroid/Base/PolaroidImage'
import PolaroidFrame from '@/components/Polaroid/Base/PolaroidFrame'
import PolaroidDescription from '@/components/Polaroid/Base/PolaroidDescription'
import PolaroidMessage from '@/components/Polaroid/Base/PolaroidMessage'
import PolaroidNickname from '@/components/Polaroid/Base/PolaroidNickname'
import { getPolaroidStyle } from '@/lib/utils/polaroid'

interface PolaroidCardProps {
  polaroid: Polaroid
  onClick?: () => void
}

function PolaroidCard({ polaroid, onClick = () => {} }: PolaroidCardProps) {
  return (
    <PolaroidFrame
      className="cursor-pointer"
      onClick={onClick}
      themaKey={polaroid.options.THEMA}
      fontKey={polaroid.options.FONT}
    >
      <div className="p-2" style={getPolaroidStyle(polaroid.options.THEMA)}>
        <PolaroidImage imageUrl={polaroid.imageUrl} />
      </div>
      <PolaroidDescription themaKey={polaroid.options.THEMA}>
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
