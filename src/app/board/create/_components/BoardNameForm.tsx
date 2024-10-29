'use client'

import Button from '@/components/Button'
import TextInput from '@/components/TextInput'
import { ReactNode } from 'react'
import { useBoardName } from '@/hooks/useBoardName'

interface BoardNameFormProps {
  children: ReactNode
  createBoard: (title: string) => void
}

const BoardNameForm = ({ children, createBoard }: BoardNameFormProps) => {
  const {
    boardName,
    setBoardName,
    isDirty,
    isInvalid,
    errorMessage,
    description,
  } = useBoardName()

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
        onClick={() => createBoard(boardName)}
      >
        완료
      </Button>
    </>
  )
}

export default BoardNameForm
