import Modal from '@/components/Modal'
import TextInput from '@/components/TextInput'
import { changeMyBoardName } from '@/lib'
import ClipIcon from 'public/icons/sketchIcons-clip-bg.svg'
import { useState } from 'react'

const MAX_BOARD_NAME_LENGTH = 15

interface ChangeBoardNameModalProps {
  isOpen: boolean
  onClose: () => void
  oldName: string
  boardId: string
  onRefresh: () => void
}

const ChangeBoardNameModal = ({
  isOpen,
  onClose,
  oldName,
  boardId,
  onRefresh,
}: ChangeBoardNameModalProps) => {
  const [title, setTitle] = useState(oldName)
  const [hasError, setHasError] = useState(false)
  const isEmpty = title.length === 0

  const onInput = (value: string) => {
    setTitle(value)
    if (value.length > MAX_BOARD_NAME_LENGTH) {
      setHasError(true)
    } else {
      setHasError(false)
    }
  }

  const changeBoardName = async (id: string) => {
    await changeMyBoardName(id, title)
    onRefresh()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setTitle(oldName)
        onClose()
      }}
    >
      <Modal.CenterModal icon={<ClipIcon className="translate-y-2" />}>
        <Modal.Close />
        <Modal.Title>보드 주제 수정</Modal.Title>
        <div className="mt-3">
          <TextInput
            errorMessage={`${MAX_BOARD_NAME_LENGTH}자 이내로 입력 가능해요`}
            description={`${title.length}/${MAX_BOARD_NAME_LENGTH}자`}
            value={title}
            hasError={hasError}
            setValue={onInput}
            icon={null}
          />
        </div>
        <Modal.CenterConfirm
          confirmText="확인"
          disabled={hasError || isEmpty}
          onConfirm={() => changeBoardName(boardId)}
        />
      </Modal.CenterModal>
    </Modal>
  )
}

export default ChangeBoardNameModal
