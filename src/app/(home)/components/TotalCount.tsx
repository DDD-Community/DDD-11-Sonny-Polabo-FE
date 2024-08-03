import { getTotalBoards } from '@/lib'

const TotalCount = async () => {
  const sharedCount: number = await getTotalBoards()
  const formattedSharedCount = sharedCount.toLocaleString()

  if (!sharedCount) return null

  return (
    <div className="mb-2.5 text-center">
      지금까지
      <span className="font-semiBold">{formattedSharedCount}개</span>의 보드가
      만들어졌어요!
    </div>
  )
}

export default TotalCount
