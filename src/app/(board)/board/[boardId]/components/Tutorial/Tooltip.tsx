'use client'

import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { useTutorial } from './TutorialContext'

interface TooltipProps {
  children: ReactNode
  className?: React.ComponentProps<'div'>['className']
}

const Tooltip = ({ children, className = '' }: TooltipProps) => {
  //   const { run, currentStep, nextStep, startTutorial, endTutorial } =
  //     useTutorial()

  return <div className={twMerge(`relative`, className)}>{children}</div>
}

const Box = ({
  children,
  className,
}: {
  children: ReactNode
  className: React.ComponentProps<'div'>['className']
}) => {
  return (
    <div
      className={twMerge(
        'absolute right-0 top-0 z-20 flex flex-col items-end justify-end rounded-md bg-gray-0',
        className,
      )}
    >
      {children}
    </div>
  )
}

const Content = ({ children }: { children: ReactNode }) => {
  return <div className="mb-[3px] text-md font-semiBold">{children}</div>
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
        `'left-0' absolute -top-[0%] -translate-x-1/2 -translate-y-1/2 ${sendToBack ? 'z-10' : 'z-40'}`,
        className,
      )}
    >
      {icon}
    </div>
  )
}

const NextBtn = ({ hasNext }: { hasNext: boolean }) => {
  const { nextStep, endTutorial } = useTutorial()
  return (
    <div
      onClick={hasNext ? nextStep : endTutorial}
      className="text-right text-sm font-semiBold text-negative"
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
