'use client'

import HamburgerIcon from 'public/icons/hamburger.svg'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import Drawer from './Drawer'
import Menu from './Menu'

const Hamburger = ({
  className = '',
}: {
  className?: React.ComponentProps<'div'>['className']
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data: session, status } = useSession()
  console.log('session', session, status)

  return (
    <div className={className}>
      <HamburgerIcon
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
      />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Close />
        <Menu loggedIn={status === 'authenticated'} />
      </Drawer>
    </div>
  )
}

export default Hamburger
