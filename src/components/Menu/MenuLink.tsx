'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

const MenuLink = ({
  icon,
  text,
  linkTo,
  onClick = () => {},
}: {
  icon: ReactNode
  text: string
  linkTo: string
  onClick?: () => void
}) => (
  <Link
    href={linkTo}
    onClick={onClick}
    className="flex cursor-pointer items-center gap-[6px] text-gray-700"
  >
    {icon}
    <span className="text-md font-semiBold">{text}</span>
  </Link>
)

export default MenuLink
