'use client'

import Step1Icon from 'public/icons/linkShare.svg'
import Step2Icon from 'public/icons/sticker_polaroid.svg'
import Tooltip from './Tooltip'

export const Step1Tooltip = () => {
  return (
    <Tooltip className="absolute right-4 top-[100%]">
      <Tooltip.Icon
        icon={<Step1Icon className="scale-150" />}
        sendToBack
        className="-left-[270px]"
      />
      <Tooltip.Box
        className="w-[270px] px-[18px] py-[15px]"
        trianglePos="-top-[0%] -translate-y-[20%]"
      >
        <Tooltip.Content>친구들에게 보드를 공유해보세요!</Tooltip.Content>
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
        className="-left-[130px] -translate-y-3/4"
      />
      <Tooltip.Box
        className="w-[260px] px-[18px] py-[20px]"
        trianglePos="-bottom-[0%] translate-y-[20%]"
      >
        <Tooltip.Content>
          {`보드 주제와 맞는\n  사진을 올려 보드를 꾸며주세요!`}
        </Tooltip.Content>
        <Tooltip.NextBtn hasNext={false} />
      </Tooltip.Box>
    </Tooltip>
  )
}
