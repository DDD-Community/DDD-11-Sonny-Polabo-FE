import { WithdrawUserPayload } from '@/types'
import { authFetch } from './customFetch/authFetch'

export const withdraw = async (body: WithdrawUserPayload) => {
  return authFetch('/api/v1/user/withdraw', {
    method: 'PUT',
    body: JSON.stringify(body),
  })
}

export const viewProfile = async () => {
  return authFetch('/api/v1/user/profile', {
    next: {
      tags: ['profile'],
    },
  })
}
