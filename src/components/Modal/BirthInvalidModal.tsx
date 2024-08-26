import Modal from '@/components/Modal'
import PinIcon from 'public/icons/pinStroked.svg'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const BirthInvalidModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.CenterModal icon={<PinIcon className="scale-[2.5]" />}>
        <Modal.Title>
          {'생년월일이 제대로 입력되었는지 \n 한 번 더 확인해주세요!'}
        </Modal.Title>
        <Modal.BottomConfirm confirmText="확인" />
      </Modal.CenterModal>
    </Modal>
  )
}

export default BirthInvalidModal
