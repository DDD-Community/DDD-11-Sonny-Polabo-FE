'use client'

import CloseIcon from 'public/icons/close.svg'
import { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDrawer } from './DrawerContext'

const DrawerOverlay = ({
  children,
  closeOnClick,
}: {
  children: ReactNode
  closeOnClick: boolean
}) => {
  const { isVisible, setClose } = useDrawer()

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (closeOnClick && event.target === event.currentTarget) {
      setClose()
    }
  }

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-gray-900/60 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

interface DrawerProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

const Drawer = ({ children, isOpen, onClose }: DrawerProps) => {
  const { isVisible, setClose, setOpen } = useDrawer()

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setOpen())
    } else {
      setClose()
    }
  }, [isOpen])

  const handleTransitionEnd = () => {
    if (!isVisible) {
      onClose()
    }
  }

  return isOpen
    ? ReactDOM.createPortal(
        <div className="fixed left-0 right-0 top-0 z-20 mx-auto flex h-dvh max-w-md flex-col overflow-hidden">
          <DrawerOverlay closeOnClick>
            <div
              className={`absolute top-0 h-dvh w-[220px] transform bg-gray-0 transition-all duration-300 ${
                isVisible ? 'left-0' : '-left-[220px]'
              }`}
              onTransitionEnd={handleTransitionEnd}
            >
              {children}
            </div>
          </DrawerOverlay>
        </div>,
        document.getElementById('modal-root') as HTMLElement,
      )
    : null
}

const DrawerClose = () => {
  const { setClose } = useDrawer()
  return (
    <CloseIcon
      className="absolute right-[14px] top-[18px] cursor-pointer"
      onClick={setClose}
    />
  )
}

Drawer.Close = DrawerClose

export default Drawer
