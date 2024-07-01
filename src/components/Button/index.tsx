import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  className?: string
  isSubmit?: boolean
}

function Button({
  className,
  children,
  variant,
  isSubmit,
  ...props
}: ButtonProps) {
  const buttonClass = twMerge(
    'py-2 px-6 rounded-lg font-bold text-white text-lg whitespace-normal break-words',
    variant === 'primary' && 'bg-primary',
    variant === 'secondary' && 'bg-secondary',
    variant === 'tertiary' && 'bg-tertiary',
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

export default Button
