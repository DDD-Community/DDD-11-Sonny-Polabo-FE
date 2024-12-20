import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import imageCompression from 'browser-image-compression'
import PolaroidFrame from '@/components/Polaroid/Base/PolaroidFrame'
import PolaroidDescription from '@/components/Polaroid/Base/PolaroidDescription'
import { FontKeyType, ThemaKeyType } from '@/types'
import { getPolaroidStyle } from '@/lib/utils/polaroid'
import PolaroidImageInput from './PolaroidImageInput'
import PolaroidMessageInput from './PolaroidMessageInput'
import PolaroidNicknameInput from './PolaroidNicknameInput'

const IMAGE_COMPRESSION_OPTIONS = {
  maxSizeMB: 0.2,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
}

interface PolaroidMakerProps {
  image: File | null
  message: string
  nickname: string
  setImage: Dispatch<SetStateAction<File | null>>
  setMessage: Dispatch<SetStateAction<string>>
  setNickname: Dispatch<SetStateAction<string>>
  fontKey: FontKeyType
  themaKey: ThemaKeyType
}

const MAX_MESSAGE_LENGTH = 30
const MAX_FROM_LENGTH = 10

const PolaroidMaker = ({
  themaKey,
  image,
  message,
  nickname,
  setImage,
  setMessage,
  setNickname,
  fontKey,
}: PolaroidMakerProps) => {
  const [previewFile, setPreviewFile] = useState<string | null>(null)

  useEffect(() => {
    if (image) {
      const fileReader = new FileReader()
      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          setPreviewFile(fileReader.result)
        }
      }
      fileReader.readAsDataURL(image)
    }
  }, [image])

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files?.length > 0) {
      const file = event.target.files[0]
      const compressedFile = await imageCompression(
        file,
        IMAGE_COMPRESSION_OPTIONS,
      )
      setImage(compressedFile)
    }
  }

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > MAX_MESSAGE_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_MESSAGE_LENGTH)
    }
    setMessage(e.target.value)
  }

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_FROM_LENGTH) {
      e.target.value = e.target.value.slice(0, MAX_FROM_LENGTH)
    }
    setNickname(e.target.value)
  }

  return (
    <PolaroidFrame
      className="mx-auto flex flex-col overflow-y-hidden"
      fontKey={fontKey}
      themaKey={themaKey}
    >
      <div className="px-3 pb-3 pt-5" style={getPolaroidStyle(themaKey)}>
        <PolaroidImageInput
          imageUrl={previewFile}
          changeImage={handleImageChange}
        />
      </div>
      <PolaroidDescription themaKey={themaKey}>
        <PolaroidMessageInput
          message={message}
          maxLength={MAX_MESSAGE_LENGTH}
          changeMessage={handleMessageChange}
        />
        <PolaroidNicknameInput
          nickname={nickname}
          maxLength={MAX_FROM_LENGTH}
          changeNickname={handleNicknameChange}
        />
      </PolaroidDescription>
    </PolaroidFrame>
  )
}

export default PolaroidMaker
