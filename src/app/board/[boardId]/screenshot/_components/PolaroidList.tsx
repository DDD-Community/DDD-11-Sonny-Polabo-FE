import React from 'react'
import { Polaroid } from '@/types'
import PolaroidFrame from '@/components/Polaroid/Base/PolaroidFrame'
import { getPolaroidStyle } from '@/lib/utils/polaroid'
import PolaroidImage from '@/components/Polaroid/Base/PolaroidImage'
import PolaroidDescription from '@/components/Polaroid/Base/PolaroidDescription'
import PolaroidMessage from '@/components/Polaroid/Base/PolaroidMessage'
import PolaroidNickname from '@/components/Polaroid/Base/PolaroidNickname'
import {
  getClassesByLength,
  groupPolaroidsByLength,
} from '@/app/board/[boardId]/screenshot/_components/utils'

interface PolaroidItemProps {
  polaroid: Polaroid
  length: number
}

const PolaroidItem = ({ polaroid, length }: PolaroidItemProps) => {
  const randomRotate =
    Math.random() > 0.5 ? Math.random() + 1 : Math.random() * -1 - 1

  const classes = getClassesByLength(length)

  return (
    <div
      className="flex flex-col justify-center"
      style={{ rotate: `${randomRotate}deg` }}
    >
      <PolaroidFrame
        className={classes.width}
        themaKey={polaroid.options.THEMA}
        fontKey={polaroid.options.FONT}
      >
        <div
          className={classes.padding}
          style={getPolaroidStyle(polaroid.options.THEMA)}
        >
          <PolaroidImage imageUrl={polaroid.imageUrl} />
        </div>
        <PolaroidDescription themaKey={polaroid.options.THEMA}>
          <PolaroidMessage
            className={classes.message}
            message={polaroid.oneLineMessage}
          />
          <PolaroidNickname
            className={classes.from}
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
                length={length}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PolaroidList
