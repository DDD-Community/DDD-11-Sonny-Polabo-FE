import { twMerge } from 'tailwind-merge'

interface PolaroidNicknameProps {
  nickName: string
  className?: string
}

const PolaroidNickname = ({
  className = '',
  nickName,
  ...props
}: PolaroidNicknameProps) => {
  return (
    <div
      className={`${twMerge('py-0.5 text-right text-gray-950', className)}`}
      {...props}
    >
      {nickName ? `From. ${nickName}` : ''}
    </div>
  )
}

export default PolaroidNickname
