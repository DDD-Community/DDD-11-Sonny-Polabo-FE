'use client'

import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'
import { useTutorial } from '@/app/board/[boardId]/_contexts/TutorialContext'

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

  // overlay 클릭 방지
  const [topBox, setTopBox] = useState<CSSProperties>({})
  const [bottomBox, setBottomBox] = useState<CSSProperties>({})
  const [leftBox, setLeftBox] = useState<CSSProperties>({})
  const [rightBox, setRightBox] = useState<CSSProperties>({})

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

      setTopBox({
        bottom: `calc(100% - ${targetRect.top}px + 2px)`,
      })
      setBottomBox({
        top: targetRect.bottom + 5,
      })
      setLeftBox({
        right: `calc(100% - ${targetRect.left}px + 3px)`,
      })
      setRightBox({
        left: targetRect.right + 3,
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
          <div style={overlayStyle}>
            <div
              className="pointer-events-none absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-full border-2 border-dotted border-gray-300"
              style={{
                width: 'calc(100% + 10px)',
                height: 'calc(100% + 10px)',
              }}
            />
            <div
              className="pointer-events-auto fixed left-0 h-dvh w-screen"
              style={topBox}
            />
            <div
              className="pointer-events-auto fixed left-0 h-dvh w-screen"
              style={bottomBox}
            />
            <div
              className="pointer-events-auto fixed top-0 h-dvh w-screen"
              style={leftBox}
            />
            <div
              className="pointer-events-auto fixed top-0 h-dvh w-screen"
              style={rightBox}
            />
          </div>
          {tooltip}
        </>
      )}
    </>
  )
}

export default Tutorial
