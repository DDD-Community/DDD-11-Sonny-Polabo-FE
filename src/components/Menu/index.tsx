import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoutModalIcon from 'public/icons/linkShare.svg'
import PersonIcon from 'public/icons/person.svg'
import PinIcon from 'public/icons/pinFilled.svg'
import PolaroidIcon from 'public/icons/polaroid.svg'
import { useState } from 'react'
import { sendGTMEvent } from '@next/third-parties/google'
import { GTM_EVENT } from '@/lib'
import Modal from '../Modal'
import { useDrawer } from '../HamburgerMenu/DrawerContext'
import MenuLink from './MenuLink'
import ExternalLinkContainer from './ExternalLinkContainer'

const Profile = () => {
  const { data: session, status } = useSession()
  return (
    <Link
      className="flex items-center gap-[6px] text-gray-400"
      href={status === 'authenticated' ? '/mypage' : '/login'}
    >
      <PersonIcon />
      <span className="text-sm font-semiBold">
        {status === 'authenticated'
          ? session?.profile.nickName
          : '로그인해주세요.'}
      </span>
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
  const pathName = usePathname()
  const { setClose } = useDrawer()

  return (
    <div className="flex h-full flex-col pb-[53px] pt-[58px]">
      <div className="mt-5 flex flex-col gap-4 pl-[28px]">
        <Profile />
        <div
          onClick={() => {
            if (pathName === '/') setClose()
          }}
        >
          <MenuLink icon={<PolaroidIcon />} text="POLABO 메인" linkTo="/" />
        </div>
        {status === 'authenticated' && (
          <MenuLink
            icon={<PinIcon />}
            text="마이페이지"
            linkTo="/mypage"
            onClick={() => sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_MYPAGE })}
          />
        )}
      </div>

      <Divider />
      <ExternalLinkContainer />

      {status === 'authenticated' && <Logout />}
    </div>
  )
}

export default Menu
