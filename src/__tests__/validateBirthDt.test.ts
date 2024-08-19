import { validateBirthDt } from '@/lib/utils/validation'
import { describe, expect, it } from '@jest/globals'

describe('validateBirthDt', () => {
  it('before 1900 -> false', () => {
    expect(validateBirthDt('1899-12-31')).toBe(false)
  })

  it('year after the current year -> false', () => {
    const nextYear = (new Date().getFullYear() + 1).toString()
    expect(validateBirthDt(`${nextYear}-01-01`)).toBe(false)
  })

  it('invalid month -> false', () => {
    expect(validateBirthDt('2020-13-01')).toBe(false)
    expect(validateBirthDt('2020-00-01')).toBe(false)
  })

  it('invalid day -> false', () => {
    expect(validateBirthDt('2024-01-32')).toBe(false)
    expect(validateBirthDt('2024-02-30')).toBe(false)
  })

  it('valid date -> true', () => {
    expect(validateBirthDt('2024-01-31')).toBe(true)
    expect(validateBirthDt('2020-02-29')).toBe(true) // Leap year
  })

  it('non-leap year February 29 -> false', () => {
    expect(validateBirthDt('2019-02-29')).toBe(false) // non-leap year
  })

  it('at the edge of the year range -> true', () => {
    expect(validateBirthDt('1900-01-01')).toBe(true)
  })

  it('future date -> false', () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const futureDate = tomorrow
      .toISOString()
      .split('T')[0] as `${string}-${string}-${string}`
    expect(validateBirthDt(futureDate)).toBe(false)
  })
})
