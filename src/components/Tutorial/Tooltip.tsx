'use client'

import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Triangle from 'public/icons/tooltip-triangle.svg'
import { UseTutorial } from './TutorialContext'

const Tooltip = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: React.ComponentProps<'div'>['className']
}) => {
  return <div className={twMerge(`absolute`, className)}>{children}</div>
}

type TrianglePos = 'tl' | 'tr' | 'bl' | 'br'

interface BoxProps {
  children: ReactNode
  className?: React.ComponentProps<'div'>['className']
  trianglePos: TrianglePos
}

const Box = ({ children, className = '', trianglePos }: BoxProps) => {
  const TRIANGLE_POSITION: Record<TrianglePos, string> = {
    tr: 'bottom-full right-3',
    tl: 'bottom-full left-3',
    bl: 'top-full left-3 rotate-180',
    br: 'top-full right-3 rotate-180',
  }

  return (
    <div
      className={twMerge(
        'absolute right-0 top-0 z-20 flex flex-col items-end justify-end rounded-md bg-gray-950 text-gray-0',
        className,
      )}
    >
      <Triangle
        className={twMerge('absolute -z-10', TRIANGLE_POSITION[trianglePos])}
      />
      {children}
    </div>
  )
}

const Content = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: React.ComponentProps<'div'>['className']
}) => {
  return (
    <div
      className={twMerge(
        'mb-[6px] whitespace-pre-line text-center text-md',
        className,
      )}
    >
      {children}
    </div>
  )
}

interface IconProps {
  icon: ReactNode
  sendToBack?: boolean
  className?: React.ComponentProps<'div'>['className']
}

const Icon = ({ icon, sendToBack = false, className = '' }: IconProps) => {
  return (
    <div
      className={twMerge(
        `absolute -top-[0%] left-0 -translate-x-1/2 -translate-y-1/2 ${sendToBack ? 'z-20' : 'z-40'}`,
        className,
      )}
    >
      {icon}
    </div>
  )
}

const NextBtn = ({
  hasNext,
  useTutorial,
}: {
  hasNext: boolean
  useTutorial: UseTutorial
}) => {
  const { nextStep, endTutorial } = useTutorial()
  return (
    <div
      onClick={hasNext ? nextStep : endTutorial}
      className="cursor-pointer text-right text-sm font-semiBold text-negative"
    >
      {hasNext ? '다음' : '확인'}
    </div>
  )
}

Tooltip.Box = Box
Tooltip.Icon = Icon
Tooltip.Content = Content
Tooltip.NextBtn = NextBtn

export default Tooltip
