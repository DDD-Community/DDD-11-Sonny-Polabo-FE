import Modal from '@/components/Modal'
import Base, { PolaroidImage } from '@/components/Polaroid/Base'
import { PolaroidImageProps } from '@/types'
import ArrowBackIcon from 'public/icons/arrow_back_ios.svg'

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
    <Modal isOpen={isOpen} onClose={onClose} closeOnOutsideClick={false}>
      <div className="mx-auto flex h-dvh max-w-md flex-1 flex-col justify-between px-5 py-10">
        <ArrowBackIcon
          className="cursor-pointer text-gray-0"
          onClick={onClose}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <Base size="lg">
            <Base.Top>
              <PolaroidImage imageUrl={imageUrl} filter={filter} />
            </Base.Top>
            <Base.Bottom>
              <p className="h-5">{oneLineMessage}</p>
            </Base.Bottom>
          </Base>
        </div>
      </div>
    </Modal>
  )
}

export default PolaroidDetailModal
