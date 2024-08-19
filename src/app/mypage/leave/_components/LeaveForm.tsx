'use client'

import TextArea from '@/components/TextArea'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import Select from '@/components/Select'
import { withdraw } from '@/lib'
import { signOut } from 'next-auth/react'
import LeaveConfirmModal from './LeaveConfirmModal'

type WithdrawType =
  | 'NOT_USE'
  | 'WORRY_ABOUT_PERSONAL_INFO'
  | 'DROP_MY_DATA'
  | 'WANT_TO_NEW_ACCOUNT'
  | 'OTHER'
  | null

type WithDrawOptionType = {
  value: WithdrawType
  label: string
}

const WITHDRAW_OPTIONS: WithDrawOptionType[] = [
  {
    value: null,
    label: '선택해주세요.',
  },
  { value: 'NOT_USE', label: '더 이상 이용하지 않아요.' },
  { value: 'WORRY_ABOUT_PERSONAL_INFO', label: '개인정보가 걱정돼요.' },
  { value: 'DROP_MY_DATA', label: '제 데이터를 삭제하고 싶어요.' },
  { value: 'WANT_TO_NEW_ACCOUNT', label: '새로운 계정을 만들고 싶어요.' },
  { value: 'OTHER', label: '기타' },
]

const LeaveForm = () => {
  const [withdrawOption, setWithdrawOption] = useState<WithDrawOptionType>(
    WITHDRAW_OPTIONS[0],
  )
  const [customReason, setCustomReason] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)
  const [isLeaveConfirmModalOpen, setIsLeaveConfirmModalOpen] = useState(false)
  const errorMessage =
    customReason.length > 50 ? '50자까지 입력 가능합니다.' : ''
  const isCustomReasonValid = customReason && !errorMessage

  useEffect(() => {
    if (withdrawOption.value === null) {
      setIsFormValid(false)
    } else if (withdrawOption.value === 'OTHER' && !isCustomReasonValid) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [withdrawOption, customReason])

  const submit = async () => {
    if (!isFormValid) {
      return
    }

    await withdraw({
      type: withdrawOption.value as string,
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
        <Select<WithdrawType>
          selectedOption={withdrawOption}
          options={WITHDRAW_OPTIONS}
          onSelect={setWithdrawOption}
        />
        {withdrawOption.value === 'OTHER' && (
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
