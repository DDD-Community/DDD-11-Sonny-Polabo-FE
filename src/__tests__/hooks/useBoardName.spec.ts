import { act, renderHook } from '@testing-library/react'
import { useBoardName } from '@/hooks/useBoardName'

describe('useBoardName()', () => {
  it('description', () => {
    // Given
    const { result } = renderHook(() => useBoardName())

    // When
    act(() => {
      result.current.setBoardName('board name')
    })

    // Then
    expect(result.current.description).toEqual('10/15자')
  })

  describe('errorMessage', () => {
    it('should return error message on empty string', () => {
      // Given
      const { result } = renderHook(() => useBoardName())

      // When
      act(() => {
        result.current.setBoardName('')
      })

      // Then
      expect(result.current.errorMessage).toEqual(
        '최소 한글자 이상 입력해주세요',
      )
    })

    it('should return error message on value longer than max length', () => {
      // Given
      const { result } = renderHook(() => useBoardName())

      // When
      act(() => {
        result.current.setBoardName('abcdefghijklmnop')
      })

      // Then
      expect(result.current.errorMessage).toEqual('15자 이내로 입력 가능해요')
    })
  })
})
