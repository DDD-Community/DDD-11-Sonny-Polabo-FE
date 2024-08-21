import Popup from '@/components/Popup'
import React from 'react'
import DeleteIcon from 'public/icons/delete.svg'

interface BoardEditPopupProps {
  isOpen: boolean
  clickDelete: (e: React.MouseEvent<HTMLDivElement>) => void
  close: () => void
}

const BoardEditPopup = ({
  isOpen,
  clickDelete,
  close,
}: BoardEditPopupProps) => {
  return (
    <Popup isOpen={isOpen} close={close}>
      <div className="flex w-[168px] cursor-pointer flex-col rounded-lg bg-gray-0 py-2 pl-[22px] pr-[12px] shadow-popup">
        <div
          className="flex items-center justify-between text-sm text-negative"
          onClick={clickDelete}
        >
          <span>보드 삭제하기</span>
          <DeleteIcon />
        </div>
      </div>
    </Popup>
  )
}

export default BoardEditPopup
