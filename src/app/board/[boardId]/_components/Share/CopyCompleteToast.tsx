import React from 'react'
import Toast from '@/components/Toast'

interface CopyCompleteToastProps {
  show: boolean
  close: () => void
}

const CopyCompleteToast = ({ show, close }: CopyCompleteToastProps) => {
  return (
    <Toast isOpen={show} setClose={close}>
      클립보드에 링크가 복사되었어요!
    </Toast>
  )
}

export default CopyCompleteToast
