/* eslint-disable import/no-cycle */

import { put } from '@/lib/api/base'
import { WithdrawUserPayload } from '@/types'
import { authFetch } from './customFetch/authFetch'

export const withdraw = async (body: WithdrawUserPayload) => {
  return put('/api/v1/user/withdraw', {
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
