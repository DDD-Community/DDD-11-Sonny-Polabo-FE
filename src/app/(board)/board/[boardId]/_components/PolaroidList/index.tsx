'use client'

import { Polaroid } from '@/types'
import { useState } from 'react'
import PolaroidDetailModal from '@/components/Polaroid/PolaroidDetail'
import PolaroidListItem from './PolaroidListItem'

interface PolaroidListProps {
  polaroids: Polaroid[]
}

const PolaroidList = ({ polaroids }: PolaroidListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPolaroid, setSelectedPolaroid] = useState<Polaroid | null>(
    null,
  )

  const openDetailModal = (polaroid: Polaroid) => {
    setSelectedPolaroid(polaroid)
    setIsModalOpen(true)
  }

  return (
    <div className="mx-auto w-full flex-1 overflow-x-hidden overflow-y-scroll scrollbar-hide">
      <div className="grid grid-cols-2 gap-6 px-[20px] py-[10px]">
        {polaroids.map((item) => (
          <PolaroidListItem
            key={item.id}
            item={item}
            onClick={() => openDetailModal(item)}
          />
        ))}
      </div>
      <PolaroidDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        polaroid={selectedPolaroid}
      />
    </div>
  )
}

export default PolaroidList