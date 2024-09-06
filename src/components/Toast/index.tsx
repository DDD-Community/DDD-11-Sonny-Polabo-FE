import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

interface ToastProps {
  isOpen: boolean
  setClose: () => void
  message: string
  duration?: number
}

const Toast = ({ isOpen, setClose, message, duration = 3000 }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setIsVisible(true))
    } else {
      setIsVisible(false)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, duration)

      return () => clearTimeout(timer)
    }
    return undefined
  }, [isOpen])

  const handleTransitionEnd = () => {
    if (!isVisible) {
      setClose()
    }
  }

  return isOpen
    ? ReactDOM.createPortal(
        <div
          className={`fixed bottom-10 left-1/2 -translate-x-1/2 transform rounded-3xl bg-gray-1000 bg-opacity-60 px-4 py-1 backdrop-blur-[2px] ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onTransitionEnd={handleTransitionEnd}
        >
          <p className="whitespace-nowrap font-jooree text-gray-0">{message}</p>
        </div>,
        document.getElementById('modal-root') as HTMLElement,
      )
    : null
}

export default Toast
