import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'

const kakaoCustomProvider = KakaoProvider({
  clientId: process.env.KAKAO_CLIENT_ID ?? '',
  clientSecret: process.env.KAKAO_CLIENT_SECRET ?? '',
})

const handler = NextAuth({
  providers: [kakaoCustomProvider],
  callbacks: {
    async signin({ user, account, profile, email, credentials }) {
      console.log('signin', user, account, profile, email, credentials)
      return true
    },
    async jwt({ token, user, account, profile }) {
      console.log('=====jwt=====')
      console.log('token', token)
      console.log('user', user)
      console.log('account', account)
      console.log('profile', profile)
      return token
    },
    async session({ session, user, token }) {
      console.log('session', session, user, token)
      return session
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/board/create`
    },
  },
})

export { handler as GET, handler as POST }
