'use client'

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import ReactDOM from 'react-dom'
import Close from 'public/icons/close.svg'
import Button from '@/components/Button'

interface ModalContextProps {
  isVisible: boolean
  onClose: () => void
}

const ModalContext = createContext<ModalContextProps>({
  isVisible: false,
  onClose: () => {},
})

const ModalOverlay = ({
  children,
  handleTransitionEnd,
}: {
  children: ReactNode
  handleTransitionEnd: () => void
}) => {
  const { isVisible, onClose } = useContext(ModalContext)

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-gray-900/60 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClick}
      onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </div>
  )
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(isOpen)
  }, [isOpen])

  const handleTransitionEnd = () => {
    if (!isVisible) {
      onClose()
    }
  }

  const context = useMemo(
    () => ({
      isVisible,
      onClose: () => setIsVisible(false),
    }),
    [isVisible, setIsVisible],
  )

  return isOpen
    ? ReactDOM.createPortal(
        <ModalContext.Provider value={context}>
          <ModalOverlay handleTransitionEnd={handleTransitionEnd}>
            {children}
          </ModalOverlay>
        </ModalContext.Provider>,
        document.getElementById('modal-root') as HTMLElement,
      )
    : null
}

const CenterModal = ({
  icon,
  children,
}: {
  icon: ReactNode
  children: ReactNode
}) => {
  return (
    <div className="fixed max-w-[300px] pt-10 w-4/5 bg-gray-0 rounded-lg flex flex-col justify-items-start items-start shadow-lg">
      {icon && (
        <div className="absolute -top-[0%] left-[50%] -translate-y-1/2 -translate-x-1/2">
          {icon}
        </div>
      )}
      <div className="flex flex-col w-full justify-center items-center">
        {children}
      </div>
    </div>
  )
}

const BottomModal = ({
  icon,
  children,
}: {
  icon: ReactNode
  children: ReactNode
}) => {
  const { isVisible } = useContext(ModalContext)
  return (
    <div
      className={`fixed w-full bg-gray-0 bottom-0 rounded-t-[20px] flex flex-col justify-items-start items-start shadow-lg transition-transform duration-300  ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      {icon && (
        <div className="w-full flex justify-center mt-5 mb-3">{icon}</div>
      )}
      <div className="flex flex-col w-full justify-center items-center">
        {children}
      </div>
    </div>
  )
}

const ModalClose = () => {
  const { onClose } = useContext(ModalContext)
  return (
    <Close className="absolute right-0 top-0 mr-4 mt-4" onClick={onClose} />
  )
}

const ModalBodyTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-semibold text-md font-semiBold leading-6">
      {children}
    </div>
  )
}

const ModalBodyContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-32 text-center whitespace-pre text-gray-700 mt-2 text-xs leading-4">
      {children}
    </div>
  )
}

const CenterModalConfirm = ({
  confirmText,
  onConfirm = () => {},
}: {
  confirmText: string
  onConfirm?: () => void
}) => {
  const { onClose } = useContext(ModalContext)

  const clickHandler = () => {
    onClose()
    onConfirm()
  }

  return (
    <Button variant="primary" size="md" className="my-4" onClick={clickHandler}>
      {confirmText}
    </Button>
  )
}

const BottomModalConfirm = ({
  confirmText,
  onConfirm = () => {},
}: {
  confirmText: string
  onConfirm?: () => void
}) => {
  const { onClose } = useContext(ModalContext)

  const clickHandler = () => {
    onClose()
    onConfirm()
  }

  return (
    <div className="my-4 w-full flex">
      <Button
        variant="primary"
        size="lg"
        className="mx-8 h-[38px] rounded-md"
        onClick={clickHandler}
      >
        {confirmText}
      </Button>
    </div>
  )
}

const CenterConfirmCancel = ({
  cancelText,
  confirmText,
  onConfirm = () => {},
}: {
  cancelText: string
  confirmText: string
  onConfirm?: () => void
}) => {
  const { onClose } = useContext(ModalContext)

  const clickHandler = () => {
    onClose()
    onConfirm()
  }

  return (
    <div className="my-4 flex gap-1.5">
      <Button variant="secondary" size="sm" onClick={onClose}>
        {cancelText}
      </Button>
      <Button variant="primary" size="sm" onClick={clickHandler}>
        {confirmText}
      </Button>
    </div>
  )
}

const BottomConfirmCancel = ({
  cancelText,
  confirmText,
  onConfirm = () => {},
}: {
  cancelText: string
  confirmText: string
  onConfirm?: () => void
}) => {
  const { onClose } = useContext(ModalContext)

  const clickHandler = () => {
    onClose()
    onConfirm()
  }

  return (
    <div className="my-4 flex gap-1.5">
      <Button
        variant="secondary"
        size="md"
        className="w-[135px]"
        onClick={onClose}
      >
        {cancelText}
      </Button>
      <Button
        variant="primary"
        size="md"
        className="w-[135px]"
        onClick={clickHandler}
      >
        {confirmText}
      </Button>
    </div>
  )
}

Modal.CenterModal = CenterModal
Modal.BottomModal = BottomModal
Modal.Close = ModalClose
Modal.Title = ModalBodyTitle
Modal.Content = ModalBodyContent
Modal.CenterConfirm = CenterModalConfirm
Modal.BottomConfirm = BottomModalConfirm
Modal.CenterConfirmCancel = CenterConfirmCancel
Modal.BottomConfirmCancel = BottomConfirmCancel

export default Modal
