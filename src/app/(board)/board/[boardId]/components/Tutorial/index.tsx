'use client'

import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'
import { useTutorial } from './TutorialContext'

interface TutorialProps {
  children: ReactNode
  step: number
  hasNext?: boolean
  tooltip: ReactNode
}

const Tutorial = ({
  step,
  hasNext = true,
  tooltip,
  children,
}: TutorialProps) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [overlayStyle, setOverlayStyle] = useState<CSSProperties>({})
  const { currentStep } = useTutorial()

  console.log(hasNext)

  useEffect(() => {
    if (
      step === currentStep &&
      localStorage.getItem('needTutorial') === 'true'
    ) {
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
        zIndex: -10,
        boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.6)',
        pointerEvents: 'all',
      })
    }
  }, [isOpen])

  return (
    <div className="">
      <div ref={targetRef}>{children}</div>
      <div style={overlayStyle} />
      {tooltip}
    </div>
  )
}

// Tutorial.Tooltip = Tooltip

export default Tutorial
