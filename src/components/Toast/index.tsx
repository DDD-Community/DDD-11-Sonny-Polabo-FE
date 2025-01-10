import { ReactNode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { twMerge } from 'tailwind-merge'

interface ToastProps {
  isOpen: boolean
  setClose: () => void
  children: ReactNode
  duration?: number
  className?: string
}

const Toast = ({
  isOpen,
  setClose,
  children,
  duration = 3000,
  className = '',
}: ToastProps) => {
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
          className={twMerge(
            `fixed bottom-10 left-1/2 -translate-x-1/2 transform rounded-3xl bg-gray-1000 bg-opacity-60 px-4 py-1 backdrop-blur-[2px] ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`,
            className,
          )}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className="whitespace-nowrap font-jooree text-gray-0">
            {children}
          </div>
        </div>,
        document.getElementById('toast-root') as HTMLElement,
      )
    : null
}

export default Toast
