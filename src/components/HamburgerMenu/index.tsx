'use client'

import HamburgerIcon from 'public/icons/hamburger.svg'
import { useState } from 'react'
import Drawer from './Drawer'
import Menu from './Menu'

const Hamburger = ({
  className = '',
}: {
  className?: React.ComponentProps<'div'>['className']
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={className}>
      <HamburgerIcon
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
      />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Close />
        <Menu loggedIn={false} />
      </Drawer>
    </div>
  )
}

export default Hamburger
