'use client'

import Step1Icon from 'public/icons/onboarding-twopolaroids.svg'
import Step2Icon from 'public/icons/onboarding-polaroid.svg'
import Tooltip from './Tooltip'

export const Step1Tooltip = () => {
  return (
    <Tooltip className="absolute right-4 top-[115%]">
      <Tooltip.Icon icon={<Step1Icon />} sendToBack className="-left-[230px]" />
      <Tooltip.Box
        className="w-[270px] px-[18px] py-[15px]"
        trianglePos="-top-[0%] -translate-y-[20%]"
      >
        <Tooltip.Content>
          친구들에게 <span className="font-semiBold">보드를 공유</span>해보세요!
        </Tooltip.Content>
        <Tooltip.NextBtn hasNext />
      </Tooltip.Box>
    </Tooltip>
  )
}

export const Step2Tooltip = () => {
  return (
    <Tooltip className="absolute -top-[220%] right-4">
      <Tooltip.Icon
        icon={<Step2Icon />}
        className="-left-[270px] -translate-y-1/4"
      />
      <Tooltip.Box
        className="w-[300px] px-[18px] py-5"
        trianglePos="-bottom-[0%] translate-y-[20%]"
      >
        <Tooltip.Content className="pl-[58px] text-left">
          <span className="font-semiBold">보드 주제와 맞는 사진</span>
          {`을 올려 \n 보드를 꾸며주세요!`}
        </Tooltip.Content>
        <Tooltip.NextBtn hasNext={false} />
      </Tooltip.Box>
    </Tooltip>
  )
}
