'use client'

import { useBoardTutorial, useDecorateTutorial } from './TutorialContext'
import Tutorial, { TutorialProps } from './Tutorial'

export const BoardTutorial = ({
  children,
  ...rest
}: Omit<TutorialProps, 'useTutorial'>) => {
  return (
    <Tutorial useTutorial={useBoardTutorial} {...rest}>
      {children}
    </Tutorial>
  )
}

export const DecorateTutorial = ({
  children,
  ...rest
}: Omit<TutorialProps, 'useTutorial'>) => {
  return (
    <Tutorial useTutorial={useDecorateTutorial} {...rest}>
      {children}
    </Tutorial>
  )
}
