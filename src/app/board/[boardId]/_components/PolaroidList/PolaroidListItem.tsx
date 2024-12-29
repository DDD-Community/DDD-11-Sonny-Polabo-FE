import { useEffect, useRef, useState } from 'react'
import { Polaroid } from '@/types'
import PolaroidCard from '@/components/Polaroid/PolaroidCard'
import { BoardTutorial } from '@/components/Tutorial'
import { useSession } from 'next-auth/react'
import { Step3Tooltip } from '../Tooltips'

interface PolaroidListItemProps {
  item: Polaroid
  PolaroidCardClassName?: string
  onClick: () => void
  isFirstItem: boolean
}

const PolaroidListItem = ({
  item,
  onClick,
  PolaroidCardClassName = '',
  isFirstItem,
}: PolaroidListItemProps) => {
  const [rotate, setRotate] = useState<number>(0)
  const { data: session } = useSession()
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 },
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const randomRotate =
      Math.random() > 0.5 ? Math.random() + 1 : Math.random() * -1 - 1
    setRotate(randomRotate)
  }, [])

  const renderItem = (
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

  return (
    <div ref={ref}>
      {isVisible &&
        (isFirstItem ? (
          <BoardTutorial
            step={session ? 3 : 2}
            tooltip={<Step3Tooltip />}
            hasNext={false}
            targetStyle="FIT"
            targetStyleProperites={{
              rotate: `${rotate}deg`,
              borderRadius: '2px',
            }}
          >
            {renderItem}
          </BoardTutorial>
        ) : (
          renderItem
        ))}
    </div>
  )
}

export default PolaroidListItem
