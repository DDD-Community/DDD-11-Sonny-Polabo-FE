import { GTM_EVENT } from '@/lib'
import { preventKeyboardSubmit } from '@/lib/utils/keyboard'
import { sendGTMEvent } from '@next/third-parties/google'
import { useEffect, useRef } from 'react'

interface PolaroidMessageInputProps {
  message: string
  maxLength: number
  changeMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const PolaroidMessageInput = ({
  message,
  maxLength,
  changeMessage,
}: PolaroidMessageInputProps) => {
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }

    ref.current.style.height = 'auto'
    ref.current.style.height = `${ref.current.scrollHeight}px`
  }, [message])

  return (
    <div className="tracking-tight">
      <textarea
        ref={ref}
        value={message}
        onChange={changeMessage}
        onKeyDown={preventKeyboardSubmit}
        className="w-full resize-none bg-transparent text-xl leading-6 outline-none"
        maxLength={maxLength}
        placeholder="눌러서 한줄 문구를 입력하세요"
        name="oneLineMessage"
        rows={1}
        onClick={() => sendGTMEvent({ event: GTM_EVENT.CLICK_INPUT_MESSAGE })}
      />
      <p className="text-right text-sm text-gray-400">
        {message.length}/{maxLength}자
      </p>
    </div>
  )
}

export default PolaroidMessageInput
