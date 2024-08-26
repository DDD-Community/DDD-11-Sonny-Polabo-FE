import { UserProfile } from '@/types'
import FemaleIcon from 'public/icons/gender_f.svg'
import MaleIcon from 'public/icons/gender_m.svg'
import { useProfile } from '../contexts/ProfileContext'

interface GenderBtnProps extends React.ComponentProps<'button'> {
  gender: Exclude<UserProfile['gender'], 'NONE'>
}

const GenderBtn = ({ gender, onClick }: GenderBtnProps) => {
  const { newGender } = useProfile()
  return (
    <button
      className={`relative flex h-[132px] w-[124px] flex-col items-center justify-end gap-[9px] rounded-md border border-gray-950 shadow-signupGenderBtn ${newGender === gender && 'bg-gray-300'} pb-2`}
      onClick={onClick}
      type="button"
    >
      {gender === 'M' ? (
        <MaleIcon width={66} height={66} className="mb-1" />
      ) : (
        <FemaleIcon width={54} height={75} alt="female" />
      )}
      <span className="text-lg font-semiBold">
        {gender === 'M' ? '남성' : '여성'}
      </span>
    </button>
  )
}

export default GenderBtn
