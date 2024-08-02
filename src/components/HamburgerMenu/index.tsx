'use client'

import HamburgerIcon from 'public/icons/hamburger.svg'
import { useState } from 'react'
import Drawer from './Drawer'

const Hamburger = ({
  className = '',
}: {
  className?: React.ComponentProps<'div'>['className']
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className={className}>
      <HamburgerIcon
        className="cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Drawer.Close />
      </Drawer>
    </div>
  )
}

export default Hamburger
