import Modal from '@/components/Modal'
import SurprisedIcon from 'public/icons/surprised.svg'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

const AskBfCloseModal = ({ isOpen, onClose, onConfirm }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.CenterModal icon={<SurprisedIcon />}>
        <Modal.Close />
        <Modal.Title>폴라로이드 등록을 중단할까요?</Modal.Title>
        <Modal.Content>지금까지 작성한 내용이 사라져요.</Modal.Content>
        <Modal.CenterConfirmCancel
          cancelText="아니요"
          confirmText="예"
          onConfirm={onConfirm}
        />
      </Modal.CenterModal>
    </Modal>
  )
}

export default AskBfCloseModal
