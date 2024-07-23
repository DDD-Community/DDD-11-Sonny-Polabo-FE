'use client'

import { PolaroidImageProps } from '@/types'
import { useEffect, useState } from 'react'
import Base, { PolaroidImage } from './Base'
import PolaroidDetailModal from './PolaroidDetailModal'

interface PolaroidCardProps extends PolaroidImageProps {
  oneLineMessage: string
}

function PolaroidCard({ imageUrl, oneLineMessage, filter }: PolaroidCardProps) {
  // random rotate -2 < x < -1 | 1 < x < 2
  const [rotate, setRotate] = useState<number>(0)
  useEffect(() => {
    const randomRotate =
      Math.random() > 0.5 ? Math.random() * 1 + 1 : Math.random() * -1 - 1
    setRotate(randomRotate)
  }, [])

  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <div
        className="flex w-[144px] transform cursor-pointer items-center justify-center"
        style={{ rotate: `${rotate}deg` }}
        onClick={() => setIsOpen(true)}
      >
        <Base size="sm">
          <Base.Top>
            <PolaroidImage imageUrl={imageUrl} filter={filter} />
          </Base.Top>
          <Base.Bottom>
            <p className="h-5">{oneLineMessage}</p>
          </Base.Bottom>
        </Base>
      </div>
      <PolaroidDetailModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        imageUrl={imageUrl}
        oneLineMessage={oneLineMessage}
      />
    </>
  )
}

export default PolaroidCard
