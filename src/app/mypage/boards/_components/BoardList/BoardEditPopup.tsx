import Popup from '@/components/Popup'
import React from 'react'

interface BoardEditPopupProps {
  isOpen: boolean
  clickDelete: (e: React.MouseEvent<HTMLDivElement>) => void
  clickChangeName: (e: React.MouseEvent<HTMLDivElement>) => void
  close: () => void
}

const BoardEditPopup = ({
  isOpen,
  clickDelete,
  clickChangeName,
  close,
}: BoardEditPopupProps) => {
  return (
    <Popup isOpen={isOpen} close={close}>
      <div className="flex w-[168px] cursor-pointer flex-col rounded-lg bg-gray-0 shadow-popup">
        <div
          className="border-b border-b-gray-300 py-2 pl-[22px] text-sm text-gray-950"
          onClick={clickChangeName}
        >
          <span>보드 주제 수정하기</span>
        </div>
        <div
          className="py-2 pl-[22px] text-sm text-negative"
          onClick={clickDelete}
        >
          <span>보드 삭제하기</span>
        </div>
      </div>
    </Popup>
  )
}

export default BoardEditPopup
