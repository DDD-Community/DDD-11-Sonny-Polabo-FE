import { act, renderHook } from '@testing-library/react'
import { useInputValidation, Validation } from '@/hooks/useInputValidation'

describe('useInputValidation()', () => {
  describe('value', () => {
    it('should return initialValue as value', () => {
      // Given
      const initialValue = 'initialValue'

      // When
      const { result } = renderHook(() => useInputValidation(initialValue))

      // Then
      expect(result.current.value).toEqual(initialValue)
    })

    it('should set value to the new value when setValue is called', () => {
      // Given
      const initialValue = 'initialValue'
      const { result } = renderHook(() => useInputValidation(initialValue))

      // When
      const newValue = 'newValue'
      act(() => {
        result.current.setValue(newValue)
      })

      // Then
      expect(result.current.value).toEqual(newValue)
    })
  })
  describe('isDirty', () => {
    it('should set isDirty to false before the value is changed', () => {
      // Given
      const initialValue = 'initialValue'

      // When
      const { result } = renderHook(() => useInputValidation(initialValue))

      // Then
      expect(result.current.isDirty).toBeFalsy()
    })

    it('should set isDirty to true when the value is changed', () => {
      // Given
      const initialValue = 'initialValue'
      const { result } = renderHook(() => useInputValidation(initialValue))

      // When
      const newValue = 'newValue'
      act(() => {
        result.current.setValue(newValue)
      })

      // Then
      expect(result.current.isDirty).toBeTruthy()
    })

    it('should set isDirty to false when the value is not changed', () => {
      // Given
      const initialValue = 'initialValue'
      const { result } = renderHook(() => useInputValidation(initialValue))

      // When
      const newValue = 'initialValue'
      act(() => {
        result.current.setValue(newValue)
      })

      // Then
      expect(result.current.isDirty).toBeFalsy()
    })
  })

  describe('isInvalid', () => {
    it('should set isInvalid to true when a validation fails', () => {
      // Given
      const initialValue = 'initialValue'
      const validations: Validation<string>[] = [
        {
          validator: () => false,
          errorMessage: 'error message1',
        },
        {
          validator: () => true,
          errorMessage: 'error message2',
        },
      ]

      // When
      const { result } = renderHook(() =>
        useInputValidation(initialValue, validations),
      )

      // Then
      expect(result.current.isInvalid).toBeTruthy()
    })

    it('should set isInvalid to false when all validations pass', () => {
      // Given
      const initialValue = 'initialValue'
      const validations: Validation<string>[] = [
        {
          validator: () => true,
          errorMessage: 'error message1',
        },
        {
          validator: () => true,
          errorMessage: 'error message2',
        },
        {
          validator: () => true,
          errorMessage: 'error message3',
        },
      ]

      // When
      const { result } = renderHook(() =>
        useInputValidation(initialValue, validations),
      )

      // Then
      expect(result.current.isInvalid).toBeFalsy()
    })
  })

  describe('errorMessage', () => {
    it('should set errorMessage to the first validation that fails ', () => {
      // Given
      const initialValue = 'initialValue'
      const validations: Validation<string>[] = [
        {
          validator: () => false,
          errorMessage: 'error message1',
        },
        {
          validator: () => false,
          errorMessage: 'error message2',
        },
        {
          validator: () => false,
          errorMessage: 'error message3',
        },
      ]

      // When
      const { result } = renderHook(() =>
        useInputValidation(initialValue, validations),
      )

      // Then
      expect(result.current.errorMessage).toEqual('error message1')
    })

    it('should set errorMessage to empty string when all validations pass', () => {
      // Given
      const initialValue = 'initialValue'
      const validations: Validation<string>[] = [
        {
          validator: () => true,
          errorMessage: 'error message1',
        },
        {
          validator: () => true,
          errorMessage: 'error message2',
        },
        {
          validator: () => true,
          errorMessage: 'error message3',
        },
      ]

      // When
      const { result } = renderHook(() =>
        useInputValidation(initialValue, validations),
      )

      // Then
      expect(result.current.errorMessage).toEqual('')
    })
  })
})
