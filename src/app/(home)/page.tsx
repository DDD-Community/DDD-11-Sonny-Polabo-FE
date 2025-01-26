import Image from 'next/image'
import PolaroidsIcon from 'public/icons/home_polaroids.svg'
import PolaboLogo from 'public/images/polabo-logo.png'
import Hamburger from '@/components/HamburgerMenu'
import CopyLinkBtn from './_components/CopyLinkBtn'
import CreateBoardBtn from './_components/CreateBoardBtn'
import TotalCount from './_components/TotalCount'

const HomePage = () => {
  return (
    <div className="fixed left-0 right-0 mx-auto flex h-dvh max-w-md flex-col items-center justify-between bg-[url('/images/home.png')] bg-cover px-5">
      <Hamburger className="absolute left-5 top-5" />
      <div className="overscroll-none pt-12">
        <PolaroidsIcon className="m-auto" />
        <span className="m-auto block pt-2 text-center font-jooree text-sm leading-4">
          함께 꾸미는 폴라로이드 보드
        </span>
        <div className="px-20 py-0.5">
          <Image
            src={PolaboLogo}
            priority
            alt="logo"
            width={248}
            height={100}
          />
        </div>
      </div>
      <div className="mb-[30px] flex w-full flex-col items-center">
        <TotalCount />
        <CreateBoardBtn />
        <CopyLinkBtn />
      </div>
    </div>
  )
}

export default HomePage
