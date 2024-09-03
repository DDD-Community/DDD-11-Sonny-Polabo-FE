import Modal from '@/components/Modal'
import { Polaroid } from '@/types'
import PolaroidImage from '@/components/Polaroid/Base/PolaroidImage'

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
      <div className="mx-auto flex w-[272px] flex-col overflow-y-hidden rounded bg-[#f3f3f3] font-hesom">
        <div className="mt-5 px-3">
          <PolaroidImage imageUrl={polaroid.imageUrl} />
        </div>
        <div
          className="flex flex-col gap-0.5 px-4 pb-2"
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #EAEAEA',
          }}
        >
          <span className="min-h-6 overflow-hidden overflow-ellipsis whitespace-nowrap pb-1 text-xl">
            {polaroid.oneLineMessage}
          </span>
          <span className="min-h-5 py-0.5 text-right text-lg text-gray-950">
            From. {polaroid.nickname}
          </span>
        </div>
      </div>
    </Modal>
  )
}

export default PolaroidDetailModal
