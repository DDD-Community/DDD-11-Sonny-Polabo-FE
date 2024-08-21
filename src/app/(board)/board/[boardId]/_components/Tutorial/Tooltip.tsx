'use client'

import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { useTutorial } from './TutorialContext'

const Tooltip = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: React.ComponentProps<'div'>['className']
}) => {
  return <div className={twMerge(`relative`, className)}>{children}</div>
}

const Triangle = ({
  className = '',
}: {
  className?: React.ComponentProps<'div'>['className']
}) => (
  <div className={twMerge('absolute right-3 -z-10', className)}>
    <div className="h-8 w-8 rotate-[30deg] skew-y-[30deg] scale-x-[0.866] transform rounded-lg bg-gray-950" />
  </div>
)

const Box = ({
  children,
  className = '',
  trianglePos = '',
}: {
  children: ReactNode
  className?: React.ComponentProps<'div'>['className']
  trianglePos?: React.ComponentProps<'div'>['className']
}) => {
  return (
    <div
      className={twMerge(
        'absolute right-0 top-0 z-20 flex flex-col items-end justify-end rounded-md bg-gray-950 text-gray-0',
        className,
      )}
    >
      <Triangle className={trianglePos} />
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
        'mb-[3px] whitespace-pre-line text-center text-md',
        className,
      )}
    >
      {children}
    </div>
  )
}

const Icon = ({
  icon,
  sendToBack = false,
  className = '',
}: {
  icon: ReactNode
  sendToBack?: boolean
  className?: React.ComponentProps<'div'>['className']
}) => {
  return (
    <div
      className={twMerge(
        `absolute -top-[0%] left-0 -translate-x-1/2 -translate-y-1/2 ${sendToBack ? 'z-10' : 'z-40'}`,
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
