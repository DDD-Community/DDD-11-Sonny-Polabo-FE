// import { auth } from '@/auth'
// import { redirect } from 'next/navigation'
import ProfileForm from './_components/ProfileForm'
import { StepProvider } from './_components/StepContext'
import Header from './_components/Header'

const SignUpPage = async () => {
  // const session = await auth()

  // if (session && !session.newUser) {
  //   redirect('/board/create')
  // }
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
