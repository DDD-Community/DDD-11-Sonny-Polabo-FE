'use client'

import { ChangeEvent, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextInputProps {
  value: string
  setValue: (value: string) => void
  hasError: boolean
  description: string
  errorMessage: string
  placeholder: string
}

const TextInput = ({
  value,
  setValue,
  hasError,
  description,
  errorMessage,
  placeholder,
}: TextInputProps) => {
  const borderClass = twMerge(
    'flex items-center mb-2 border-b ',
    hasError ? 'border-negative' : 'border-gray-950',
  )
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  return (
    <div className={`w-full ${hasError ? 'text-negative' : ''}`}>
      <div className={borderClass}>
        <textarea
          placeholder={placeholder}
          ref={textareaRef}
          rows={1}
          value={value}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            if (textareaRef.current) {
              textareaRef.current.style.height = 'auto'
              textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
            }
            setValue(e.target.value)
          }}
          className="w-full resize-none overflow-y-hidden bg-transparent p-1 outline-none"
        />
      </div>
      <div className="text-right text-xs">
        {hasError ? errorMessage : description}
      </div>
    </div>
  )
}

export default TextInput
