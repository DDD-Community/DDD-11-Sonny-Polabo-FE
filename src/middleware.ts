import { auth } from '@/auth'
import { NextResponse } from 'next/server'

// export { auth as middleware } from '@/auth'

export async function middleware() {
  const session = await auth()
  if (!session) {
    return NextResponse.redirect(`/login`)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/mapage/:path*'],
}
