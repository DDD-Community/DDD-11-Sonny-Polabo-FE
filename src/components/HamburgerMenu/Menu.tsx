import PersonIcon from 'public/icons/person.svg'
import PinIcon from 'public/icons/pinFilled.svg'
import PolaroidIcon from 'public/icons/polaroid.svg'
import { ReactNode } from 'react'

const Profile = ({
  loggedIn,
  onClick,
}: {
  loggedIn: boolean
  onClick: React.ComponentProps<'div'>['onClick']
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-[6px] pl-[27px] ${loggedIn ? 'text-gray-800' : 'text-gray-400'} `}
    >
      <PersonIcon />
      <span className="text-sm font-semiBold">
        {loggedIn ? '정환희' : '로그인해주세요.'}
      </span>
    </div>
  )
}

const Main = () => {
  const handleClick = () => {
    console.log('메인 페이지로 이동')
  }
  return (
    <div
      onClick={handleClick}
      className="mb-[2px] mt-[27px] cursor-pointer pl-[30px] text-gray-950"
    >
      <span className="text-lg font-bold">POLABO 메인</span>
    </div>
  )
}

const Divider = () => (
  <div className="mx-[10px] my-5 flex h-[1px] bg-gray-200" />
)

const MyMenu = ({
  icon,
  text,
  onClick,
}: {
  icon: ReactNode
  text: string
  onClick: React.ComponentProps<'div'>['onClick']
}) => (
  <div
    className="flex cursor-pointer items-center gap-[6px] pl-[30px] text-gray-700"
    onClick={onClick}
  >
    {icon}
    <span className="text-md font-semiBold">{text}</span>
  </div>
)

const ServiceMenu = ({
  text,
  onClick,
}: {
  text: string
  onClick: React.ComponentProps<'div'>['onClick']
}) => (
  <div
    className="cursor-pointer pl-[30px] text-sm font-semiBold text-gray-700"
    onClick={onClick}
  >
    {text}
  </div>
)

const Menu = ({ loggedIn }: { loggedIn: boolean }) => {
  return (
    <div className="pt-[58px]">
      <Profile loggedIn={loggedIn} onClick={() => {}} />
      <Main />

      {loggedIn && (
        <div className="mt-5 flex flex-col gap-3">
          <MyMenu
            icon={<PolaroidIcon />}
            text="프로필 수정"
            onClick={() => {}}
          />
          <MyMenu icon={<PinIcon />} text="내 보드 목록" onClick={() => {}} />
        </div>
      )}
      <Divider />
      <div className="flex flex-col gap-3">
        <ServiceMenu text="POLABO 소개" onClick={() => {}} />
        <ServiceMenu text="서비스 이용약관" onClick={() => {}} />
        <ServiceMenu text="개인정보 처리방침" onClick={() => {}} />
        <ServiceMenu text="문의하기" onClick={() => {}} />
      </div>
    </div>
  )
}

export default Menu
