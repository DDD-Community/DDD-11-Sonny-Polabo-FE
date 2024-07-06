import Image from 'next/image'

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
    <div className="w-48 shadow-lg rounded-lg overflow-hidden m-4 bg-gray-200">
      <div className="p-4 pt-8">
        <Image
          src={imageUrl}
          alt="Polaroid"
          width={160}
          height={192}
          className="w-full h-48 object-cover"
          style={{ filter: filterStyle }}
        />
      </div>
      <div className="p-4 bg-gradient-polaroid">
        <p className="text-center">{oneLineMessage}</p>
      </div>
    </div>
  )
}

Polaroid.defaultProps = {
  filter: 1,
}

export default Polaroid
