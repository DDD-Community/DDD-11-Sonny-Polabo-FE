import { KeyboardEvent } from 'react'

export const preventKeyboardSubmit = (
  e: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLTextAreaElement>,
) => {
  if (e.key === 'Enter') {
    e.preventDefault()
  }
}
