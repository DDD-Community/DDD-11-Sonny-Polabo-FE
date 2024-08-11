'use client'

import Button from '@/components/Button'
import Close from 'public/icons/close.svg'
import React, { createContext, ReactNode, useContext, useMemo } from 'react'
import ReactDOM from 'react-dom'

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
  closeOnClick,
}: {
  children: ReactNode
  closeOnClick: boolean
}) => {
  const { isVisible, onClose } = useContext(ModalContext)

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (closeOnClick && event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={`fixed inset-0 z-20 flex items-center justify-center bg-gray-900/60 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  closeOnOutsideClick?: boolean
}

function Modal({
  isOpen,
  onClose,
  children,
  closeOnOutsideClick = true,
}: ModalProps) {
  const context = useMemo(
    () => ({
      isVisible: isOpen,
      onClose,
    }),
    [isOpen, onClose],
  )

  return isOpen
    ? ReactDOM.createPortal(
        <ModalContext.Provider value={context}>
          <ModalOverlay closeOnClick={closeOnOutsideClick}>
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
    <div className="fixed flex w-4/5 max-w-[300px] flex-col items-start justify-items-start rounded-lg bg-gray-0 pt-10 shadow-lg">
      {icon && (
        <div className="absolute -top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          {icon}
        </div>
      )}
      <div className="flex w-full flex-col items-center justify-center">
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
      className={`fixed bottom-0 flex w-full flex-col items-start justify-items-start rounded-t-[20px] bg-gray-0 shadow-lg ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
    >
      {icon && (
        <div className="mb-3 mt-5 flex w-full justify-center">{icon}</div>
      )}
      <div className="flex w-full flex-col items-center justify-center">
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
    <div className="font-semibold whitespace-pre text-center text-md font-semiBold leading-6">
      {children}
    </div>
  )
}

const ModalBodyContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-2 w-40 whitespace-pre text-center text-xs leading-4 text-gray-700">
      {children}
    </div>
  )
}

const CenterModalConfirm = ({
  confirmText,
  onConfirm = () => {},
}: {
  confirmText: ReactNode
  onConfirm?: () => void
}) => {
  const { onClose } = useContext(ModalContext)

  const clickHandler = () => {
    onClose()
    onConfirm()
  }

  return (
    <Button
      variant="primary"
      size="md"
      className="my-4 flex items-center justify-center gap-1"
      onClick={clickHandler}
    >
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
    <div className="my-4 flex w-full">
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
