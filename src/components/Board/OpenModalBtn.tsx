'use client'

import AddPolaroid from 'public/icons/add_polaroid.svg'
import { useState } from 'react'
import CreatePolaroidModal from './Modal'

const OpenModalBtn = ({ id }: { id: string }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div>
      {modalOpen && <CreatePolaroidModal setModalOpen={setModalOpen} id={id} />}
      <AddPolaroid
        onClick={() => setModalOpen(true)}
        className="absolute right-10 bottom-10"
      />
    </div>
  )
}

export default OpenModalBtn
