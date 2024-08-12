import { auth } from '@/auth'
import KakaoIcon from 'public/icons/kakaoWbg.svg'

const Email = async () => {
  const session = await auth()
  return (
    <div className="mb-6 flex w-[264px] items-center border-b border-gray-950">
      <div className="mr-2">
        <KakaoIcon />
      </div>
      <div className="flex-1 bg-transparent p-1 text-gray-400 outline-none">
        {session?.user?.email}
      </div>
    </div>
  )
}

export default Email
