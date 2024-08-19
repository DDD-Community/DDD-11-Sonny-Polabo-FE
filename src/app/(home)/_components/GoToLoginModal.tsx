import Modal from '@/components/Modal'
import { useRouter } from 'next/navigation'
import SurprisedIcon from 'public/icons/surprised.svg'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const GoToLoginModal = ({ isOpen, onClose }: ModalProps) => {
  const router = useRouter()
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.CenterModal icon={<SurprisedIcon />}>
        <Modal.Title>로그인 후 이용 가능합니다.</Modal.Title>
        <Modal.Content>지금 폴라보와 함께 추억을 담아보세요!</Modal.Content>
        <Modal.CenterConfirm
          confirmText="확인"
          onConfirm={() => router.push('/login')}
        />
      </Modal.CenterModal>
    </Modal>
  )
}

export default GoToLoginModal
