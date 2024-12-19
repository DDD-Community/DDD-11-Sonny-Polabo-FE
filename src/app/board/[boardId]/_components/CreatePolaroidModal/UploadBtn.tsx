import Button from '@/components/Button'
import { useState } from 'react'
import { sendGTMEvent } from '@next/third-parties/google'
import { GTM_EVENT } from '@/lib'
import FinalModal from '../modals/FinalModal'

interface UploadBtnProps {
  btnDisabled: boolean
  submitForm: () => Promise<void>
}

const UploadBtn = ({ submitForm, btnDisabled }: UploadBtnProps) => {
  const [showFinalModal, setShowFinalModal] = useState<boolean>(false)
  const [isPending, setIsPending] = useState<boolean>(false)

  const onSubmit = async () => {
    sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_UPLOAD })
    setIsPending(true)
    await submitForm()
    setIsPending(false)
  }

  return (
    <>
      <Button
        onClick={() => setShowFinalModal(true)}
        size="lg"
        disabled={isPending || btnDisabled}
      >
        업로드하기
      </Button>
      <FinalModal
        isOpen={showFinalModal}
        onClose={() => setShowFinalModal(false)}
        onConfirm={onSubmit}
      />
    </>
  )
}

export default UploadBtn
