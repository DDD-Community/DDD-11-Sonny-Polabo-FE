import Button from '@/components/Button'
import { UserProfile } from '@/types'
import { Dispatch, SetStateAction } from 'react'

interface GenderInputProps {
  gender: UserProfile['gender']
  setGender: Dispatch<SetStateAction<UserProfile['gender']>>
}

const GenderInput = ({ gender, setGender }: GenderInputProps) => {
  return (
    <div className="mb-[38px] flex justify-center gap-2">
      <Button
        variant={gender === 'M' ? 'primary' : 'secondary'}
        onClick={() => setGender('M')}
      >
        남성
      </Button>
      <Button
        variant={gender === 'F' ? 'primary' : 'secondary'}
        onClick={() => setGender('F')}
      >
        여성
      </Button>
    </div>
  )
}

export default GenderInput
