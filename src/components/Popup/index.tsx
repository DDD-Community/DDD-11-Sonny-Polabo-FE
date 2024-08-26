'use client'

import React, { ReactNode, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface PopupProps {
  isOpen: boolean
  yPosition?: 'top' | 'bottom'
  xPosition?: 'left' | 'right'
  children: ReactNode
  close: () => void
}

const Popup = ({
  isOpen,
  close,
  yPosition = 'bottom',
  xPosition = 'right',
  children,
}: PopupProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      event.stopPropagation()
      close()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  if (!isOpen) return null

  const className = twMerge(
    'absolute z-5',
    yPosition === 'top' ? 'top' : 'bottom',
    xPosition === 'left' ? 'left-0' : 'right-0',
  )

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  )
}

export default Popup
