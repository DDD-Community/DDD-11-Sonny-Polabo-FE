import Modal from '@/components/Modal'
import Base, { PolaroidImage } from '@/components/Polaroid/Base'
import { PolaroidImageProps } from '@/types'

interface PolaroidDetailModalProps extends PolaroidImageProps {
  isOpen: boolean
  onClose: () => void
  oneLineMessage: string
}

const PolaroidDetailModal = ({
  isOpen,
  onClose,
  imageUrl,
  oneLineMessage,
  filter,
}: PolaroidDetailModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Base size="lg">
        <Base.Top>
          <PolaroidImage imageUrl={imageUrl} filter={filter} />
        </Base.Top>
        <Base.Bottom>
          <p className="w-[204px] text-wrap">{oneLineMessage}</p>
        </Base.Bottom>
      </Base>
    </Modal>
  )
}

export default PolaroidDetailModal
