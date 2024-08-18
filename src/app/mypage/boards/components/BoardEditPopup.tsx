import Popup from '@/components/Popup'
import React from 'react'

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
      <div className="flex w-[148px] cursor-default flex-col rounded-lg bg-gray-0 py-2 pl-[22px] shadow-popup">
        <div className="text-xs text-negative" onClick={clickDelete}>
          <span>보드 삭제하기</span>
        </div>
      </div>
    </Popup>
  )
}

export default BoardEditPopup
