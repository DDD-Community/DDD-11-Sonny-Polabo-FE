'use client'

import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'
import { useTutorial } from './TutorialContext'

interface TutorialProps {
  children: ReactNode
  step: number
  tooltip: ReactNode
  hasNext?: boolean
}

const Tutorial = ({
  step,
  tooltip,
  hasNext = true,
  children,
}: TutorialProps) => {
  const targetRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [overlayStyle, setOverlayStyle] = useState<CSSProperties>({})
  const { run, currentStep, endTutorial } = useTutorial()

  useEffect(() => {
    if (run && step === currentStep) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }, [run, step, currentStep])

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
        zIndex: 10,
        boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.6)',
        pointerEvents: 'none',
      })
    }
  }, [isOpen])

  const handleTargetClick = () => {
    setIsOpen(false)
    if (!hasNext) {
      endTutorial()
    }
  }

  return (
    <>
      <div ref={targetRef} onClick={handleTargetClick}>
        {children}
      </div>
      {isOpen && (
        <>
          <div style={overlayStyle} />
          {tooltip}
        </>
      )}
    </>
  )
}

export default Tutorial
