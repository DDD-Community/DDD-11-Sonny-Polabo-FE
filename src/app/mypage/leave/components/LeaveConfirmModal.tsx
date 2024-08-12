import Modal from '@/components/Modal'
import TwoPolaroidsIcon from 'public/icons/twopolaroids.svg'

interface LeaveConfirmModalProps {
  isOpen: boolean
  onClose: () => void
}
const LeaveConfirmModal = ({ isOpen, onClose }: LeaveConfirmModalProps) => {
  const title = 'POLABO 탈퇴가 완료되었습니다.'
  const content = '그동안 POLABO를\n이용해주셔서 감사합니다.'
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOutsideClick={false}>
      <Modal.CenterModal icon={<TwoPolaroidsIcon />}>
        <Modal.Title>{title}</Modal.Title>
        <Modal.Content>{content}</Modal.Content>
        <Modal.CenterConfirm confirmText="확인" />
      </Modal.CenterModal>
    </Modal>
  )
}

export default LeaveConfirmModal
