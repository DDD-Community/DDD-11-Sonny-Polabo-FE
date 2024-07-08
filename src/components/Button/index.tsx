import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size: 'sm' | 'md' | 'lg'
  className?: string
  isSubmit?: boolean
}

function Button({
  className,
  size,
  children,
  variant,
  isSubmit,
  ...props
}: ButtonProps) {
  const getSizeClass = () => {
    if (size === 'sm') {
      return 'text-xs w-[104px] h-9 rounded-lg'
    }
    if (size === 'md') {
      return 'text-sm w-[154px] h-10 rounded-lg'
    }
    return 'text-md font-semibold w-[240px] h-[54px] rounded-xl'
  }

  const getVariantClass = () => {
    if (variant === 'primary') {
      return 'text-gray-0 bg-gray-900 active:bg-gray-700'
    }
    return 'text-gray-900 bg-gray-0 border border-gray-800 active:bg-gray-100'
  }

  const buttonClass = twMerge(
    getSizeClass(),
    getVariantClass(),
    'disabled:text-gray-400 disabled:bg-gray-200 disabled:border-none',
    className,
  )

  return (
    <button
      className={buttonClass}
      type={isSubmit ? 'submit' : 'button'}
      {...props}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'primary',
  className: '',
  isSubmit: false,
}

export default Button
