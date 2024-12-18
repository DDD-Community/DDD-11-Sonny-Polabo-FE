import { useEffect, useState } from 'react'
import { Polaroid } from '@/types'
import PolaroidCard from '@/components/Polaroid/PolaroidCard'

interface PolaroidListItemProps {
  item: Polaroid
  PolaroidCardClassName?: string
  onClick: () => void
}

const PolaroidListItem = ({
  item,
  onClick,
  PolaroidCardClassName = '',
}: PolaroidListItemProps) => {
  const [rotate, setRotate] = useState<number>(0)
  useEffect(() => {
    const randomRotate =
      Math.random() > 0.5 ? Math.random() + 1 : Math.random() * -1 - 1
    setRotate(randomRotate)
  }, [])

  return (
    <div
      className="flex flex-col justify-center"
      style={{ rotate: `${rotate}deg` }}
    >
      <PolaroidCard
        className={PolaroidCardClassName}
        polaroid={item}
        onClick={onClick}
      />
    </div>
  )
}

export default PolaroidListItem
