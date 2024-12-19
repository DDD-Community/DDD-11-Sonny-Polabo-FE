'use client'

import TextArea from '@/components/TextArea'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import Select, { SelectOptionType } from '@/components/Select'
import { GTM_EVENT, withdraw } from '@/lib'
import { signOut } from 'next-auth/react'
import { sendGTMEvent } from '@next/third-parties/google'
import LeaveConfirmModal from './LeaveConfirmModal'

type WithdrawOptionType = SelectOptionType & {
  value: string
}

const withdrawOptions: WithdrawOptionType[] = [
  {
    value: 'SELECT',
    label: '선택해주세요.',
  },
  {
    value: 'NOT_USE',
    label: '더 이상 이용하지 않아요.',
  },
  {
    value: 'WORRY_ABOUT_PERSONAL_INFO',
    label: '개인정보가 걱정돼요.',
  },
  {
    value: 'DROP_MY_DATA',
    label: '제 데이터를 삭제하고 싶어요.',
  },
  {
    value: 'WANT_TO_NEW_ACCOUNT',
    label: '새로운 계정을 만들고 싶어요.',
  },
  {
    value: 'OTHER',
    label: '기타',
  },
]

const LeaveForm = () => {
  const [withdrawType, setWithdrawType] = useState<WithdrawOptionType>(
    withdrawOptions[0],
  )
  const [customReason, setCustomReason] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(false)
  const [isLeaveConfirmModalOpen, setIsLeaveConfirmModalOpen] = useState(false)
  const errorMessage =
    customReason.length > 50 ? '50자까지 입력 가능합니다.' : ''
  const isCustomReasonValid = customReason && !errorMessage

  useEffect(() => {
    if (withdrawType.value === 'SELECT') {
      setIsFormValid(false)
    } else if (withdrawType.value === 'OTHER' && !isCustomReasonValid) {
      setIsFormValid(false)
    } else {
      setIsFormValid(true)
    }
  }, [withdrawType, customReason])

  const submit = async () => {
    if (!isFormValid) return

    await withdraw({
      type: withdrawType.value,
      reason: customReason,
    })

    sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_WITHDRAW })
    setIsLeaveConfirmModalOpen(true)
  }

  const onCloseLeaveConfirmModal = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <form className="flex flex-1 flex-col justify-between">
      <div className="flex flex-col gap-8">
        <Select<WithdrawOptionType>
          selectedOption={withdrawType}
          options={withdrawOptions}
          onSelect={setWithdrawType}
        />
        {withdrawType.value === 'OTHER' && (
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
