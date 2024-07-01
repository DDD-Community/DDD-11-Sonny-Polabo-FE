'use client'

import React, { createContext, useContext, ReactNode, useMemo } from 'react'
import ReactDOM from 'react-dom'

interface ModalContextProps {
  onClose: () => void
}

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  position?: 'center' | 'bottom'
}

interface ModalHeaderProps {
  children: ReactNode
}

interface ModalBodyProps {
  children: ReactNode
}

interface ModalFooterProps {
  children: ReactNode
}

const ModalContext = createContext<ModalContextProps>({
  onClose: () => {},
})

function Modal({ children, isOpen, onClose, position = 'center' }: ModalProps) {
  const memoizedValue = useMemo(() => ({ onClose }), [])

  return isOpen
    ? ReactDOM.createPortal(
        <div
          className={` fixed inset-0 bg-black bg-opacity-50 flex ${position === 'center' ? 'justify-center items-center' : 'justify-center items-end'}`}
        >
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full m-4">
            <ModalContext.Provider value={memoizedValue}>
              {children}
            </ModalContext.Provider>
          </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement,
      )
    : null
}

function ModalHeader({ children }: ModalHeaderProps) {
  const { onClose } = useContext(ModalContext)

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200">
      <h2 className="text-lg font-semibold">{children}</h2>
      <button
        type="button"
        onClick={onClose}
        className="text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>
    </div>
  )
}

function ModalBody({ children }: ModalBodyProps) {
  return <div className="p-4">{children}</div>
}

function ModalFooter({ children }: ModalFooterProps) {
  return <div className="p-4 border-t border-gray-200">{children}</div>
}

// Modal 네임스페이스에 하위 컴포넌트 연결
Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
