'use client'

import { UserProfile } from '@/types'
import { useSession } from 'next-auth/react'
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

interface BirthDateInputProps {
  setBirthDt: Dispatch<SetStateAction<UserProfile['birthDt']>>
}

const BirthDateInput = ({ setBirthDt }: BirthDateInputProps) => {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  const { data: session } = useSession()

  useEffect(() => {
    if (!session || !session.profile.birthDt) return

    const [y, m, d] = session.profile.birthDt.split('-')
    setYear(y)
    setMonth(m)
    setDay(d)
  }, [session])

  useEffect(() => {
    setBirthDt(`${year}-${month}-${day}`)
  }, [year, month, day])

  const handleYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (/^\d{0,4}$/.test(value)) {
      setYear(value)
    }
  }

  const handleMonthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (/^\d{0,2}$/.test(value) && +value <= 12) {
      setMonth(value)
    }
  }

  const handleDayChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (/^\d{0,2}$/.test(value) && +value <= 31) {
      setDay(value)
    }
  }
  return (
    <div className="flex w-[264px] items-center justify-around border-b border-gray-950 px-2 pb-2 text-md">
      <div>
        <input
          type="number"
          value={year}
          onChange={handleYearChange}
          placeholder="YYYY"
          className="w-full text-center focus:outline-none"
          maxLength={4}
          inputMode="numeric"
        />
      </div>
      <span className="font-semibold text-xl text-gray-400">/</span>
      <div>
        <input
          type="number"
          value={month}
          onChange={handleMonthChange}
          placeholder="MM"
          className="w-full text-center focus:outline-none"
          maxLength={2}
          inputMode="numeric"
        />
      </div>
      <span className="font-semibold text-xl text-gray-400">/</span>
      <div>
        <input
          type="number"
          value={day}
          onChange={handleDayChange}
          placeholder="DD"
          className="w-full text-center focus:outline-none"
          maxLength={2}
          inputMode="numeric"
        />
      </div>
    </div>
  )
}

export default BirthDateInput
