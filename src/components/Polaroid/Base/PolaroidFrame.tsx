import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const PolaroidFrame = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`${twMerge('rounded-sm bg-[#f3f3f3] shadow-polaroid', className)}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default PolaroidFrame
