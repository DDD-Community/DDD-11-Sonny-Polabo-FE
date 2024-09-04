import { preventKeyboardSubmit } from '@/lib/utils/keyboard'
import { useEffect, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { getPolaroidNickname } from '@/lib/utils/polaroid'

interface PolaroidNicknameInputProps {
  nickname: string
  maxLength: number
  changeNickname: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PolaroidNicknameInput = ({
  nickname,
  maxLength,
  changeNickname,
}: PolaroidNicknameInputProps) => {
  const [width, setWidth] = useState<number>(60)
  const [showBorder, setShowBorder] = useState<boolean>(true)
  const [placeholder, setPlaceholder] = useState<string>('')
  const { data: session } = useSession()

  useEffect(() => {
    setPlaceholder(getPolaroidNickname(nickname, session))
  }, [nickname, session])

  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    setWidth(Math.max(50, ref.current.offsetWidth) + 10)
  }, [nickname, placeholder])

  const border = showBorder ? 'border-gray-900 border-b' : ''

  return (
    <div className="flex w-full justify-end gap-1 text-lg">
      <span>From. </span>
      <div className={`${border} -px-3`}>
        <input
          type="text"
          value={nickname}
          onChange={changeNickname}
          onKeyDown={preventKeyboardSubmit}
          className="h-6 bg-transparent text-center outline-none"
          maxLength={maxLength}
          onFocus={() => setShowBorder(true)}
          onBlur={() => setShowBorder(!nickname)}
          placeholder={placeholder}
          name="oneLineMessage"
          style={{
            width: `${width}px`,
          }}
        />
      </div>
      <span ref={ref} className="absolute -z-10 whitespace-pre opacity-0">
        {nickname || placeholder}
      </span>
    </div>
  )
}

export default PolaroidNicknameInput
