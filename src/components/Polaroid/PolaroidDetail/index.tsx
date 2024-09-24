import Modal from '@/components/Modal'
import PolaroidDescription from '@/components/Polaroid/Base/PolaroidDescription'
import PolaroidFrame from '@/components/Polaroid/Base/PolaroidFrame'
import PolaroidImage from '@/components/Polaroid/Base/PolaroidImage'
import PolaroidMessage from '@/components/Polaroid/Base/PolaroidMessage'
import PolaroidNickname from '@/components/Polaroid/Base/PolaroidNickname'
import { Polaroid } from '@/types'
import CloseIcon from 'public/icons/close.svg'
import { deletePolaroid } from '@/lib'
import PolaroidDeleteBtn from './PolaroidDeleteBtn'

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

  const onDelete = () => {
    deletePolaroid(polaroid.id)
  }

  // TODO: 내가 만든 보드인지 확인하고, 보드 생성자에게만 삭제 버튼 렌더

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOutsideClick={false}>
      <div className="w-md mx-auto flex h-dvh max-w-md flex-1 flex-col justify-between px-5 py-10">
        <CloseIcon className="cursor-pointer text-gray-0" onClick={onClose} />
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

        <PolaroidDeleteBtn detailModalClose={onClose} onDelete={onDelete} />
      </div>
    </Modal>
  )
}

export default PolaroidDetailModal
