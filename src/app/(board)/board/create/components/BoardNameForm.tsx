'use client'

import TextInput from '@/components/TextInput'
import { ReactNode, useCallback, useState } from 'react'
import Button from '@/components/Button'
import { postBoard } from '@/lib'
import { useRouter } from 'next/navigation'

const MAX_BOARD_NAME_LENGTH = 15

const BoardNameForm = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState('')
  const [hasError, setHasError] = useState(false)
  const isEmpty = title.length === 0
  const router = useRouter()

  const onInput = useCallback((value: string) => {
    setTitle(value)
    setHasError(value.length > MAX_BOARD_NAME_LENGTH)
  }, [])

  const createBoard = useCallback(async () => {
    try {
      const boardId = await postBoard({
        title,
        userId: null,
      })
      router.push(`/board/${boardId}`)
    } catch (error) {
      console.error('Failed to create board:', error)
    }
  }, [title, router])

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
