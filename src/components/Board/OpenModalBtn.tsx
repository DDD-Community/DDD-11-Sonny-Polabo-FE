'use client'

import { postPolaroid } from '@/lib'
import AddPolaroid from 'public/icons/add_polaroid.svg'
import { useEffect, useState } from 'react'
import CreatePolaroidModal from './Modal'

const OpenModalBtn = ({ id }: { id: string }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [ready, setReady] = useState<boolean>(false)

  //   폴라로이드 생성
  const [imageKey, setImageKey] = useState<string>('')
  const [text, setText] = useState<string>('')

  const createPolaroid = async () => {
    const res = await postPolaroid(id, { imageKey, oneLineMessage: text })
    console.log('>>> POST POL RES: ', res)

    setReady(false)
  }

  useEffect(() => {
    if (ready) {
      console.log('폴라로이드 생성', imageKey, text)
      createPolaroid()
    }
  }, [ready])

  return (
    <div>
      {modalOpen && (
        <CreatePolaroidModal
          id={id}
          setModalOpen={setModalOpen}
          setImageKey={setImageKey}
          text={text}
          setText={setText}
          setReady={setReady}
        />
      )}
      <AddPolaroid
        onClick={() => setModalOpen(true)}
        className="absolute right-10 bottom-10"
      />
    </div>
  )
}

export default OpenModalBtn
