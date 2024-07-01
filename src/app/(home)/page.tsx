import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <h2>함께 꾸미는 폴라로이드 보드</h2>
        <h1 className="text-4xl font-bold">POLABO</h1>
      </div>

      <Link href="/board/create">시작하기</Link>
    </div>
  )
}

export default HomePage
