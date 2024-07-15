import PolaroidsIcon from 'public/icons/home_polaroids.svg'
import PolaboLogo from 'public/images/polabo_logo.png'
import Image from 'next/image'
import CreateBoardBtn from './components/CreateBoardBtn'
import CopyLinkBtn from './components/CopyLinkBtn'
import TotalCount from './components/TotalCount'

const HomePage = () => {
  return (
    <div className="h-dvh flex flex-col items-center justify-between">
      <video
        autoPlay
        loop
        playsInline
        muted
        preload="auto"
        className="fixed top -z-10 w-full h-full object-cover"
      >
        <source src="videos/home.mp4" type="video/mp4" />
      </video>
      <div className="pt-12">
        <PolaroidsIcon className="m-auto" />
        <span className="pt-2 font-jooree text-sm leading-4 block text-center m-auto">
          함께 꾸미는 폴라로이드 보드
        </span>
        <Image src={PolaboLogo} alt="logo" className="px-20 py-0.5" />
      </div>
      <div className="flex flex-col items-center mb-[30px]">
        <TotalCount />
        <CreateBoardBtn />
        <CopyLinkBtn />
      </div>
    </div>
  )
}

export default HomePage
