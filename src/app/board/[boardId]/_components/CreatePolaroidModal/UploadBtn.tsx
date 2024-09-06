import Button from '@/components/Button'
import { useState } from 'react'
import FinalModal from '../modals/FinalModal'

interface UploadBtnProps {
  btnDisabled: boolean
  submitForm: () => Promise<void>
}

const UploadBtn = ({ submitForm, btnDisabled }: UploadBtnProps) => {
  const [showFinalModal, setShowFinalModal] = useState<boolean>(false)
  const [isPending, setIsPending] = useState<boolean>(false)

  const onSubmit = async () => {
    setIsPending(true)
    await submitForm()
    setIsPending(false)
  }

  return (
    <div>
      <div className="px-5">
        <Button
          onClick={() => setShowFinalModal(true)}
          size="lg"
          className="w-full"
          disabled={isPending || btnDisabled}
        >
          업로드하기
        </Button>
      </div>
      <FinalModal
        isOpen={showFinalModal}
        onClose={() => setShowFinalModal(false)}
        onConfirm={onSubmit}
      />
    </div>
  )
}

export default UploadBtn
