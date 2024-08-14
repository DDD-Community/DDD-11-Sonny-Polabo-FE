'use client'

import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'

interface TutorialProps {
  step: number
  children: ReactNode
}

const Tutorial = ({ step, children }: TutorialProps) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [overlayStyle, setOverlayStyle] = useState<CSSProperties>({})

  useEffect(() => {
    if (step === 1) {
      setIsOpen(true)
    }
  }, [step])

  useEffect(() => {
    if (isOpen && targetRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect()

      setOverlayStyle({
        position: 'fixed',
        top: targetRect.top - 2,
        left: targetRect.left - 3,
        width: targetRect.width + 6,
        height: targetRect.height + 7,
        borderRadius: '50%',
        zIndex: 9999,
        boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.6)',
        pointerEvents: 'none',
      })
    }
  }, [isOpen])

  return (
    <div>
      <div ref={targetRef}>{children}</div>
      <div style={overlayStyle} />
    </div>
  )
}

export default Tutorial
