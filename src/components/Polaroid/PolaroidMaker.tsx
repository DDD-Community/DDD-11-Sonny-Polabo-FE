'use client'

import { MAX_LENGTH } from '@/lib'
import rotateImageIfNeeded from '@/lib/utils/image'
import AddPhotoIcon from 'public/icons/add_photo_alternate.svg'
import { ChangeEvent, useEffect, useState } from 'react'
import Base, { PolaroidImage } from './Base'

interface PolaroidMakerProps {
  setButtonDisabled: (disabled: boolean) => void
  selectedFile: File | null
  setSelectedFile: (file: File | null) => void
  text: string
  setText: (text: string) => void
}

const PolaroidMaker = ({
  setButtonDisabled,
  selectedFile,
  setSelectedFile,
  text,
  setText,
}: PolaroidMakerProps) => {
  const [inputEnabled, setInputEnabled] = useState<boolean>(false)

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      const rotatedUrl = await rotateImageIfNeeded(file)
      setSelectedFile(rotatedUrl)
    }
  }

  useEffect(() => {
    setButtonDisabled(!selectedFile)
  }, [selectedFile, setButtonDisabled])

  return (
    <Base>
      <Base.Top size="lg">
        <div
          className="cursor-pointer w-full h-full bg-gray-950 flex items-center justify-center"
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
          />
          {selectedFile ? (
            <PolaroidImage imageUrl={URL.createObjectURL(selectedFile)} />
          ) : (
            <AddPhotoIcon className="text-gray-0" />
          )}
        </div>
      </Base.Top>
      <Base.Bottom>
        {inputEnabled ? (
          <input
            type="text"
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.value.length > MAX_LENGTH) {
                e.target.value = e.target.value.slice(0, MAX_LENGTH)
              }
              setText(e.target.value)
            }}
            className="bg-transparent w-full outline-none text-sm"
            maxLength={MAX_LENGTH}
            placeholder="눌러서 한줄 문구를 입력하세요"
            autoFocus
          />
        ) : (
          <div
            className="text-sm cursor-pointer"
            onClick={() => {
              setInputEnabled(true)
              setText('')
            }}
          >
            눌러서 한줄 문구를 입력하세요
          </div>
        )}

        <p className="text-xs text-gray-400 text-right">
          {text.length}/{MAX_LENGTH}
        </p>
      </Base.Bottom>
    </Base>
  )
}

export default PolaroidMaker
