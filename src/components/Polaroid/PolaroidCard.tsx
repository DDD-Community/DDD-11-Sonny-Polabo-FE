import { PolaroidImageProps } from '@/types'
import Base, { PolaroidImage } from './Base'

interface PolaroidCardProps extends PolaroidImageProps {
  oneLineMessage: string
}

function PolaroidCard({ imageUrl, oneLineMessage, filter }: PolaroidCardProps) {
  // random rotate -2 < x < -1 | 1 < x < 2
  const rotate =
    Math.random() > 0.5 ? Math.random() * 1 + 1 : Math.random() * -1 - 1

  return (
    <div
      className="flex w-[144px] transform items-center justify-center"
      style={{ rotate: `${rotate}deg` }}
    >
      <Base>
        <Base.Top size="sm">
          <PolaroidImage imageUrl={imageUrl} filter={filter} />
        </Base.Top>
        <Base.Bottom>
          <p className="h-5 text-xs">{oneLineMessage}</p>
        </Base.Bottom>
      </Base>
    </div>
  )
}

export default PolaroidCard
