import { copyToClipboard } from '@/lib/utils'

describe('lib/utils/clipboard', () => {
  describe('copyToClipboard()', () => {
    beforeEach(() => {
      Object.assign(navigator, {
        clipboard: {
          writeText: jest.fn().mockImplementation(() => Promise.resolve()),
        },
      })
    })

    afterEach(() => {
      jest.restoreAllMocks()
    })

    it('Should Copy target string to clipboard', async () => {
      // Given
      const target = 'copy target string'

      // When
      await copyToClipboard(target)

      // Then
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(target)
    })

    it('Should return resolved promise object when it is done', () => {
      // Given
      const target = 'copy target string'

      // When
      const result = copyToClipboard(target)

      // Then
      expect(result).toEqual(Promise.resolve())
    })
  })
})
