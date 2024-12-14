import React from 'react'
import { Polaroid } from '@/types'
import PolaroidFrame from '@/components/Polaroid/Base/PolaroidFrame'
import { getPolaroidStyle } from '@/lib/utils/polaroid'
import PolaroidImage from '@/components/Polaroid/Base/PolaroidImage'
import PolaroidDescription from '@/components/Polaroid/Base/PolaroidDescription'
import PolaroidMessage from '@/components/Polaroid/Base/PolaroidMessage'
import PolaroidNickname from '@/components/Polaroid/Base/PolaroidNickname'

const getWidthClass = (length: number) => {
  if (length > 6) {
    return 'w-[280px]'
  }
  return 'w-[304px]'
}

const getPaddingClass = (length: number) => {
  if (length > 6) {
    return 'px-[12px] pb-[12px] pt-[20px]'
  }

  return 'px-[14px] pb-[14px] pt-[22px]'
}

const getMessageClass = (length: number) => {
  if (length > 6) {
    return 'h-[25px] text-[24px] leading-[26px]'
  }

  return 'h-[35px] text-[28px] leading-5'
}

const getFromClass = (length: number) => {
  if (length > 6) {
    return 'h-5 text-[20px] leading-[20px]'
  }

  return 'h-6 text-[23px] leading-4'
}

const groupPolaroidsByLength = (polaroids: Polaroid[]) => {
  const { length } = polaroids

  if (length < 1 || length > 9) {
    return [[]]
  }

  const result = []
  let groupSize

  if (length >= 2 && length < 7) {
    groupSize = 2
  } else if (length >= 6 && length < 10) {
    groupSize = 3
  } else {
    return [polaroids]
  }

  for (let i = 0; i < length; i += groupSize) {
    result.push(polaroids.slice(i, i + groupSize))
  }

  return result
}

interface PolaroidItemProps {
  polaroid: Polaroid
  widthClass: string
  paddingClass: string
  messageClass: string
  fromClass: string
}

const PolaroidItem = ({
  polaroid,
  widthClass,
  fromClass,
  paddingClass,
  messageClass,
}: PolaroidItemProps) => {
  const randomRotate =
    Math.random() > 0.5 ? Math.random() + 1 : Math.random() * -1 - 1

  return (
    <div
      className="flex flex-col justify-center"
      style={{ rotate: `${randomRotate}deg` }}
    >
      <PolaroidFrame
        className={widthClass}
        themaKey={polaroid.options.THEMA}
        fontKey={polaroid.options.FONT}
      >
        <div
          className={paddingClass}
          style={getPolaroidStyle(polaroid.options.THEMA)}
        >
          <PolaroidImage imageUrl={polaroid.imageUrl} />
        </div>
        <PolaroidDescription themaKey={polaroid.options.THEMA}>
          <PolaroidMessage
            className={messageClass}
            message={polaroid.oneLineMessage}
          />
          <PolaroidNickname
            className={fromClass}
            nickName={polaroid.nickname}
          />
        </PolaroidDescription>
      </PolaroidFrame>
    </div>
  )
}

const PolaroidList = ({ polaroids }: { polaroids: Polaroid[] }) => {
  const { length } = polaroids
  const groupedPolaroids = groupPolaroidsByLength(polaroids)

  return (
    <div>
      <div className="mx-12 flex flex-col gap-8">
        {groupedPolaroids.map((rows: Polaroid[]) => (
          <div
            key={`rows_${rows[0].id}`}
            className="flex items-center justify-center gap-8"
          >
            {rows.map((polaroid: Polaroid) => (
              <PolaroidItem
                polaroid={polaroid}
                key={polaroid.id}
                widthClass={getWidthClass(length)}
                paddingClass={getPaddingClass(length)}
                messageClass={getMessageClass(length)}
                fromClass={getFromClass(length)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PolaroidList
