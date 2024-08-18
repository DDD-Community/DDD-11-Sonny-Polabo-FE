import { UserProfile } from '@/types'

export const validateBirthDt = (
  birthDt: NonNullable<UserProfile['birthDt']>,
) => {
  const [year, month, day] = birthDt.split('-')
  // year: 1900~2024
  const currentYear = new Date().getFullYear().toString()
  if (year < '1900' || year > currentYear) {
    return false
  }

  // month: 01~12
  if (month < '01' || month > '12') {
    return false
  }

  const daysInMonth = new Date(
    parseInt(year, 10),
    parseInt(month, 10),
    0,
  ).getDate()

  // day: 01~해당 월의 마지막 날짜
  if (day < '01' || parseInt(day, 10) > daysInMonth) {
    return false
  }

  return true
}
