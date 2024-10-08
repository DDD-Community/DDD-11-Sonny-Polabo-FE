import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import ProfileForm from './_components/ProfileForm'
import { StepProvider } from './_components/contexts/StepContext'
import Header from './_components/Header'

const SignUpPage = async () => {
  const session = await auth()

  if (session && !session.newUser) {
    redirect('/')
  }
  return (
    <div className="flex h-dvh flex-col items-center justify-between">
      <StepProvider>
        <Header />
        <ProfileForm />
      </StepProvider>
    </div>
  )
}

export default SignUpPage
