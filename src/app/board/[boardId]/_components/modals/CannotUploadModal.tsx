import Modal from '@/components/Modal'
import SurprisedIcon from 'public/icons/surprised.svg'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const CannotUploadModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.CenterModal icon={<SurprisedIcon />}>
        <Modal.Title>{'이 보드에는 더이상 업로드가\n 불가합니다.'}</Modal.Title>
        <Modal.Content>(한 보드당 최대 50개 가능)</Modal.Content>
        <Modal.CenterConfirm confirmText="확인" />
      </Modal.CenterModal>
    </Modal>
  )
}

export default CannotUploadModal
