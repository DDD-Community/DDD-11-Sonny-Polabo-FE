'use client'

import TextArea from '@/components/TextArea'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import Select from '@/components/Select'
import { withdraw } from '@/lib'
import { signOut } from 'next-auth/react'
import LeaveConfirmModal from './LeaveConfirmModal'

const WITHDRAW_TYPE = {
  SELECT: '선택해주세요.',
  UNUSED: '더 이상 이용하지 않아요.',
  PRIVACY: '개인정보가 걱정돼요.',
  DELETE_DATA: '제 데이터를 삭제하고 싶어요.',
  NEW_ACCOUNT: '새로운 계정을 만들고 싶어요.',
  ETC: '기타',
}

const LeaveForm = () => {
  const [withdrawType, setWithdrawType] = useState<string>(WITHDRAW_TYPE.SELECT)
  const [customReason, setCustomReason] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)
  const [isLeaveConfirmModalOpen, setIsLeaveConfirmModalOpen] = useState(false)
  const errorMessage =
    customReason.length > 50 ? '50자까지 입력 가능합니다.' : ''
  const isCustomReasonValid = customReason && !errorMessage

  useEffect(() => {
    if (withdrawType === WITHDRAW_TYPE.SELECT) {
      setIsFormValid(false)
    } else if (withdrawType === WITHDRAW_TYPE.ETC && !isCustomReasonValid) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [withdrawType, customReason])

  const submit = async () => {
    if (!isFormValid) {
      return
    }

    await withdraw({
      type: withdrawType,
      reason: customReason,
    })

    setIsLeaveConfirmModalOpen(true)
  }

  const onCloseLeaveConfirmModal = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <form className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col gap-8">
        <Select
          value={withdrawType}
          options={Object.values(WITHDRAW_TYPE)}
          onSelect={setWithdrawType}
        />
        {withdrawType === WITHDRAW_TYPE.ETC && (
          <TextArea
            placeholder="이유를 입력해주세요."
            value={customReason}
            setValue={setCustomReason}
            description={`${customReason.length}/50`}
            hasError={!!errorMessage}
            errorMessage={errorMessage}
          />
        )}
      </div>
      <Button
        size="lg"
        onClick={submit}
        disabled={!isFormValid}
        className="w-full"
      >
        탈퇴하기
      </Button>
      <LeaveConfirmModal
        isOpen={isLeaveConfirmModalOpen}
        onClose={onCloseLeaveConfirmModal}
      />
    </form>
  )
}

export default LeaveForm
