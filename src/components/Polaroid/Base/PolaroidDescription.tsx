import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { ThemaKeyType } from '@/types'
import { THEMAS } from '@/lib'

interface PolaroidDescriptionProps extends HTMLAttributes<HTMLDivElement> {
  themaKey: ThemaKeyType
}

const PolaroidDescription = ({
  children,
  className,
  themaKey,
  ...props
}: PolaroidDescriptionProps) => {
  return (
    <div
      className={`${twMerge('flex flex-col gap-0.5 px-4 pb-2', className)}`}
      style={{
        background: THEMAS[themaKey].descriptionStyle,
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default PolaroidDescription
