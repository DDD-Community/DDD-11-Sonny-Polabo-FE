import Image from 'next/image'
import PolaroidsIcon from 'public/icons/home_polaroids.svg'
import ThreePolaroids from 'public/icons/threePolaroids.png'
import PolaboLogo from 'public/images/polabo_logo.png'
import KakaoLogin from './components/KakaoLogin'
import Policy from './components/Policy'

const LoginPage = () => {
  return (
    <div className="flex h-dvh flex-col items-center justify-between px-5">
      <div className="pb-8 pt-12">
        <PolaroidsIcon className="m-auto" />
        <span className="m-auto block pt-2 text-center font-jooree text-sm leading-4">
          함께 꾸미는 폴라로이드 보드
        </span>
        <Image src={PolaboLogo} priority alt="logo" className="px-20 py-0.5" />
      </div>
      <Image
        src={ThreePolaroids}
        priority
        alt="polaroids icon"
        className="px-20 pb-10"
      />
      <div className="flex w-full flex-col items-center pb-[97px]">
        <div className="pb-2 text-center text-xs">
          지금 폴라보와 함께 추억을 담아보세요!
        </div>
        <KakaoLogin />
        <Policy />
      </div>
    </div>
  )
}

export default LoginPage
