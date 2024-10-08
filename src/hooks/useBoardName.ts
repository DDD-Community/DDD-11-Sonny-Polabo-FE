import { useMemo } from 'react'
import { useInputValidation, Validation } from '@/hooks/useInputValidation'

const MAX_BOARD_NAME_LENGTH = 15

const validations: Validation<string>[] = [
  {
    validator: (value: string) => value.length <= MAX_BOARD_NAME_LENGTH,
    errorMessage: `${MAX_BOARD_NAME_LENGTH}자 이내로 입력 가능해요`,
  },
  {
    validator: (value: string) => value.length > 0,
    errorMessage: `최소 한글자 이상 입력해주세요`,
  },
]

export const useBoardName = () => {
  const { value, setValue, errorMessage, isDirty, isInvalid } =
    useInputValidation<string>('', validations)

  const description = useMemo(
    () => `${value.length}/${MAX_BOARD_NAME_LENGTH}자`,
    [value],
  )

  return {
    boardName: value,
    setBoardName: setValue,
    isDirty,
    isInvalid,
    errorMessage,
    description,
  }
}
