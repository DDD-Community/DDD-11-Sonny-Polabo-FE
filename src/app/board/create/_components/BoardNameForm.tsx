'use client'

import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import { ReactNode } from 'react'
import { useBoardName } from '@/hooks/useBoardName'
import { useRouter } from 'next/navigation'

interface BoardNameFormProps {
  children: ReactNode
}

const BoardNameForm = ({ children }: BoardNameFormProps) => {
  const {
    boardName,
    setBoardName,
    isDirty,
    isInvalid,
    errorMessage,
    description,
  } = useBoardName()

  const router = useRouter()

  return (
    <>
      <div>
        <div className="py-9 text-center text-xl font-thin leading-8 text-gray-900">
          보드 이름을 정해주세요!
        </div>
        <TextInput
          errorMessage={errorMessage}
          description={description}
          value={boardName}
          hasError={isDirty && isInvalid}
          setValue={setBoardName}
        />
      </div>
      {children}
      <Button
        type="submit"
        size="lg"
        className="mb-12"
        disabled={isInvalid}
        onClick={() => router.push(`/board/create/theme?title=${boardName}`)}
      >
        다음
      </Button>
    </>
  )
}

export default BoardNameForm
