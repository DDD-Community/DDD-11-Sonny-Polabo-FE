import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import NicknameForm from './_components/NicknameForm'

const SignUpPage = async () => {
  const session = await auth()

  if (session && !session.newUser) {
    redirect('/board/create')
  }
  return (
    <div className="mx-5 flex h-dvh flex-col items-center justify-between">
      <NicknameForm />
    </div>
  )
}

export default SignUpPage
