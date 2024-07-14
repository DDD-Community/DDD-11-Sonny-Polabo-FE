'use client'

import TextInput from '@/components/TextInput'
import { ReactNode, useState } from 'react'
import Button from '@/components/Button'
import { postBoard } from '@/lib'
import { useRouter } from 'next/navigation'

const BoardNameForm = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState('')
  const router = useRouter()

  const createBoard = async () => {
    const boardId = await postBoard({
      title,
      userId: null,
    })

    router.push(`/board/${boardId}`)
  }

  return (
    <>
      <TextInput className="w-full px-10" value={title} setValue={setTitle} />
      {children}
      <Button type="submit" size="lg" onClick={createBoard}>
        완료
      </Button>
    </>
  )
}

export default BoardNameForm
