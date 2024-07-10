import Loader from '@/components/Loading'

const Loading = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-2">
      <Loader message="보드를 생성하고 있어요!" />
    </div>
  )
}

export default Loading
