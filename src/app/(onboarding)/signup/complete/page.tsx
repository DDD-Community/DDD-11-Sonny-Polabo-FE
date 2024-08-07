import { GoToCreateBoard, GoToMain } from './components/Buttons'

const SignUpCompletePage = () => {
  return (
    <div className="mx-5 flex h-dvh flex-col items-center">
      <h1>회원가입이 완료되었습니다!</h1>
      <GoToCreateBoard />
      <GoToMain />
    </div>
  )
}

export default SignUpCompletePage
