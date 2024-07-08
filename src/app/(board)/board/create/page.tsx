'use client'

import TextInput from '@/components/TextInput'
import { postBoard } from '@/lib'
import { CreateBoardPayload } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const CreateBoardPage = () => {
  const [boardName, setBoardName] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()

  const handleCreateBoard = async () => {
    if (boardName.length >= 20) {
      alert('20자 미만으로 입력해주세요.')
      return
    }

    setLoading(true)
    try {
      const payload: CreateBoardPayload = { title: boardName, userId: null }
      const newBoard = await postBoard(payload)

      router.push(`/board/${newBoard}`)
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
      <TextInput value={boardName} setValue={setBoardName} />

      <button type="button" onClick={handleCreateBoard}>
        {loading ? '보드 생성중..' : '완료'}
      </button>
    </div>
  )
}

export default CreateBoardPage
