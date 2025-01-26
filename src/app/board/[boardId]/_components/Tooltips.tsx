'use client'

import { Tooltip, useBoardTutorial } from '@/components/Tutorial'
import Step2Icon from 'public/icons/onboarding-polaroid.svg'
import Step1Icon from 'public/icons/onboarding-twopolaroids.svg'
import Step3Icon from 'public/icons/surprised.svg'

export const Step1Tooltip = () => (
  <Tooltip className="-bottom-[130%] right-0">
    <Tooltip.Icon icon={<Step1Icon />} sendToBack className="-left-[230px]" />
    <Tooltip.Box className="w-[270px] px-[18px] py-[15px]" trianglePos="tr">
      <Tooltip.Content>
        친구들에게 <span className="font-semiBold">보드를 공유</span>해보세요!
      </Tooltip.Content>
      <Tooltip.NextBtn hasNext useTutorial={useBoardTutorial} />
    </Tooltip.Box>
  </Tooltip>
)

export const Step2Tooltip = () => (
  <Tooltip className="-top-[220%] right-0">
    <Tooltip.Icon
      icon={<Step2Icon />}
      className="-left-[270px] -translate-y-[35%]"
    />
    <Tooltip.Box className="w-[300px] px-[18px] py-5" trianglePos="br">
      <Tooltip.Content className="pl-[58px] text-left">
        <span className="font-semiBold">보드 이름과 맞는 사진</span>
        {`을 올려 \n 보드를 꾸며주세요!`}
      </Tooltip.Content>
      <Tooltip.NextBtn hasNext useTutorial={useBoardTutorial} />
    </Tooltip.Box>
  </Tooltip>
)

export const Step3Tooltip = () => (
  <Tooltip className="left-[170%] top-[120%]">
    <Tooltip.Icon
      icon={<Step3Icon className="scale-[1.8]" />}
      sendToBack
      className="-right-[150px] -translate-y-[75%]"
    />
    <Tooltip.Box className="w-[270px] px-[18px] py-5" trianglePos="tl">
      <Tooltip.Content className="text-left">
        업로드한 폴라로이드를 클릭하면{'\n'}사진을 크게 볼 수 있어요!
      </Tooltip.Content>
      <Tooltip.NextBtn hasNext={false} useTutorial={useBoardTutorial} />
    </Tooltip.Box>
  </Tooltip>
)
