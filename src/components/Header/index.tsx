import { ReactNode } from 'react'
import HeaderBackButton from '@/components/Header/HeaderBackButton'

interface HeaderProps {
  title: string
  description?: string
  leftButton?: ReactNode
  rightButton?: ReactNode
}

const Header = ({
  title,
  description = '',
  leftButton = <div />,
  rightButton = <div />,
}: HeaderProps) => {
  return (
    <>
      <header className="fixed flex h-16 w-full max-w-md justify-between bg-gray-0 p-5 shadow-[0_1px_2px_0_rgba(0,0,0,0.10)]">
        {leftButton}
        <div className="flex flex-col items-center">
          <div className="text-md font-semiBold leading-6">{title}</div>
          <div className="mt-1 text-xs font-regular leading-4 text-gray-700">
            {description}
          </div>
        </div>
        {rightButton}
      </header>
      <div className="block h-16 w-full" />
    </>
  )
}

Header.BackButton = HeaderBackButton

export default Header
