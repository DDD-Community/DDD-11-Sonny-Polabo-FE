'use client'

import BackIcon from 'public/icons/arrow_back_ios.svg'
import { useStep } from './contexts/StepContext'

const Header = () => {
  const { step, prevStep } = useStep()
  return (
    <header className="h-16 w-full p-5">
      {step !== 1 && (
        <div className="cursor-pointer">
          <BackIcon onClick={() => prevStep()} />
        </div>
      )}
    </header>
  )
}

export default Header
