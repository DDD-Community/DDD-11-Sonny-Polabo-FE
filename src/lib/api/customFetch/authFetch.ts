'use server'

import { auth, unstable_update as update, signOut } from '@/auth'
import { refreshAT } from '../auth'

export const authFetch = async (path: string, options: RequestInit) => {
  const session = await auth()

  let res = await fetch(process.env.API_HOST + path, {
    ...options,
    headers: {
      'content-type': 'application/json',
      ...options?.headers,
      ...(session && { Authorization: `Bearer ${session?.accessToken}` }),
    },
  })

  if (res.status === 401 && session) {
    const newToken = await refreshAT(session.refreshToken)

    await update({
      accessToken: newToken.accessToken,
      refreshToken: newToken.refreshToken,
      expiredDate: newToken.expiredDate,
    })

    // retry original request
    res = await fetch(process.env.API_HOST + path, {
      ...options,
      headers: {
        'content-type': 'application/json',
        ...options?.headers,
        Authorization: `Bearer ${newToken.accessToken}`,
      },
    })
    if (!res.ok) {
      signOut()
    }
  }

  if (res.status === 500) {
    signOut()
  }

  const text = await res.text()
  return text ? JSON.parse(text) : null
}
