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
  onClose: () => Promise<void>
}

const DrawerContext = createContext<DrawerContextProps>({
  isVisible: false,
  onClose: async () => {},
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
      className={`absolute inset-0 flex items-center justify-center bg-gray-900/60 ${
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
  const [closePromise, setClosePromise] = useState<{
    resolve: () => void
  } | null>(null)

  const closeModal = () => {
    setIsVisible(false)
    return new Promise<void>((resolve) => {
      // onClose()
      setClosePromise({ resolve })
    })
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
      if (closePromise) {
        closePromise.resolve()
        setClosePromise(null)
      }
    }
  }

  const context = useMemo(
    () => ({
      isVisible,
      onClose: closeModal,
    }),
    [isVisible, setIsVisible],
  )

  if (!isOpen && !isVisible) return null

  return ReactDOM.createPortal(
    <div className="fixed left-0 right-0 top-0 mx-auto flex h-dvh max-w-md flex-col overflow-hidden">
      <DrawerContext.Provider value={context}>
        <ModalOverlay closeOnClick>
          <div
            className={`absolute left-0 top-0 h-dvh w-[220px] bg-gray-0 ${isVisible ? 'animate-drawer-slide-in' : 'animate-drawer-slide-out'} transition-transform`}
            onTransitionEnd={handleTransitionEnd}
          >
            {children}
          </div>
        </ModalOverlay>
      </DrawerContext.Provider>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  )
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
