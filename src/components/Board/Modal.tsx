'use client'

import { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

interface ModalProps {
  children: ReactNode
}

const Modal = ({ children }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null
  return ReactDOM.createPortal(
    <div className="w-full h-full fixed inset-0 bg-gray-950 bg-opacity-60 flex">
      {children}
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  )
}

export default Modal
