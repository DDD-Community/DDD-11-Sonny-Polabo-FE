import Button from '@/components/Button'
import Modal from '@/components/Modal'
import SurprisedIcon from 'public/icons/surprised.svg'

interface ModalProps {
  isOpen: boolean
  onClose: () => Promise<void>
  onConfirm: () => void
}

const AskBfCloseModal = ({ isOpen, onClose, onConfirm }: ModalProps) => {
  const clickHandler = () => {
    return onClose().then(() => onConfirm())
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.CenterModal icon={<SurprisedIcon />}>
        <Modal.Title>폴라로이드 등록을 중단할까요?</Modal.Title>
        <Modal.Content>여태까지 작성한 내용이 사라져요.</Modal.Content>
        <div className="my-4 flex gap-1.5">
          <Button
            variant="secondary"
            size="md"
            className="w-[135px]"
            onClick={clickHandler}
          >
            예
          </Button>
          <Button
            variant="primary"
            size="md"
            className="w-[135px]"
            onClick={onClose}
          >
            아니오
          </Button>
        </div>
      </Modal.CenterModal>
    </Modal>
  )
}

export default AskBfCloseModal
