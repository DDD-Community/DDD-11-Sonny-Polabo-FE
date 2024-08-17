'use client'

import { ReactNode, createContext, useContext, useMemo, useState } from 'react'

interface StepContextProps {
  step: 1 | 2 | 3
  nextStep: () => void
  prevStep: () => void
}

const StepContext = createContext<StepContextProps | undefined>(undefined)

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1)

  const nextStep = () =>
    setStep((prev) => (prev !== 3 ? ((prev + 1) as 1 | 2 | 3) : prev))

  const prevStep = () =>
    setStep((prev) => (prev !== 1 ? ((prev - 1) as 1 | 2 | 3) : prev))

  const value = useMemo(
    () => ({
      step,
      nextStep,
      prevStep,
    }),
    [step],
  )

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>
}

export const useStep = () => {
  const context = useContext(StepContext)
  if (context === undefined) {
    throw new Error('Error at useStep')
  }
  return context
}
