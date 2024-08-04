import Link from 'next/link'

const LinkTo = ({ text, link }: { text: string; link: string }) => (
  <Link href={link} className="border-b border-gray-400 font-bold">
    {text}
  </Link>
)

const Policy = () => {
  return (
    <div className="text-center text-xxs text-gray-400">
      <div>
        시작하기 버튼을 누르시면 POLABO의
        <LinkTo text="서비스 이용약관" link="" />과
      </div>
      <div>
        <LinkTo text="개인정보 처리방침" link="" />에 동의하게 됩니다.
      </div>
    </div>
  )
}

export default Policy
