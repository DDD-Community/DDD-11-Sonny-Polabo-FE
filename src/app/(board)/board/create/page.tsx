'use client'

import { postBoard } from '@/lib'
import { CreateBoardPayload } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const CreateBoardPage = () => {
  const [boardName, setBoardName] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  const handleCreateBoard = async () => {
    setLoading(true)
    try {
      const payload: CreateBoardPayload = { name: boardName }
      const newBoard = await postBoard(payload)
      router.push(`/board/${newBoard.id}`)
    } catch (e) {
      alert('보드 생성에 실패했습니다.')
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-between items-center">
      <h1 className="text-2xl font-bold">내 보드의 이름을 정해주세요!</h1>
      <input
        type="text"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
      />
      <button type="button" onClick={handleCreateBoard}>
        {loading ? '보드 생성중..' : '완료'}
      </button>
    </div>
  )
}

export default CreateBoardPage
