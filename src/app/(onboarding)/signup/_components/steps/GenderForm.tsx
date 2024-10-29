import Button from '@/components/Button'
import { UserProfile } from '@/types'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useProfile } from '../contexts/ProfileContext'
import GenderBtn from './GenderBtn'

const GenderForm = ({
  handleSubmit,
}: {
  handleSubmit: (profile: UserProfile) => Promise<boolean>
}) => {
  const { newName, newBirthDt, newGender, setNewGender } = useProfile()
  const [hasError, setHasError] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (newGender === 'NONE') {
      setHasError(true)
    } else setHasError(false)
  }, [newGender])

  const onSubmit = async () => {
    const res = await handleSubmit({
      nickName: newName,
      birthDt: newBirthDt,
      gender: newGender,
    })
    if (res) router.push('/signup/complete')
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-2 whitespace-pre-line text-2xl font-thin leading-10">
        <span className="font-regular">성별</span>
        {'을 \n 입력해주세요!'}
      </div>
      <p className="text-sm text-gray-400">
        추가 정보를 입력하시면 나에게 딱 맞는 보드 이름을 추천해드려요 :)
      </p>

      <div className="mx-auto mb-6 flex flex-1 items-center gap-2">
        <GenderBtn gender="M" onClick={() => setNewGender('M')} />
        <GenderBtn gender="F" onClick={() => setNewGender('F')} />
      </div>

      <Button
        size="lg"
        className="mb-5 mt-auto w-full"
        disabled={hasError}
        onClick={onSubmit}
      >
        완료
      </Button>
      <Link
        href="/signup/complete"
        className="mb-6 text-center text-md font-semiBold text-gray-400"
      >
        다음에 할게요
      </Link>
    </div>
  )
}

export default GenderForm
