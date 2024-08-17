'use client'

import {
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { useSession } from 'next-auth/react'
import TextInput from '.'

const MAX_NICKNAME_LENGTH = 10

interface NicknameInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  setHasError: Dispatch<SetStateAction<boolean>>
  icon?: ReactNode
}

const NicknameInput = ({
  value,
  setValue,
  setHasError,
  icon = '',
  ...rest
}: NicknameInputProps) => {
  const [errorMessage, setErrorMessage] = useState('')

  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      setValue(session.user!.name!)
    }
  }, [session])

  useEffect(() => {
    setHasError(errorMessage.length > 0)
  }, [errorMessage])

  const validateNickname = (name: string) => {
    if (name.length > MAX_NICKNAME_LENGTH) {
      setErrorMessage(`${MAX_NICKNAME_LENGTH}자 미만으로 입력해주세요`)
      return
    }

    const regex = /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9]*$/
    if (!regex.test(value)) {
      setErrorMessage('국문, 영문, 숫자만 입력 가능해요.')
      return
    }
    setErrorMessage('')
  }

  useEffect(() => {
    validateNickname(value)
  }, [value])

  const onInput = (name: string) => {
    setValue(name)
  }
  return (
    <TextInput
      errorMessage={errorMessage}
      description={`${value.length}/${MAX_NICKNAME_LENGTH}자`}
      value={value}
      hasError={errorMessage.length > 0}
      setValue={onInput}
      icon={icon}
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    />
  )
}

export default NicknameInput
