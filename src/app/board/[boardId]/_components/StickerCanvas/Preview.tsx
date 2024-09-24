import Image from 'next/image'
import CloseIcon from 'public/icons/close.svg'
import SizeIcon from 'public/icons/size.svg'
import { useEffect, useState } from 'react'
import { useSticker } from '../StickerModal/StickerContext'

const Preview = () => {
  const { selectedSticker, setSelectedSticker } = useSticker()
  const [mouseDown, setMouseDown] = useState(false)
  const [transform, setTransform] = useState({ rotate: 0, scale: 1 })
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 })

  const handleMouseDown = (event: MouseEvent) => {
    setMouseDown(true)
    setInitialPosition({ x: event.clientX, y: event.clientY })
  }
  const handleMouseMove = (event: MouseEvent) => {
    if (!mouseDown) return
    const dx = event.clientX - initialPosition.x
    const dy = event.clientY - initialPosition.y
    const newRotate = Math.atan2(dy, dx) * (180 / Math.PI)
    const newScale = 1 + Math.sqrt(dx * dx + dy * dy) / 100
    setTransform({ rotate: newRotate, scale: newScale })
  }

  const handleMouseUp = () => {
    setMouseDown(false)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [mouseDown, initialPosition])

  return (
    <div className="absolute left-1/2 -translate-x-1/2">
      <div
        className="relative h-[90px] w-[90px] border border-gray-950"
        style={{
          transform: `rotate(${transform.rotate}deg) scale(${transform.scale})`,
        }}
      >
        <div
          className="absolute -right-3 -top-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-1000"
          onClick={() => setSelectedSticker('')}
        >
          <CloseIcon className="text-gray-0" />
        </div>
        <Image
          src={`/stickers/${parseInt(selectedSticker.split('-')[0], 10)}/${selectedSticker}`}
          alt="Sticker"
          width={90}
          height={90}
        />
        <div
          className="absolute -bottom-3 -right-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-1000"
          onMouseDown={handleMouseDown}
        >
          <SizeIcon />
        </div>
      </div>
    </div>
  )
}

export default Preview
