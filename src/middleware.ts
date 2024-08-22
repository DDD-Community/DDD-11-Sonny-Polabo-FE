import { auth } from '@/auth'
import { NextRequest, NextResponse } from 'next/server'

function isMatch(pathname: string, urls: string[]) {
  return urls.some((url) => {
    return pathname.startsWith(url)
  })
}

const matchersForAuth = ['/mypage', '/board/create', '/signup']

const matchersForLogin = ['/login']

export async function middleware(request: NextRequest) {
  const session = await auth()

  // 인증이 필요한 페이지 접근 시 로그인 페이지로 리다이렉트
  if (isMatch(request.nextUrl.pathname, matchersForAuth)) {
    return session
      ? NextResponse.next()
      : NextResponse.redirect(new URL(`/login`, request.url))
  }
  // 로그인 페이지 접근 시 로그인 상태일 경우 메인 페이지로 리다이렉트
  if (isMatch(request.nextUrl.pathname, matchersForLogin)) {
    return session
      ? NextResponse.redirect(new URL(`/`, request.url))
      : NextResponse.next()
  }
  return NextResponse.next()
}
