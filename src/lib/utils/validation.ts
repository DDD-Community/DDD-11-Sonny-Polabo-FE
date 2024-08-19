import { UserProfile } from '@/types'

export const validateBirthDt = (
  birthDt: NonNullable<UserProfile['birthDt']>,
) => {
  const [year, month, day] = birthDt.split('-')

  const currentYear = new Date().getFullYear().toString()
  if (year < '1900' || year > currentYear) {
    return false
  }

  if (month < '01' || month > '12') {
    return false
  }

  const daysInMonth = new Date(
    parseInt(year, 10),
    parseInt(month, 10),
    0,
  ).getDate()

  if (day < '01' || parseInt(day, 10) > daysInMonth) {
    return false
  }

  // 미래 날짜인 경우
  const inputDate = new Date(
    `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`,
  )
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  if (inputDate > today) {
    return false
  }

  return true
}
