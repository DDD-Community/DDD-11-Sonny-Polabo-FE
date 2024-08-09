'use client'

import ExitIcon from 'public/icons/exit.svg'
import PinIcon from 'public/icons/pinFilled.svg'
import { ChangeEvent } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextInputProps {
  value: string
  setValue: (value: string) => void
  hasError: boolean
  description: string
  errorMessage: string
  icon?: React.ReactNode
}

const TextInput = ({
  value,
  setValue,
  hasError,
  description,
  errorMessage,
  icon = <PinIcon />,
}: TextInputProps) => {
  const borderClass = twMerge(
    'flex items-center mb-2 border-b',
    hasError ? 'border-negative' : 'border-gray-950',
  )

  return (
    <div className={`w-[264px] ${hasError ? 'text-negative' : ''}`}>
      <div className={borderClass}>
        <div className="mr-2">
          {hasError ? <ExitIcon className="text-negative" /> : icon}
        </div>
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
