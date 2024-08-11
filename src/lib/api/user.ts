import { put } from '@/lib/api/base'
import { WithdrawUserPayload } from '@/types'

export const withdraw = async (body: WithdrawUserPayload) => {
  return put('/api/v1/user/withdraw', {
    body: JSON.stringify(body),
  })
}
