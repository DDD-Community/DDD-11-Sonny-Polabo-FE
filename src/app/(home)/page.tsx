import Image from 'next/image'
import PolaroidsIcon from 'public/icons/home_polaroids.svg'
import PolaboLogo from 'public/images/polabo_logo.png'
import CopyLinkBtn from './components/CopyLinkBtn'
import CreateBoardBtn from './components/CreateBoardBtn'
import TotalCount from './components/TotalCount'

const HomePage = () => {
  return (
    <div className="fixed left-0 right-0 mx-auto flex h-dvh max-w-md flex-col items-center justify-between bg-[url('/images/home.png')] bg-cover px-5">
      <div className="overscroll-none pt-12">
        <PolaroidsIcon className="m-auto" />
        <span className="m-auto block pt-2 text-center font-jooree text-sm leading-4">
          함께 꾸미는 폴라로이드 보드
        </span>
        <Image src={PolaboLogo} priority alt="logo" className="px-20 py-0.5" />
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
