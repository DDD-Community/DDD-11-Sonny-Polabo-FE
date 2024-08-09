import { ReactNode } from 'react'
import HeaderBackButton from '@/components/Header/HeaderBackButton'

interface HeaderProps {
  title?: ReactNode
  description?: string
  leftButton?: ReactNode
  rightButton?: ReactNode
}

const Header = ({
  title = '',
  description = '',
  leftButton = null,
  rightButton = null,
}: HeaderProps) => {
  return (
    <>
      <header className="fixed grid h-16 w-full max-w-md grid-cols-3 justify-between bg-gray-0 p-5 shadow-header">
        <div className="justify-self-start">{leftButton}</div>
        <div className="justify-self-center">
          <div className="text-center text-md font-semiBold leading-6">
            {title}
          </div>
          <div className="mt-1 text-center text-xs font-regular leading-4 text-gray-700">
            {description}
          </div>
        </div>
        <div className="justify-self-end">{rightButton}</div>
      </header>
      <div className="block h-16 w-full" />
    </>
  )
}

Header.BackButton = HeaderBackButton

export default Header
