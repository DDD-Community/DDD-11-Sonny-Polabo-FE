import Image from 'next/image'
import Base from './Base'

interface PolaroidProps {
  imageUrl: string
  oneLineMessage: string
  filter?: number
}

function Polaroid({ imageUrl, oneLineMessage, filter }: PolaroidProps) {
  let filterStyle = ''
  if (filter === 1) {
    filterStyle =
      'sepia(0.2) contrast(1.3) brightness(1.0) saturate(1.2) blur(0.7px)'
  } else if (filter === 2) {
    filterStyle =
      'sepia(0.4) contrast(1.1) brightness(0.9) saturate(0.8) hue-rotate(-20deg) blur(0.6px)'
  } else {
    filterStyle = 'none'
  }

  return (
    <Base>
      <Base.Top>
        <Image
          src={imageUrl}
          alt="Polaroid"
          width={160}
          height={192}
          className="w-full h-48 object-cover"
          style={{ filter: filterStyle }}
        />
      </Base.Top>
      <Base.Bottom>
        <p className="text-center">{oneLineMessage}</p>
      </Base.Bottom>
    </Base>
  )
}

Polaroid.defaultProps = {
  filter: 1,
}

export default Polaroid
