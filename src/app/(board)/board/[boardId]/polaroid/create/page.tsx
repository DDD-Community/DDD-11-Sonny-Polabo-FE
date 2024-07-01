'use client'

import { CreatePolaroidPayload } from '@/types'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const CreatePolaroidPage = () => {
  const { boardId } = useParams()

  const [caption, setCaption] = useState<string>('')

  const handleUpload = async () => {
    const payload: CreatePolaroidPayload = {
      boardId: Number(boardId),
      imageUrl: '',
      caption,
    }
    console.log(payload)
  }

  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <h1 className="text-2xl font-bold">사진을 업로드해주세요!</h1>
      <input
        type="text"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="한줄 문구를 입력할 수 있어요"
      />
      <button type="button" onClick={handleUpload}>
        업로드하기
      </button>
    </div>
  )
}

export default CreatePolaroidPage
