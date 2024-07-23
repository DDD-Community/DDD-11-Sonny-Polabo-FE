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
        <Modal.Title>{'폴라로이드 제작을\n 그만 하시겠습니까?'}</Modal.Title>
        <Modal.Content>여태까지 작성한 내용이 사라져요.</Modal.Content>
        <Modal.BottomConfirmCancel
          cancelText="아니요"
          confirmText="예"
          onConfirm={onConfirm}
        />
      </Modal.CenterModal>
    </Modal>
  )
}

export default AskBfCloseModal
