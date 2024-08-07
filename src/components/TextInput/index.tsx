'use client'

import ExitIcon from 'public/icons/exit.svg'
import PinIcon from 'public/icons/pinFilled.svg'
import { ChangeEvent } from 'react'
import { twMerge } from 'tailwind-merge'
import SketchIcon from 'public/icons/sketchIcons-1.svg'

interface TextInputProps {
  value: string
  setValue: (value: string) => void
  hasError: boolean
  description: string
  errorMessage: string
  type?: 'BOARD' | 'NICKNAME'
}

const TextInput = ({
  value,
  setValue,
  hasError,
  description,
  errorMessage,
  type = 'BOARD',
}: TextInputProps) => {
  const borderClass = twMerge(
    'flex items-center mb-2 border-b',
    hasError ? 'border-negative' : 'border-gray-950',
  )

  let IconComponent

  if (hasError) {
    IconComponent = <ExitIcon className="text-negative" />
  } else if (type === 'BOARD') {
    IconComponent = <PinIcon />
  } else {
    IconComponent = <SketchIcon />
  }

  return (
    <div className={`w-[264px] ${hasError ? 'text-negative' : ''}`}>
      <div className={borderClass}>
        <div className="mr-2">{IconComponent}</div>
        <input
          type="text"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          className="flex-1 bg-transparent p-1 outline-none"
        />
      </div>
      <div className="text-right text-xs">
        {hasError ? errorMessage : description}
      </div>
    </div>
  )
}

export default TextInput
