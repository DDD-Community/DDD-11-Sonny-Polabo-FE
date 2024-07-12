import { FILTERS } from '@/lib'
import { PolaroidImageProps } from '@/types'
import Image from 'next/image'
import { ReactNode } from 'react'

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

const Top = ({ children }: { children: ReactNode }) => (
  <div className="p-3 pt-5">
    <div className="w-40 h-48 overflow-hidden">{children}</div>
  </div>
)

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
