import { GetAccessTokenPayload, Token } from '@/types'
// import { post } from './base'

type GetTokenResponse = {
  isNewUser: boolean
} & Token

export const getToken = async ({
  account,
  user,
}: GetAccessTokenPayload): Promise<GetTokenResponse> => {
  // const res = await post('/', {
  //   body: JSON.stringify({
  //     account,
  //     user,
  //   }),
  // })
  console.log(account, user)

  return {
    isNewUser: true,
    accessToken: 'AT',
    refreshToken: 'RT',
  }
}
