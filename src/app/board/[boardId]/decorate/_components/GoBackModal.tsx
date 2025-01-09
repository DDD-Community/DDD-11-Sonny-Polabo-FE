import Modal from '@/components/Modal'
import PolaroidIcon from 'public/icons/modal.svg'

interface GoBackModalProps {
  isOpen: boolean
  onClose: () => void
  goBack: () => void
}

const GoBackModal = ({ isOpen, onClose, goBack }: GoBackModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <Modal.CenterModal icon={<PolaroidIcon />}>
      <Modal.Close />
      <Modal.Title>{'꾸민 스티커가\n사라질 수도 있어요!'}</Modal.Title>
      <Modal.Content>
        {
          '뒤로 가기를 누르면 지금까지 보드에 꾸몄던\n스티커들이 초기화될 수 있어요.'
        }
      </Modal.Content>
      <Modal.CenterConfirmCancel
        confirmText="계속 꾸미기"
        cancelText="뒤로 가기"
        onCancel={goBack}
      />
    </Modal.CenterModal>
  </Modal>
)

export default GoBackModal
