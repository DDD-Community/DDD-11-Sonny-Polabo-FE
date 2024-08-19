import Button from '@/components/Button'
import { useFormStatus } from 'react-dom'

interface SubmitBtnProps {
  formRef: React.RefObject<HTMLFormElement>
  btnDisabled: boolean
}

const SubmitBtn = ({ formRef, btnDisabled }: SubmitBtnProps) => {
  const { pending } = useFormStatus()

  const onSubmit = () => {
    if (formRef.current) {
      formRef.current.requestSubmit()
    }
  }
  return (
    <div>
      <Button
        size="lg"
        onClick={onSubmit}
        className="mb-10 mt-auto w-full"
        disabled={pending || btnDisabled}
      >
        저장
      </Button>
    </div>
  )
}

export default SubmitBtn
