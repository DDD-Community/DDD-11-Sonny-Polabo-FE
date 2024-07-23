import { FILTERS } from '@/lib'
import { PolaroidImageProps } from '@/types'
import Image from 'next/image'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

// lg: 188 x 236
// sm: 120 x 148

export const PolaroidImage = ({
  imageUrl,
  filter = 'POLAROID',
}: PolaroidImageProps) => (
  <Image
    src={imageUrl}
    alt="Polaroid 미리보기"
    width={188}
    height={236}
    className="h-full w-full object-cover"
    style={{ filter: FILTERS[filter] }}
    // placeholder="blur"
    priority
  />
)

interface TopProps {
  children: ReactNode
  size?: 'lg' | 'sm'
}

const Top = ({ children, size = 'lg' }: TopProps) => {
  const getSizeClass = () => {
    if (size === 'sm') {
      return 'w-[120px] h-[148px]'
    }
    return 'w-[188px] h-[236px]'
  }

  const containerClass = twMerge(getSizeClass(), 'overflow-hidden')

  const paddingClass = () => {
    if (size === 'sm') {
      return 'p-2'
    }
    return 'p-3 pt-5'
  }
  return (
    <div className={paddingClass()}>
      <div className={containerClass}>{children}</div>
    </div>
  )
}

const Bottom = ({ children }: { children: ReactNode }) => (
  <div className="bg-gradient-polaroid px-1 pb-3 tracking-tight">
    {children}
  </div>
)

const Base = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={twMerge(
        'overflow-hidden rounded-lg bg-gray-200 font-hesom shadow-lg',
        className,
      )}
    >
      {children}
    </div>
  )
}

Base.Top = Top
Base.Bottom = Bottom

export default Base
