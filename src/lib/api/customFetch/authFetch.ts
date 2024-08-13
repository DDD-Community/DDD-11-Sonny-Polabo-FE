import { auth } from '@/auth'
import { handleServerError } from '@/lib/utils/auth'

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
  await handleServerError(res.status)

  const text = await res.text()
  return text ? JSON.parse(text) : null
}
