import Button from '@/components/Button'
import { SignInPayload } from '@/types'
import { useState } from 'react'

const GenderInput = () => {
  const [selectedOption, setSelectedOption] =
    useState<SignInPayload['gender']>('NONE')

  return (
    <div className="mb-[38px] flex justify-center gap-2">
      <Button
        variant={selectedOption === 'M' ? 'primary' : 'secondary'}
        onClick={() => setSelectedOption('M')}
      >
        남성
      </Button>
      <Button
        variant={selectedOption === 'F' ? 'primary' : 'secondary'}
        onClick={() => setSelectedOption('F')}
      >
        여성
      </Button>
    </div>
  )
}

export default GenderInput
