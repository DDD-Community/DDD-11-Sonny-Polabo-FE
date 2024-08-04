import Button from '@/components/Button'
import Image from 'next/image'
import PolaroidsIcon from 'public/icons/home_polaroids.svg'
import KakaoIcon from 'public/icons/kakao.svg'
import ThreePolaroids from 'public/icons/threePolaroids.png'
import PolaboLogo from 'public/images/polabo_logo.png'
import Policy from './components/Policy'

const LoginPage = () => {
  return (
    <div className="fixed left-0 right-0 mx-auto flex h-dvh max-w-md flex-col items-center justify-between bg-gray-0 px-5">
      <div className="overscroll-none pb-8 pt-12">
        <PolaroidsIcon className="m-auto" />
        <span className="m-auto block pt-2 text-center font-jooree text-sm leading-4">
          함께 꾸미는 폴라로이드 보드
        </span>
        <Image src={PolaboLogo} priority alt="logo" className="px-20 py-0.5" />
      </div>
      <Image
        src={ThreePolaroids}
        alt="polaroids icon"
        className="px-20 pb-10"
      />
      <div className="flex w-full flex-col items-center pb-[97px]">
        <div className="pb-2 text-center text-xs">
          지금 폴라보와 함께 추억을 담아보세요!
        </div>
        <Button
          size="lg"
          className="mb-4 flex cursor-pointer items-center justify-center gap-[9px] bg-[#FEE500] font-semiBold text-gray-950 shadow-button active:bg-[#fee500b7]"
        >
          <KakaoIcon />
          카카오로 시작하기
        </Button>
        <Policy />
      </div>
    </div>
  )
}

export default LoginPage
