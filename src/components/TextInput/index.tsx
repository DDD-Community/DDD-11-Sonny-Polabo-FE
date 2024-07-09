'use client'

import { ChangeEvent, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import ExitIcon from 'public/icons/exit.svg'
import PinIcon from 'public/icons/pinFilled.svg'
import { MAX_LENGTH } from '@/lib'

interface TextInputProps {
  value: string
  setValue: (value: string) => void
}

const TextInput = ({ value, setValue }: TextInputProps) => {
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setError(value.length >= MAX_LENGTH)
  }, [value])

  const borderClass = twMerge(
    'flex items-center mb-2 border-b',
    error ? 'border-negative' : 'border-gray-950',
  )

  return (
    <div className={error ? `text-negative` : ''}>
      <div className={borderClass}>
        <div className="mr-2">
          {error ? <ExitIcon className="text-negative" /> : <PinIcon />}
        </div>
        <input
          type="text"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          maxLength={MAX_LENGTH}
          className="flex-1 outline-none p-1 bg-transparent"
        />
      </div>

      <div className="text-right text-xs">
        {error
          ? `${MAX_LENGTH}자 미만으로 입력해주세요`
          : `${value.length}/${MAX_LENGTH}자`}
      </div>
    </div>
  )
}

export default TextInput
