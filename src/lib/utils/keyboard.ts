import { KeyboardEvent } from 'react'

export const preventKeyboardSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    e.preventDefault()
  }
}
