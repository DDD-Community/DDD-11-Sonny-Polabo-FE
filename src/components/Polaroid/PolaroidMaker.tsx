'use client'

import rotateImageIfNeeded from '@/lib/utils/image'
import { preventKeyboardSubmit } from '@/lib/utils/keyboard'
import imageCompression from 'browser-image-compression'
import AddPhotoIcon from 'public/icons/add_photo_alternate.svg'
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import Base, { PolaroidImage } from './Base'

interface PolaroidMakerProps {
  setBtnDisabled: Dispatch<SetStateAction<boolean>>
  setCompressedFile: Dispatch<SetStateAction<File | null>>
}

const MAX_LENGTH = 20

const PolaroidMaker = ({
  setBtnDisabled,
  setCompressedFile,
}: PolaroidMakerProps) => {
  const [text, setText] = useState<string>('')
  const [fileUrl, setFileUrl] = useState<string | null>(null)

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFileUrl(null)
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      const rotatedFile = await rotateImageIfNeeded(file)

      const fileReader = new FileReader()
      // image compression
      const options = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      }
      const compressedFile = await imageCompression(rotatedFile, options)
      setCompressedFile(compressedFile)

      // image preview
      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          setFileUrl(fileReader.result)
        }
      }
      fileReader.readAsDataURL(compressedFile)
    }
  }

  useEffect(() => {
    setBtnDisabled(!fileUrl)
  }, [fileUrl, setBtnDisabled])

  return (
    <Base className="m-4" size="lg">
      <Base.Top>
        <div
          className="flex h-full w-full cursor-pointer items-center justify-center bg-gray-950"
          onClick={() => {
            document.getElementById('fileInput')?.click()
          }}
        >
          <input
            accept="image/*"
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
            name="fileInput"
          />
          {fileUrl ? (
            <PolaroidImage imageUrl={fileUrl} />
          ) : (
            <AddPhotoIcon className="text-gray-0" />
          )}
        </div>
      </Base.Top>
      <Base.Bottom>
        <input
          type="text"
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (e.target.value.length > MAX_LENGTH) {
              e.target.value = e.target.value.slice(0, MAX_LENGTH)
            }
            setText(e.target.value)
          }}
          onKeyDown={preventKeyboardSubmit}
          className="w-[204px] bg-transparent outline-none"
          maxLength={MAX_LENGTH}
          placeholder="눌러서 한줄 문구를 입력하세요"
          name="oneLineMessage"
        />
        <p className="text-right text-sm text-gray-400">
          {text.length}/{MAX_LENGTH}자
        </p>
      </Base.Bottom>
    </Base>
  )
}

export default PolaroidMaker
