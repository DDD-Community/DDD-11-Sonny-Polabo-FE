'use server'

import { auth } from '@/auth'
import { signOut } from 'next-auth/react'

export const authFetch = async (path: string, options: RequestInit) => {
  const session = await auth()

  const res = await fetch(process.env.API_HOST + path, {
    ...options,
    headers: {
      'content-type': 'application/json',
      ...options?.headers,
      ...(session && { Authorization: `Bearer ${session?.accessToken}` }),
    },
  })

  if (res.status === 500) {
    await signOut({ callbackUrl: '/' })
  }

  const text = await res.text()
  return text ? JSON.parse(text) : null
}
