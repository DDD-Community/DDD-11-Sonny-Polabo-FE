import { WithdrawUserPayload } from '@/types'
import { get, put } from './base'

export const withdraw = async (body: WithdrawUserPayload) => {
  return put('/api/v1/user/withdraw', {
    body: JSON.stringify(body),
  })
}

export const changeNickname = async (nickName: string) => {
  return put(`/api/v1/user/nickname`, {
    body: JSON.stringify({ nickName }),
  })
}

export const viewProfile = async () => {
  return get('/api/v1/user/profile', {
    next: {
      tags: ['profile'],
    },
  })
}
