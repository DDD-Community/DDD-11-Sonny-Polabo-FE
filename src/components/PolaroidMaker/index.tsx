import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import imageCompression from 'browser-image-compression'
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
}

const MAX_MESSAGE_LENGTH = 20
const MAX_FROM_LENGTH = 10

const PolaroidMaker = ({
  image,
  message,
  nickname,
  setImage,
  setMessage,
  setNickname,
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

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    <div className="mx-auto flex w-[272px] flex-col overflow-y-hidden rounded bg-[#f3f3f3] font-hesom">
      <div className="mt-5 px-3">
        <PolaroidImageInput
          imageUrl={previewFile}
          changeImage={handleImageChange}
        />
      </div>
      <div
        className="mt-3 w-full bg-[#ececec] px-4 pb-3"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #EAEAEA',
        }}
      >
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
      </div>
    </div>
  )
}

export default PolaroidMaker
