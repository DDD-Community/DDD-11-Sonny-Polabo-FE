import { ReactNode } from 'react'
import HeaderBackButton from '@/components/Header/HeaderBackButton'
import { twMerge } from 'tailwind-merge'

interface HeaderProps {
  title?: ReactNode
  description?: string
  leftButton?: ReactNode
  rightButton?: ReactNode
  shadow?: boolean
  className?: string
}

const Header = ({
  title = '',
  description = '',
  leftButton = null,
  rightButton = null,
  shadow = true,
  className = '',
}: HeaderProps) => {
  return (
    <>
      <header
        className={twMerge(
          `fixed z-10 flex h-16 w-full max-w-md justify-between bg-gray-0 p-5 ${shadow && 'shadow-header'}`,
          className,
        )}
      >
        <div className="w-6 cursor-pointer">{leftButton}</div>
        <div className="text-gray-900">
          <div className="text-center text-md font-semiBold leading-6">
            {title}
          </div>
          <div className="mt-1 text-center text-xs font-regular leading-4">
            {description}
          </div>
        </div>
        <div className="w-6 cursor-pointer">{rightButton}</div>
      </header>
      <div className="block h-16 w-full" />
    </>
  )
}

Header.BackButton = HeaderBackButton

export default Header
