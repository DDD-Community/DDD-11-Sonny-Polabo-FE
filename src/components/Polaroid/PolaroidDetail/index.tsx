import Modal from '@/components/Modal'
import { Polaroid } from '@/types'
import PolaroidImage from '@/components/Polaroid/Base/PolaroidImage'
import PolaroidFrame from '@/components/Polaroid/Base/PolaroidFrame'
import PolaroidDescription from '@/components/Polaroid/Base/PolaroidDescription'
import PolaroidMessage from '@/components/Polaroid/Base/PolaroidMessage'
import PolaroidNickname from '@/components/Polaroid/Base/PolaroidNickname'

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
      <PolaroidFrame className="mx-auto flex w-[272px] touch-pinch-zoom flex-col overflow-y-hidden">
        <div className="mt-5 px-3">
          <PolaroidImage imageUrl={polaroid.imageUrl} />
        </div>
        <PolaroidDescription>
          <PolaroidMessage
            className="min-h-6 text-xl"
            message={polaroid.oneLineMessage}
          />
          <PolaroidNickname
            className="min-h-5 text-lg"
            nickName={polaroid.nickname}
          />
        </PolaroidDescription>
      </PolaroidFrame>
    </Modal>
  )
}

export default PolaroidDetailModal
