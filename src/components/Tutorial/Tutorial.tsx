'use client'

import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'
import { UseTutorial } from './TutorialContext'

export interface TutorialProps {
  children: ReactNode
  step: number
  tooltip: ReactNode
  hasNext?: boolean
  useTutorial: UseTutorial
  targetStyle?: 'ROUND' | 'FIT'
  targetStyleProperites?: CSSProperties
}

const TargetBorder = () => (
  <div
    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dotted border-gray-300"
    style={{
      width: 'calc(100% + 10px)',
      height: 'calc(100% + 10px)',
    }}
  />
)

const Tutorial = ({
  step,
  tooltip,
  hasNext = true,
  children,
  useTutorial,
  targetStyle = 'ROUND',
  targetStyleProperites = {},
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

      const getOverlayStyle = () => {
        switch (targetStyle) {
          case 'ROUND':
            return {
              top: targetRect.top - 2,
              left: targetRect.left - 3,
              width: targetRect.width + 6,
              height: targetRect.height + 7,
              borderRadius: '50%',
            }
          case 'FIT':
            return {
              top: targetRect.top,
              left: targetRect.left,
              width: targetRect.width,
              height: targetRect.height,
              ...targetStyleProperites,
            }
          default:
            throw new Error('Unexpected targetStyle')
        }
      }

      setOverlayStyle({
        position: 'fixed',
        zIndex: 10,
        boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.6)',
        pointerEvents: 'none',
        ...getOverlayStyle(),
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
    if (!hasNext) endTutorial()
  }

  return (
    <>
      <div ref={targetRef} onClick={handleTargetClick} className="relative">
        {children}
        {isOpen && tooltip}
      </div>
      {isOpen && (
        <div style={overlayStyle} className="cursor-default">
          {targetStyle === 'ROUND' && <TargetBorder />}
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
      )}
    </>
  )
}

export default Tutorial
