import { useCallback, useEffect, useState } from 'react'

export type Validation<T> = {
  validator: (value: T) => boolean
  errorMessage: string
}

export const useInputValidation = <T>(
  initialValue: T,
  validations: Validation<T>[],
) => {
  const [value, setValue] = useState<T>(initialValue)
  const [isDirty, setIsDirty] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  useEffect(() => {
    const failedValidation = validations.find(
      (validation) => !validation.validator(value),
    )

    if (failedValidation) {
      setErrorMessage(failedValidation.errorMessage)
    } else {
      setErrorMessage('')
    }
  }, [value, validations])

  const wrappedSetValue = useCallback(
    (newValue: T) => {
      if (!isDirty && value !== newValue) {
        setIsDirty(true)
      }
      setValue(newValue)
    },
    [isDirty, value],
  )

  return {
    value,
    setValue: wrappedSetValue,
    errorMessage,
    isDirty,
    isInvalid: !!errorMessage,
  }
}
