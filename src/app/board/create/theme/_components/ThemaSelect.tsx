'use client'

import Button from '@/components/Button'
import { BOARDTHEMAS, GTM_EVENT, ORDERED_BOARDTHEMAS } from '@/lib/constants'
import { BoardThemaKeyType } from '@/types'
import { sendGTMEvent } from '@next/third-parties/google'
import Image from 'next/image'
import CheckIcon from 'public/icons/check.svg'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface ThemaSelectItemProps {
  themaType: BoardThemaKeyType
  isCurrentThema: boolean
  setCurrentThema: (thema: BoardThemaKeyType) => void
}

const ThemaSelectItem = ({
  themaType,
  isCurrentThema,
  setCurrentThema,
}: ThemaSelectItemProps) => {
  const handleClick = () => {
    sendGTMEvent({ event: GTM_EVENT.CLICK_THEME(themaType) })
    setCurrentThema(themaType)
  }
  return (
    <div
      className={twMerge(
        'relative flex flex-col items-center justify-center gap-2.5',
      )}
    >
      {isCurrentThema && (
        <CheckIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+15px)] scale-[3] text-gray-950" />
      )}

      <div
        className={twMerge(
          'h-[178px] w-[140px] max-w-full overflow-hidden rounded-lg border-2',
          isCurrentThema ? 'border-gray-950' : 'border-gray-300',
        )}
      >
        <Image
          src={`/images/boardThemas/${themaType}.png`}
          alt="polabo"
          width={140}
          height={178}
          onClick={handleClick}
          className="object-contain"
        />
      </div>
      <span
        className={twMerge(
          'text-md font-semiBold',
          isCurrentThema ? 'text-gray-950' : 'text-gray-400',
        )}
      >
        {BOARDTHEMAS[themaType].title}
      </span>
    </div>
  )
}

interface ThemaSelectProps {
  boardName: string
  createBoard: (boardName: string, boardThema: BoardThemaKeyType) => void
}

const ThemaSelect = ({ createBoard, boardName }: ThemaSelectProps) => {
  const [currentThema, setCurrentThema] = useState<BoardThemaKeyType>(
    ORDERED_BOARDTHEMAS[0],
  )

  return (
    <div className="flex h-[calc(100%-64px)] flex-col">
      <div className="grid h-full auto-rows-min grid-cols-2 gap-2.5 overflow-y-scroll px-4 pt-3 scrollbar-hide">
        {ORDERED_BOARDTHEMAS.map((key) => (
          <ThemaSelectItem
            key={key}
            themaType={key}
            isCurrentThema={currentThema === key}
            setCurrentThema={setCurrentThema}
          />
        ))}
      </div>
      <Button
        size="lg"
        className="mx-auto mb-12"
        onClick={() => {
          sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_DONE })
          createBoard(boardName, currentThema)
        }}
      >
        완료
      </Button>
    </div>
  )
}

export default ThemaSelect
