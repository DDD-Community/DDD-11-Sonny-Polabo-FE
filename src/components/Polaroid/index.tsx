import Image from 'next/image'

function Polaroid({
  imageUrl,
  oneLineMessage,
  filter,
}: {
  imageUrl: string
  oneLineMessage: string
  filter: number
}) {
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
    <div
      className="w-48 shadow-lg rounded-lg overflow-hidden m-4"
      style={{ background: '#E5E5E5' }}
    >
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
      <div
        className="p-4"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #ECECEC',
        }}
      >
        <p className="text-center">{oneLineMessage}</p>
      </div>
    </div>
  )
}

export default Polaroid
