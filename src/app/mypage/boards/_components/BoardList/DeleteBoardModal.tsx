import Modal from '@/components/Modal'
import PolaroidIcon from 'public/icons/modal.svg'

interface DeleteBoardModalProps {
  isOpen: boolean
  onClose: () => void
  deleteBoard: () => void
}

const DeleteBoardModal = ({
  isOpen,
  onClose,
  deleteBoard,
}: DeleteBoardModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.CenterModal icon={<PolaroidIcon />}>
        <Modal.Close />
        <Modal.Title>정말 삭제하시겠습니까?</Modal.Title>
        <Modal.Content>
          {'보드와 업로드된 폴라로이드가\n모두 사라져요.'}
        </Modal.Content>
        <Modal.CenterConfirmCancel
          confirmText="네"
          cancelText="아니오"
          onConfirm={deleteBoard}
        />
      </Modal.CenterModal>
    </Modal>
  )
}

export default DeleteBoardModal
