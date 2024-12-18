import React from 'react'
import Toast from '@/components/Toast'

interface CopyCompleteToastProps {
  show: boolean
  close: () => void
}

const CopyCompleteToast = ({ show, close }: CopyCompleteToastProps) => {
  return (
    <Toast isOpen={show} setClose={close}>
      <div className="">
        <div>
          보드를 꾸미기 위해 <span className="font-semiBold">1장 이상</span>의
        </div>
        <div>폴라로이드를 업로드 해주세요!</div>
      </div>
    </Toast>
  )
}

export default CopyCompleteToast
