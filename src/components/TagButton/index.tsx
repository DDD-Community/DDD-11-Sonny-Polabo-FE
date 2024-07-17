import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TagButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: 'small' | 'medium'
  className?: string
  isSubmit?: boolean
}

function TagButton({
  children,
  className = '',
  isSubmit = false,
  disabled,
  size,
  ...props
}: TagButtonProps) {
  const getSizeClass = () => {
    if (size === 'small') {
      return 'text-sm rounded-[36px] px-3 h-6.5'
    }
    if (size === 'medium') {
      return 'text-md rounded-[36px] px-5 h-8'
    }
    return ''
  }

  const buttonClass = twMerge(
    'border border-gray-900 bg-gray-0 active:bg-gray-100',
    getSizeClass(),
    className,
  )

  return (
    <button
      className={buttonClass}
      type={isSubmit ? 'submit' : 'button'}
      {...props}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default TagButton
