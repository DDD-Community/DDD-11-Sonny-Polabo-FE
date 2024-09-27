import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { ThemaKeyType } from '@/types'
import { THEMAS } from '@/lib'
import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import ArrowBackIcon from 'public/icons/arrow_back_ios.svg'
import CheckIcon from 'public/icons/check.svg'

interface ThemaSelectItemProps {
  themaType: ThemaKeyType
  isCurrentThema: boolean
  setCurrentThema: (thema: ThemaKeyType) => void
}

const ThemaSelectItem = ({
  themaType,
  isCurrentThema,
  setCurrentThema,
}: ThemaSelectItemProps) => {
  return (
    <div
      className={twMerge(
        'relative flex items-center justify-center rounded-lg border-2 bg-gray-700 px-7 py-[22px]',
        isCurrentThema ? 'border-gray-100' : 'border-gray-700',
      )}
    >
      {isCurrentThema && (
        <CheckIcon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+10px)] scale-[3] text-gray-0" />
      )}

      <Image
        src={`/images/polaroidThemas/${themaType}.png`}
        alt="polabo"
        width={100}
        height={100}
        onClick={() => setCurrentThema(themaType)}
      />
    </div>
  )
}

interface ThemaSelectProps {
  selectedThema: ThemaKeyType
  setSelectedThema: (thema: ThemaKeyType) => void
  setShowThemaSelect: (showThemaSelect: boolean) => void
}

const ThemaSelect = ({
  selectedThema,
  setSelectedThema,
  setShowThemaSelect,
}: ThemaSelectProps) => {
  const [currentThema, setCurrentThema] = useState<ThemaKeyType>(selectedThema)

  useEffect(() => {
    setCurrentThema(selectedThema)
  }, [selectedThema])

  const onSelectThema = () => {
    setSelectedThema(currentThema)
    setShowThemaSelect(false)
  }

  return (
    <div className="relative flex h-dvh w-full max-w-md touch-pan-y flex-col items-center justify-between bg-gray-900/50">
      <div className="absolute left-5 top-10">
        <ArrowBackIcon
          className="h-6 w-6 text-gray-0"
          onClick={() => setShowThemaSelect(false)}
        />
      </div>
      <div className="mx-12 overflow-y-scroll overscroll-none pb-5 pt-10 scrollbar-hide">
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(THEMAS).map(([key]) => (
            <ThemaSelectItem
              key={key}
              themaType={key as ThemaKeyType}
              isCurrentThema={currentThema === key}
              setCurrentThema={setCurrentThema}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center pb-10">
        <Button size="lg" onClick={onSelectThema}>
          선택 완료
        </Button>
      </div>
    </div>
  )
}

export default ThemaSelect
