import React from 'react'
import { twMerge } from 'tailwind-merge'

interface TagButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const TagButton = ({ children, className, ...props }: TagButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className={twMerge(
        'rounded-[36px] border border-gray-0 px-5 py-2 text-gray-0',
        className,
      )}
    >
      {children}
    </button>
  )
}

export default TagButton
