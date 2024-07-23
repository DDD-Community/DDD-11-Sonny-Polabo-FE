import PolaroidsIcon from 'public/icons/home_polaroids.svg'
import PolaboLogo from 'public/images/polabo_logo.png'
import Image from 'next/image'
import CreateBoardBtn from './components/CreateBoardBtn'
import CopyLinkBtn from './components/CopyLinkBtn'
import TotalCount from './components/TotalCount'

const HomePage = () => {
  return (
    <div className="fixed left-0 right-0 max-w-md mx-auto h-dvh px-5 flex flex-col items-center justify-between bg-cover bg-[url('/images/home.png')]">
      <div className="pt-12 overscroll-none">
        <PolaroidsIcon className="m-auto" />
        <span className="pt-2 font-jooree text-sm leading-4 block text-center m-auto">
          함께 꾸미는 폴라로이드 보드
        </span>
        <Image src={PolaboLogo} priority alt="logo" className="px-20 py-0.5" />
      </div>
      <div className="flex flex-col w-full items-center mb-[30px]">
        <TotalCount />
        <CreateBoardBtn />
        <CopyLinkBtn />
      </div>
    </div>
  )
}

export default HomePage
