import Header from '@/components/Header'
import Link from 'next/link'
import Email from './_components/Email'
import NicknameForm from './_components/NicknameForm'
import Title from './_components/Title'

const Page = () => {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header title="프로필 수정" leftButton={<Header.BackButton />} />

      <NicknameForm>
        <Title>연결된 계정</Title>
        <Email />

        <Link
          href="/mypage/leave"
          className="cursor-pointer text-sm font-semiBold text-gray-400"
        >
          탈퇴하기
        </Link>
      </NicknameForm>
    </div>
  )
}

export default Page
