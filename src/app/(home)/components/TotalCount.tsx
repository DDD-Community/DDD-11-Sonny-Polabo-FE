import { getTotalBoards } from '@/lib'

const TotalCount = async () => {
  const sharedCount: number = await getTotalBoards()

  if (!sharedCount) return null

  return (
    <div className="text-center mb-2.5">{`지금까지 ${sharedCount.toLocaleString()}명이 공유했어요!`}</div>
  )
}

export default TotalCount
