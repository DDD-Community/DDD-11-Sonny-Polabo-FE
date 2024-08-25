import { auth } from '@/auth'
import Header from '@/components/Header'
import { JoinedBoard, MyBoard } from './_components/GotoBoardsBtn'
import ProfilePic from './_components/ProfilePic'

const MyPage = async () => {
  const session = await auth()
  return (
    <div className="flex min-h-dvh flex-col">
      <Header title="마이페이지" leftButton={<Header.BackButton />} />
      <div className="flex flex-col items-center pt-7">
        <ProfilePic />
        <div className="my-4 text-xl font-semiBold">
          {session?.profile.nickName}
        </div>
        <div className="flex gap-1">
          <MyBoard />
          <JoinedBoard />
        </div>
      </div>
      <div className="my-7 h-[6px] w-full bg-gray-100" />
    </div>
  )
}

export default MyPage
