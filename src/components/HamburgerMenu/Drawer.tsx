'use client'

import CloseIcon from 'public/icons/close.svg'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import ReactDOM from 'react-dom'

interface DrawerContextProps {
  isVisible: boolean
  onClose: () => void
}

const DrawerContext = createContext<DrawerContextProps>({
  isVisible: false,
  onClose: () => {},
})

const DrawerOverlay = ({
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
  const [isVisible, setIsVisible] = useState(false)

  const closeModal = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setIsVisible(true)
      })
    } else {
      closeModal()
    }
  }, [isOpen])

  const handleTransitionEnd = () => {
    if (!isVisible) {
      onClose()
    }
  }

  const context = useMemo(
    () => ({
      isVisible,
      onClose: closeModal,
    }),
    [isVisible],
  )

  return isOpen
    ? ReactDOM.createPortal(
        <div className="fixed left-0 right-0 top-0 z-20 mx-auto flex h-dvh max-w-md flex-col overflow-hidden">
          <DrawerContext.Provider value={context}>
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
          </DrawerContext.Provider>
        </div>,
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
