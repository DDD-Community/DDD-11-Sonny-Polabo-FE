import PolaroidsIcon from 'public/icons/home_polaroids.svg'
import LinkIcon from 'public/icons/linkcopy.svg'
import PolaboLogo from 'public/images/polabo_logo.png'
import Image from 'next/image'
import Button from '@/components/Button'

const HomePage = () => {
  return (
    <div className="h-dvh flex flex-col items-center justify-between">
      <div className="pt-12">
        <PolaroidsIcon className="m-auto" />
        <span className="pt-2 font-jooree text-sm leading-4 block text-center m-auto">
          함께 꾸미는 폴라로이드 보드
        </span>
        <Image src={PolaboLogo} alt="logo" className="px-20 py-0.5" />
      </div>
      <div className="flex flex-col items-center mb-[30px]">
        <div className="text-center mb-2.5">지금까지 몇명이 공유했어요!</div>
        <Button size="lg" className="mb-3">
          시작하기
        </Button>
        <div className="text-center text-gray-400 text-xxs leading-3 mb-1">
          copy link!
        </div>
        <button
          type="button"
          className="p-3 bg-gray-200 rounded-[30px]"
          aria-label="copy link"
        >
          <LinkIcon />
        </button>
      </div>
    </div>
  )
}

export default HomePage
