import { auth } from '@/auth'
import MenuLink from '@/components/Menu/MenuLink'
import ExternalLinkContainer from '@/components/Menu/ExternalLinkContainer'
import Header from '@/components/Header'
import PinIcon from 'public/icons/sketchIcons-4.svg'
import ClipIcon from 'public/icons/sketchIcons-paperclip.svg'
import { JoinedBoard, MyBoard } from './_components/GotoBoardsBtn'
import ProfilePic from './_components/ProfilePic'

const MyPage = async () => {
  const session = await auth()

  return (
    <div className="flex min-h-dvh flex-col pb-[100px]">
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
      <div className="mx-4">
        <div className="flex flex-col gap-5 pl-3">
          <MenuLink
            icon={<ClipIcon />}
            text="프로필 수정"
            linkTo="/mypage/profileEdit"
          />
          <MenuLink
            icon={<PinIcon />}
            text="내 보드 목록"
            linkTo="/mypage/boards"
          />
        </div>
        <div className="my-[26px] h-px w-full bg-gray-200" />
        <ExternalLinkContainer className="gap-5 pl-3" />
      </div>
    </div>
  )
}

export default MyPage
