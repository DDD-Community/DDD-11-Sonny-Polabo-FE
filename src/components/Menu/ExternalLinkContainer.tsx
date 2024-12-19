'use client'

import { GTM_EVENT } from '@/lib'
import { sendGTMEvent } from '@next/third-parties/google'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface ExternalLinkProps {
  text: string
  linkTo: string
  onClick?: () => void
}

const ExternalLink = ({
  text,
  linkTo,
  onClick = () => {},
}: ExternalLinkProps) => (
  <Link
    className="cursor-pointer text-sm text-gray-700"
    href={linkTo}
    onClick={onClick}
  >
    {text}
  </Link>
)

const ExternalLinkContainer = ({
  className = '',
}: {
  className?: React.ComponentProps<'div'>['className']
}) => (
  <div className={twMerge('flex flex-col gap-3 pl-[30px]', className)}>
    <ExternalLink
      text="POLABO 소개"
      linkTo="https://hwanheejung.notion.site/POLABO-39ac5a850dcb46bd83168043acea5bbc?pvs=74"
      onClick={() => sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_INTRODUCTION })}
    />
    <ExternalLink
      text="서비스 이용약관"
      linkTo="https://hwanheejung.notion.site/POLABO-292cb07b2fd74d7488aa4b684c67eb9a?pvs=74"
    />
    <ExternalLink
      text="개인정보 처리방침"
      linkTo="https://hwanheejung.notion.site/POLABO-3c07098b731e419a92da9916c81c35f1"
    />
    <ExternalLink
      text="문의하기"
      linkTo="https://forms.gle/ya9HVMSJWVSKYyV77"
    />
  </div>
)

export default ExternalLinkContainer
