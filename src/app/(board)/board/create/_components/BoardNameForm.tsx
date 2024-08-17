'use client'

import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import { postBoard } from '@/lib'
import { useRouter } from 'next/navigation'
import { ReactNode, useState } from 'react'

const MAX_BOARD_NAME_LENGTH = 15

const BoardNameForm = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState('')
  const [hasError, setHasError] = useState(false)
  const isEmpty = title.length === 0
  const router = useRouter()

  const onInput = (value: string) => {
    setTitle(value)
    if (value.length > MAX_BOARD_NAME_LENGTH) {
      setHasError(true)
    } else {
      setHasError(false)
    }
  }

  const createBoard = async () => {
    const boardId = await postBoard({
      title,
      userId: null,
    })

    router.push(`/board/${boardId}`)
  }

  return (
    <>
      <div>
        <div className="py-9 text-center text-xl font-thin leading-8 text-gray-900">
          보드 주제를 정해주세요!
        </div>
        <TextInput
          errorMessage={`${MAX_BOARD_NAME_LENGTH}자 이내로 입력 가능해요`}
          description={`${title.length}/${MAX_BOARD_NAME_LENGTH}자`}
          value={title}
          hasError={hasError}
          setValue={onInput}
        />
      </div>
      {children}
      <Button
        type="submit"
        size="lg"
        className="mb-12"
        disabled={hasError || isEmpty}
        onClick={createBoard}
      >
        완료
      </Button>
    </>
  )
}

export default BoardNameForm
