import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoutModalIcon from 'public/icons/linkShare.svg'
import PersonIcon from 'public/icons/person.svg'
import PinIcon from 'public/icons/pinFilled.svg'
import PolaroidIcon from 'public/icons/polaroid.svg'
import { useState } from 'react'
import Modal from '../../Modal'
import { useDrawer } from '../DrawerContext'
import MainMenu from './MainMenu'
import ServiceMenu from './Service'

const Profile = ({
  onClick,
}: {
  onClick: React.ComponentProps<'div'>['onClick']
}) => {
  const { data: session, status } = useSession()
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-[6px] pl-[27px] ${status === 'authenticated' ? 'text-gray-800' : 'text-gray-400'} `}
    >
      <PersonIcon />
      {status === 'authenticated' ? (
        <span className="text-sm font-semiBold">
          {session.profile.nickName}
        </span>
      ) : (
        <Link className="text-sm font-semiBold" href="/login">
          로그인해주세요.
        </Link>
      )}
    </div>
  )
}

const Main = () => {
  const pathName = usePathname()
  const { setClose } = useDrawer()
  return (
    <Link
      href="/"
      className="mb-[2px] mt-[27px] cursor-pointer pl-[30px] text-gray-950"
      onClick={() => {
        if (pathName === '/') {
          setClose()
        }
      }}
    >
      <span className="text-lg font-bold">POLABO 메인</span>
    </Link>
  )
}

const Divider = () => <div className="mx-[10px] my-5 flex h-px bg-gray-200" />

const Logout = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        className="mt-auto cursor-pointer pl-[30px] text-sm font-semiBold text-gray-400"
        onClick={() => setIsOpen(true)}
      >
        로그아웃
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.CenterModal icon={<LogoutModalIcon />}>
          <Modal.Close />
          <Modal.Title>로그아웃 하시겠습니까?</Modal.Title>
          <Modal.CenterConfirmCancel
            cancelText="아니요"
            confirmText="예"
            onConfirm={() => {
              signOut({ callbackUrl: '/' })
            }}
          />
        </Modal.CenterModal>
      </Modal>
    </>
  )
}

const Menu = () => {
  const { status } = useSession()

  return (
    <div className="flex h-full flex-col pb-[53px] pt-[58px]">
      <Profile onClick={() => {}} />
      <Main />

      {status === 'authenticated' && (
        <div className="mt-5 flex flex-col gap-3 pl-[28px]">
          <MainMenu
            icon={<PolaroidIcon />}
            text="프로필 수정"
            linkTo="/mypage/profileEdit"
          />
          <MainMenu
            icon={<PinIcon />}
            text="내 보드 목록"
            linkTo="/mypage/boards"
          />
        </div>
      )}
      <Divider />
      <ServiceMenu />

      {status === 'authenticated' && <Logout />}
    </div>
  )
}

export default Menu
