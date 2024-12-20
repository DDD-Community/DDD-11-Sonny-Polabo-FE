'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  FC,
} from 'react'

interface TutorialContextProps {
  run: boolean
  currentStep: number
  nextStep: () => void
  startTutorial: () => void
  endTutorial: () => void
}

interface TutorialProviderProps {
  children: ReactNode
  storageKey: string
}

export type UseTutorial = () => TutorialContextProps

const createTutorialContext = (
  hookName: string,
  providerName: string,
): {
  Provider: FC<TutorialProviderProps>
  useTutorial: () => TutorialContextProps
} => {
  const TutorialContext = createContext<TutorialContextProps | undefined>(
    undefined,
  )

  const TutorialProvider: FC<TutorialProviderProps> = ({
    children,
    storageKey,
  }) => {
    const [run, setRun] = useState(false)
    const [currentStep, setCurrentStep] = useState(1)

    const nextStep = () => setCurrentStep((prev) => prev + 1)

    const startTutorial = () => setRun(true)
    const endTutorial = () => {
      setRun(false)
      localStorage.setItem(storageKey, 'false')
    }

    useEffect(() => {
      if (localStorage.getItem(storageKey) === 'true') {
        startTutorial()
      }
    }, [storageKey])

    const value = useMemo(
      () => ({
        run,
        currentStep,
        nextStep,
        startTutorial,
        endTutorial,
      }),
      [run, currentStep],
    )

    return (
      <TutorialContext.Provider value={value}>
        {children}
      </TutorialContext.Provider>
    )
  }

  const useTutorial = () => {
    const context = useContext(TutorialContext)
    if (!context) {
      throw new Error(`${hookName} must be used within ${providerName}`)
    }
    return context
  }

  return {
    Provider: TutorialProvider,
    useTutorial,
  }
}

// create context
export const { Provider: BoardProvider, useTutorial: useBoardTutorial } =
  createTutorialContext('BoardTutorial', 'BoardTutorialProvider')

export const { Provider: DecorateProvider, useTutorial: useDecorateTutorial } =
  createTutorialContext('DecorateTutorial', 'DecorateTutorialProvider')

// Providers
export const BoardTutorialProvider = ({
  children,
}: {
  children: ReactNode
}) => <BoardProvider storageKey="needBoardTutorial">{children}</BoardProvider>

export const DecorateTutorialProvider = ({
  children,
}: {
  children: ReactNode
}) => (
  <DecorateProvider storageKey="needDecorateTutorial">
    {children}
  </DecorateProvider>
)
