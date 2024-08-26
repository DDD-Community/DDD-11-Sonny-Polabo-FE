'use client'

import HamburgerIcon from 'public/icons/hamburger.svg'
import { useState } from 'react'
import Drawer from './Drawer'
import Menu from './Menu'
import { DrawerProvider } from './DrawerContext'

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
      <DrawerProvider>
        <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Drawer.Close />
          <Menu />
        </Drawer>
      </DrawerProvider>
    </div>
  )
}

export default Hamburger
