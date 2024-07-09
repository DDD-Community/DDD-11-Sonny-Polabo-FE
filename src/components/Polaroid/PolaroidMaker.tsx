'use client'

import AddPhotoIcon from 'public/icons/add_photo_alternate.svg'
import { ChangeEvent, useState } from 'react'
import { MAX_LENGTH } from '@/lib'
import Base, { PolaroidImage } from './Base'

const PolaroidMaker = () => {
  const [inputEnabled, setInputEnabled] = useState<boolean>(false)
  const [text, setText] = useState<string>('')

  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
    }
  }

  return (
    <Base>
      <Base.Top>
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
            placeholder="눌러서 텍스트를 입력하세요"
            autoFocus
          />
        ) : (
          <div
            className="text-sm cursor-pointer"
            onClick={() => setInputEnabled(true)}
          >
            눌러서 텍스트를 입력하세요
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
