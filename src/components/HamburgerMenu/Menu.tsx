import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoutModalIcon from 'public/icons/linkShare.svg'
import PersonIcon from 'public/icons/person.svg'
import PinIcon from 'public/icons/pinFilled.svg'
import PolaroidIcon from 'public/icons/polaroid.svg'
import { ReactNode, useState } from 'react'
import Modal from '../Modal'
import { useDrawer } from './DrawerContext'

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

const MyMenu = ({
  icon,
  text,
  linkTo,
}: {
  icon: ReactNode
  text: string
  linkTo: string
}) => (
  <Link
    href={linkTo}
    className="flex cursor-pointer items-center gap-[6px] pl-[28px] text-gray-700"
  >
    {icon}
    <span className="text-md font-semiBold">{text}</span>
  </Link>
)

const ServiceMenu = ({ text, linkTo }: { text: string; linkTo: string }) => (
  <Link
    className="cursor-pointer pl-[30px] text-sm font-semiBold text-gray-700"
    href={linkTo}
  >
    {text}
  </Link>
)

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
        <div className="mt-5 flex flex-col gap-3">
          <MyMenu
            icon={<PolaroidIcon />}
            text="프로필 수정"
            linkTo="/mypage/profileEdit"
          />
          <MyMenu
            icon={<PinIcon />}
            text="내 보드 목록"
            linkTo="/mypage/boards"
          />
        </div>
      )}
      <Divider />
      <div className="flex flex-col gap-3">
        <ServiceMenu
          text="POLABO 소개"
          linkTo="https://hwanheejung.notion.site/POLABO-39ac5a850dcb46bd83168043acea5bbc?pvs=74"
        />
        <ServiceMenu
          text="서비스 이용약관"
          linkTo="https://hwanheejung.notion.site/POLABO-292cb07b2fd74d7488aa4b684c67eb9a?pvs=74"
        />
        <ServiceMenu
          text="개인정보 처리방침"
          linkTo="https://hwanheejung.notion.site/POLABO-3c07098b731e419a92da9916c81c35f1"
        />
        <ServiceMenu
          text="문의하기"
          linkTo="https://forms.gle/ya9HVMSJWVSKYyV77"
        />
      </div>

      {status === 'authenticated' && <Logout />}
    </div>
  )
}

export default Menu
