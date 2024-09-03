import { preventKeyboardSubmit } from '@/lib/utils/keyboard'

interface PolaroidMessageInputProps {
  message: string
  maxLength: number
  changeMessage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PolaroidMessageInput = ({
  message,
  maxLength,
  changeMessage,
}: PolaroidMessageInputProps) => {
  return (
    <div className="text-lg tracking-tight">
      <input
        type="text"
        value={message}
        onChange={changeMessage}
        onKeyDown={preventKeyboardSubmit}
        className="w-full bg-transparent outline-none"
        maxLength={maxLength}
        placeholder="눌러서 한줄 문구를 입력하세요"
        name="oneLineMessage"
      />
      <p className="text-right text-sm text-gray-400">
        {message.length}/{maxLength}자
      </p>
    </div>
  )
}

export default PolaroidMessageInput
