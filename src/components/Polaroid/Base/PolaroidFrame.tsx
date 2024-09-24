import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { FontKeyType, ThemaKeyType } from '@/types'
import { FONTS, THEMAS } from '@/lib'

interface PolaroidFrameProps extends HTMLAttributes<HTMLDivElement> {
  themaKey: ThemaKeyType
  fontKey: FontKeyType
}

const PolaroidFrame = ({
  children,
  className,
  themaKey,
  fontKey,
  ...props
}: PolaroidFrameProps) => {
  return (
    <div
      className={`${twMerge('rounded-sm shadow-polaroid', className, FONTS[fontKey].className, THEMAS[themaKey].className)}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default PolaroidFrame
