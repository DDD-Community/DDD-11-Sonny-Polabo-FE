import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import NicknameForm from './components/NicknameForm'

const SignUpPage = async () => {
  const session = await auth()

  if (!session?.newUser) {
    redirect('/board/create')
  }
  return (
    <div className="mx-5 flex h-dvh flex-col items-center justify-between">
      <NicknameForm />
    </div>
  )
}

export default SignUpPage
