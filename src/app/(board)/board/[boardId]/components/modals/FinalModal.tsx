import Modal from '@/components/Modal'
import SurprisedIcon from 'public/icons/surprised.svg'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

const FinalModal = ({ isOpen, onClose, onConfirm }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.CenterModal icon={<SurprisedIcon />}>
        <Modal.Title>
          {'업로드 후에는\n 수정 및 삭제가 불가합니다.'}
        </Modal.Title>
        <Modal.Content>폴라로이드를 업로드 할까요?</Modal.Content>

        <Modal.BottomConfirmCancel
          cancelText="아니요"
          confirmText="예"
          onConfirm={onConfirm}
        />
      </Modal.CenterModal>
    </Modal>
  )
}

export default FinalModal
