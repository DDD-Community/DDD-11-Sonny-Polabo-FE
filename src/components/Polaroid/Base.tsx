import { FILTERS } from '@/lib'
import { PolaroidImageProps } from '@/types'
import Image from 'next/image'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

// lg: 160 x 192
// ms: 104 x 128

export const PolaroidImage = ({
  imageUrl,
  filter = 'POLAROID',
}: PolaroidImageProps) => (
  <Image
    src={imageUrl}
    alt="Polaroid 미리보기"
    width={160}
    height={192}
    className="w-full h-full object-cover"
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
      return 'w-[104px] h-32'
    }
    return 'w-40 h-48'
  }

  const containerClass = twMerge(getSizeClass(), 'overflow-hidden')

  return (
    <div className="p-3 pt-5">
      <div className={containerClass}>{children}</div>
    </div>
  )
}

const Bottom = ({ children }: { children: ReactNode }) => (
  <div className="px-1 pb-3 bg-gradient-polaroid">{children}</div>
)

const Base = ({ children }: { children: ReactNode }) => {
  return (
    <div className="shadow-lg rounded-lg m-4 bg-gray-200 font-hesom overflow-hidden">
      {children}
    </div>
  )
}

Base.Top = Top
Base.Bottom = Bottom

export default Base
