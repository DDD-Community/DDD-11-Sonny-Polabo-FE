'use client'

import CloseIcon from 'public/icons/close.svg'
import { ReactNode, createContext, useContext, useMemo } from 'react'
import ReactDOM from 'react-dom'

interface DrawerContextProps {
  isVisible: boolean
  onClose: () => void
}

const DrawerContext = createContext<DrawerContextProps>({
  isVisible: false,
  onClose: () => {},
})

const ModalOverlay = ({
  children,
  closeOnClick,
}: {
  children: ReactNode
  closeOnClick: boolean
}) => {
  const { isVisible, onClose } = useContext(DrawerContext)

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (closeOnClick && event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-900/60 ${
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
  const context = useMemo(
    () => ({
      isVisible: isOpen,
      onClose,
    }),
    [isOpen, onClose],
  )

  return isOpen
    ? ReactDOM.createPortal(
        <DrawerContext.Provider value={context}>
          <ModalOverlay closeOnClick>
            <div className="fixed left-0 top-0 h-dvh w-[220px] bg-gray-0">
              {children}
            </div>
          </ModalOverlay>
        </DrawerContext.Provider>,
        document.getElementById('modal-root') as HTMLElement,
      )
    : null
}

const DrawerClose = () => {
  const { onClose } = useContext(DrawerContext)
  return (
    <CloseIcon
      className="absolute right-[14px] top-[18px] cursor-pointer"
      onClick={onClose}
    />
  )
}

Drawer.Close = DrawerClose

export default Drawer
