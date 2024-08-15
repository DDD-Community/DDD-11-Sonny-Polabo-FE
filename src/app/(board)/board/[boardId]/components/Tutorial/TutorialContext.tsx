'use client'

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

interface TutorialContextProps {
  run: boolean
  currentStep: number
  nextStep: () => void
  startTutorial: () => void
  endTutorial: () => void
}

const TutorialContext = createContext<TutorialContextProps | undefined>(
  undefined,
)

export const TutorialProvider = ({ children }: { children: ReactNode }) => {
  const [run, setRun] = useState<boolean>(false)
  const [currentStep, setCurrentStep] = useState<number>(1)

  const nextStep = () => setCurrentStep((prev) => prev + 1)

  const startTutorial = () => setRun(true)
  const endTutorial = () => {
    setRun(false)
    localStorage.setItem('needTutorial', 'false')
  }

  useEffect(() => {
    if (localStorage.getItem('needTutorial') === 'true') {
      startTutorial()
    }
  }, [run])

  const value = useMemo(
    () => ({
      run,
      currentStep,
      nextStep,
      startTutorial,
      endTutorial,
    }),
    [currentStep, run],
  )

  return (
    <TutorialContext.Provider value={value}>
      {children}
    </TutorialContext.Provider>
  )
}

export const useTutorial = () => {
  const context = useContext(TutorialContext)
  if (context === undefined) {
    throw new Error('Error at useTutorial')
  }
  return context
}
