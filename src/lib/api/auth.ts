import { SignInPayload, User } from '@/types'

const handleResponse = async (res: Response) => {
  const text = await res.text()

  if (!res.ok) {
    throw new Error(
      `Request failed: ${res.status} - ${res.statusText} - ${text || 'No error message provided'}`,
    )
  }

  if (!text) {
    throw new Error('No response body')
  }

  try {
    return JSON.parse(text)
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    throw new Error(`Failed to parse JSON: ${error.message}`)
  }
}

export const login = async (body: SignInPayload): Promise<User> => {
  const res = await fetch(`${process.env.API_HOST}/api/v1/oauth/sign-in`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await handleResponse(res)
  return data.data
}

export const refreshAT = async (refreshToken: string) => {
  const res = await fetch(`${process.env.API_HOST}/api/v1/oauth/re-issue`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${refreshToken}`,
    },
  })

  const data = await handleResponse(res)

  return {
    accessToken: data.data.accessToken,
    refreshToken: data.data.refreshToken,
    expiredDate: data.data.expiredDate,
  }
}
