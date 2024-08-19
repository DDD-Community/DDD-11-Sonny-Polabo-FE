import { UserProfile, WithdrawUserPayload } from '@/types'
import { get, put } from './base'

export const withdraw = async (body: WithdrawUserPayload) => {
  return put('/api/v1/user/withdraw', {
    body: JSON.stringify(body),
  })
}

export const updateProfile = async (body: UserProfile) => {
  return put('/api/v1/user/profile', {
    body: JSON.stringify(body),
  })
}

export const viewProfile = async () => {
  return get('/api/v1/user/profile', {
    next: {
      tags: ['profile'],
    },
  })
}
