import React from 'react'
import { Polaroid } from '@/types'
import PolaroidFrame from '@/components/Polaroid/Base/PolaroidFrame'
import { getPolaroidStyle } from '@/lib/utils/polaroid'
import PolaroidImage from '@/components/Polaroid/Base/PolaroidImage'
import PolaroidDescription from '@/components/Polaroid/Base/PolaroidDescription'
import PolaroidMessage from '@/components/Polaroid/Base/PolaroidMessage'
import PolaroidNickname from '@/components/Polaroid/Base/PolaroidNickname'
import {
  getFromClass,
  getMessageClass,
  getPaddingClass,
  getWidthClass,
  groupPolaroidsByLength,
} from '@/app/board/[boardId]/screenshot/_components/utils'

interface ExportPolaroidItemProps {
  polaroid: Polaroid
  widthClass: string
  paddingClass: string
  messageClass: string
  fromClass: string
}

const ExportPolaroidItem = ({
  polaroid,
  widthClass,
  fromClass,
  paddingClass,
  messageClass,
}: ExportPolaroidItemProps) => {
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

const ExportPolaroidList = ({ polaroids }: { polaroids: Polaroid[] }) => {
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
              <ExportPolaroidItem
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

export default ExportPolaroidList
