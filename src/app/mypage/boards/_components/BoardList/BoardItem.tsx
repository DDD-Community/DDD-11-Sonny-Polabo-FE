import EllipsisIcon from 'public/icons/ellipsis.svg'
import React, { useState } from 'react'
import DeleteBoardModal from './DeleteBoardModal'
import BoardEditPopup from './BoardEditPopup'

interface BoardListProps {
  title: string
  date: string
  id: string
  onClickBoard: (boardId: string) => void
  onDeleteBoard: (boardId: string) => void
}

const BoardItem = ({
  title,
  date,
  id,
  onClickBoard,
  onDeleteBoard,
}: BoardListProps) => {
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const openBoardEditPopup = () => setIsEditPopupOpen(true)
  const closeBoardEditPopup = () => setIsEditPopupOpen(false)

  const closeDeleteModal = () => setIsDeleteModalOpen(false)

  const onClickDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsEditPopupOpen(false)
    setIsDeleteModalOpen(true)
    e.stopPropagation()
  }

  const parseDate = (targetDate: string) => {
    return targetDate.split('T')[0].replaceAll('-', '.')
  }

  return (
    <li className="flex w-full cursor-pointer items-center justify-between border-b border-gray-100 pb-4 pl-7 pr-5 pt-5">
      <div className="w-full" onClick={() => onClickBoard(id)}>
        <div className="text-sm font-semiBold">{title}</div>
        <div className="text-xs text-gray-400">
          만든 날짜: {parseDate(date)}
        </div>
      </div>
      <div className="relative" onClick={openBoardEditPopup}>
        <EllipsisIcon />
        <BoardEditPopup
          isOpen={isEditPopupOpen}
          clickDelete={onClickDelete}
          close={closeBoardEditPopup}
        />
      </div>
      <DeleteBoardModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        deleteBoard={() => onDeleteBoard(id)}
      />
    </li>
  )
}

export default BoardItem
