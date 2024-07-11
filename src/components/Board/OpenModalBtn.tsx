'use client'

import dynamic from 'next/dynamic'
import AddPolaroid from 'public/icons/add_polaroid.svg'
import { useState } from 'react'

const CreatePolaroidModal = dynamic(() => import('@/components/Board/Modal'), {
  ssr: false,
})

const OpenModalBtn = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div>
      {modalOpen && <CreatePolaroidModal setModalOpen={setModalOpen} />}
      <AddPolaroid
        onClick={() => setModalOpen(true)}
        className="absolute right-10 bottom-10"
      />
    </div>
  )
}

export default OpenModalBtn
