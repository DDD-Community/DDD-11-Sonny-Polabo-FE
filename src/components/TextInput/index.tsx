'use client'

import { ChangeEvent } from 'react'
import { twMerge } from 'tailwind-merge'
import ExitIcon from 'public/icons/exit.svg'
import PinIcon from 'public/icons/pinFilled.svg'
import { preventKeyboardSubmit } from '@/lib/utils/keyboard'

interface TextInputProps {
  value: string
  setValue: (value: string) => void
  hasError: boolean
  description: string
  errorMessage: string
}

const TextInput = ({
  value,
  setValue,
  hasError,
  description,
  errorMessage,
}: TextInputProps) => {
  const borderClass = twMerge(
    'flex items-center mb-2 border-b',
    hasError ? 'border-negative' : 'border-gray-950',
  )

  return (
    <div className={`w-[264px] ${hasError ? 'text-negative' : ''}`}>
      <div className={borderClass}>
        <div className="mr-2">
          {hasError ? <ExitIcon className="text-negative" /> : <PinIcon />}
        </div>
        <input
          type="text"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          onKeyDown={preventKeyboardSubmit}
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
