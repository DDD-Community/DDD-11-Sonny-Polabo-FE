import Header from '@/components/Header'
import LeaveForm from '@/app/mypage/leave/_components/LeaveForm'
import Title from './_components/Title'

const Page = () => {
  const leaveCheckTitle = '탈퇴전 꼭 확인해주세요.'
  const leaveReasonTitle = '탈퇴하려는 이유를 알려주세요.'
  const leaveDescription =
    '계정을 삭제하면 복구가 불가능하며\n회원정보 및 보드가 모두 삭제돼요. \n또한, 삭제된 데이터는 복구가 불가능해요.'

  return (
    <div className="flex h-dvh flex-col bg-gray-50">
      <Header title="탈퇴하기" leftButton={<Header.BackButton />} />
      <div className="relative flex flex-1 flex-col px-8 pb-8 pt-9">
        <Title>{leaveCheckTitle}</Title>
        <div className="mb-9 whitespace-pre text-sm text-gray-700">
          {leaveDescription}
        </div>
        <Title>{leaveReasonTitle}</Title>
        <LeaveForm />
      </div>
    </div>
  )
}

export default Page
