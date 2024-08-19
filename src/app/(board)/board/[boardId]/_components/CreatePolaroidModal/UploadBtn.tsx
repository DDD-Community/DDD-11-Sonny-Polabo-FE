import Button from '@/components/Button'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'
import FinalModal from '../modals/FinalModal'

interface UploadBtnProps {
  formRef: React.RefObject<HTMLFormElement>
  btnDisabled: boolean
}

const UploadBtn = ({ formRef, btnDisabled }: UploadBtnProps) => {
  const [showFinalModal, setShowFinalModal] = useState<boolean>(false)
  const { pending } = useFormStatus()

  const onSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit()
    }
  }

  return (
    <div>
      <div className="px-5">
        <Button
          onClick={() => setShowFinalModal(true)}
          size="lg"
          className="w-full"
          disabled={pending || btnDisabled}
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
