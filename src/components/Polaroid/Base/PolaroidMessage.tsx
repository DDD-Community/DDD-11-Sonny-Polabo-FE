import { twMerge } from 'tailwind-merge'

interface PolaroidMessageProps {
  message: string
  className?: string
}

const PolaroidMessage = ({ message, className = '' }: PolaroidMessageProps) => {
  return (
    <div
      className={`${twMerge('overflow-hidden overflow-ellipsis whitespace-nowrap pb-1', className)}`}
    >
      {message}
    </div>
  )
}

export default PolaroidMessage
