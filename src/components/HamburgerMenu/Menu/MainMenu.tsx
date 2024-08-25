import Link from 'next/link'
import { ReactNode } from 'react'

const MainMenu = ({
  icon,
  text,
  linkTo,
}: {
  icon: ReactNode
  text: string
  linkTo: string
}) => (
  <Link
    href={linkTo}
    className="flex cursor-pointer items-center gap-[6px] text-gray-700"
  >
    {icon}
    <span className="text-md font-semiBold">{text}</span>
  </Link>
)

export default MainMenu
