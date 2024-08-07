'use client'

import { FILTERS } from '@/lib'
import { PolaroidImageProps } from '@/types'
import Image from 'next/image'
import { ReactNode, createContext, useContext } from 'react'
import { twMerge } from 'tailwind-merge'

// lg: 188 x 236
// sm: 120 x 148

const SizeContext = createContext('lg')
export const useSize = () => useContext(SizeContext)

interface BaseProps {
  children: ReactNode
  className?: string
  size: 'lg' | 'sm'
}

const Base = ({ children, className = '', size = 'lg' }: BaseProps) => {
  const borderClass = () => {
    if (size === 'sm') {
      return 'rounded-[2px]'
    }
    return 'rounded-[2px]'
  }

  return (
    <SizeContext.Provider value={size}>
      <div
        className={twMerge(
          `overflow-hidden rounded-[4px] bg-gray-200 font-hesom shadow-lg`,
          borderClass(),
          className,
        )}
      >
        {children}
      </div>
    </SizeContext.Provider>
  )
}

export const PolaroidImage = ({
  imageUrl,
  filter = 'POLAROID',
}: PolaroidImageProps) => {
  const size = useSize()
  return (
    <Image
      src={imageUrl}
      alt="Polaroid 미리보기"
      width={size === 'sm' ? 120 : 188}
      height={size === 'sm' ? 148 : 236}
      className="h-full w-full object-cover"
      style={{ filter: FILTERS[filter] }}
      // placeholder="blur"
      priority
    />
  )
}

const Top = ({ children }: { children: ReactNode }) => {
  const size = useSize()

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

const Bottom = ({ children }: { children: ReactNode }) => {
  const size = useSize()

  const sizeClass = () => {
    if (size === 'sm') {
      return 'text-xs h-[44px]' // 12px
    }
    return 'text-lg h-[67px]' // 20px
  }

  return (
    <div
      className={twMerge(
        sizeClass(),
        'bg-gradient-polaroid px-1 tracking-tight',
      )}
    >
      {children}
    </div>
  )
}

Base.Top = Top
Base.Bottom = Bottom

export default Base
