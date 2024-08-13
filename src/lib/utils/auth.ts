import { signOut } from 'next-auth/react'

export const handleServerError = async (status: number) => {
  if (status === 500) {
    await signOut({ callbackUrl: '/' })
  }
}
