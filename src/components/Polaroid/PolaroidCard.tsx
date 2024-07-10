import { PolaroidImageProps } from '@/types'
import Base, { PolaroidImage } from './Base'

interface PolaroidCardProps extends PolaroidImageProps {
  oneLineMessage: string
}

function PolaroidCard({ imageUrl, oneLineMessage, filter }: PolaroidCardProps) {
  return (
    <Base>
      <Base.Top>
        <PolaroidImage imageUrl={imageUrl} filter={filter} />
      </Base.Top>
      <Base.Bottom>
        <p>{oneLineMessage}</p>
      </Base.Bottom>
    </Base>
  )
}

export default PolaroidCard
