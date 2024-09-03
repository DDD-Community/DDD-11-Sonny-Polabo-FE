import Modal from '@/components/Modal'
import { Polaroid } from '@/types'
import PolaroidCard from '@/components/PolaroidCard'

interface PolaroidDetailModalProps {
  isOpen: boolean
  onClose: () => void
  polaroid: Polaroid | null
}

const PolaroidDetailModal = ({
  isOpen,
  onClose,
  polaroid,
}: PolaroidDetailModalProps) => {
  if (!polaroid) {
    return null
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <PolaroidCard polaroid={polaroid} />
    </Modal>
  )
}

export default PolaroidDetailModal
