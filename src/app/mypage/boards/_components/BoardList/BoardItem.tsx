import EllipsisIcon from 'public/icons/ellipsis.svg'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { sendGTMEvent } from '@next/third-parties/google'
import { GTM_EVENT } from '@/lib'
import DeleteBoardModal from './DeleteBoardModal'
import BoardEditPopup from './BoardEditPopup'
import ChangeBoardNameModal from './ChangeBoardNameModal'

interface BoardListProps {
  title: string
  date: string
  id: string
  onClickBoard: (boardId: string) => void
  onDeleteBoard: (boardId: string) => void
  onRefresh: () => void
}

const BoardItem = ({
  title,
  date,
  id,
  onClickBoard,
  onDeleteBoard,
  onRefresh,
}: BoardListProps) => {
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isChangeNameModalOpen, setIsChangeNameModalOpen] = useState(false)

  const openBoardEditPopup = () => setIsEditPopupOpen(true)
  const closeBoardEditPopup = () => setIsEditPopupOpen(false)

  const closeChangeNameModal = () => setIsChangeNameModalOpen(false)
  const closeDeleteModal = () => setIsDeleteModalOpen(false)

  const onClickDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_DELETE_BOARD })
    setIsEditPopupOpen(false)
    setIsDeleteModalOpen(true)
    e.stopPropagation()
  }

  const onClickChangeName = (e: React.MouseEvent<HTMLDivElement>) => {
    sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_EDIT_BOARDNAME })
    setIsEditPopupOpen(false)
    setIsChangeNameModalOpen(true)
    e.stopPropagation()
  }

  const parseDate = (targetDate: string) => {
    return targetDate.split('T')[0].replaceAll('-', '.')
  }

  const searchParams = useSearchParams()
  const isParticipant = searchParams.get('participant') === 'true'

  return (
    <li className="flex w-full cursor-pointer items-center justify-between border-b border-gray-100 pb-4 pl-7 pr-5 pt-5">
      <div className="w-full" onClick={() => onClickBoard(id)}>
        <div className="text-sm font-semiBold">{title}</div>
        <div className="text-xs text-gray-400">
          만든 날짜: {parseDate(date)}
        </div>
      </div>
      {!isParticipant && (
        <>
          <div className="relative" onClick={openBoardEditPopup}>
            <EllipsisIcon />
            <BoardEditPopup
              isOpen={isEditPopupOpen}
              clickChangeName={onClickChangeName}
              clickDelete={onClickDelete}
              close={closeBoardEditPopup}
            />
          </div>
          <ChangeBoardNameModal
            isOpen={isChangeNameModalOpen}
            onClose={closeChangeNameModal}
            oldName={title}
            boardId={id}
            onRefresh={onRefresh}
          />
          <DeleteBoardModal
            isOpen={isDeleteModalOpen}
            onClose={closeDeleteModal}
            deleteBoard={() => onDeleteBoard(id)}
          />
        </>
      )}
    </li>
  )
}

export default BoardItem
