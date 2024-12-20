import Step1Icon from 'public/icons/stickers/3/3-3.svg'
import Step2Icon from 'public/icons/onboarding-album.svg'
import { Tooltip, useDecorateTutorial } from '@/components/Tutorial'

export const Step1Tooltip = () => (
  <Tooltip className="right-2 top-[150%]">
    <Tooltip.Icon
      icon={<Step1Icon />}
      sendToBack
      className="-left-[230px] -top-5"
    />
    <Tooltip.Box className="w-[305px] px-[16px] py-[16px]" trianglePos="tr">
      <Tooltip.Content>
        <span className="font-semiBold">스티커 버튼</span>을 눌러 보드를
        꾸며보세요!
      </Tooltip.Content>
      <Tooltip.NextBtn hasNext useTutorial={useDecorateTutorial} />
    </Tooltip.Box>
  </Tooltip>
)

export const Step2Tooltip = () => (
  <Tooltip className="absolute -top-[220%] right-5">
    <Tooltip.Icon
      icon={<Step2Icon />}
      className="-left-[230px] -translate-y-3/4"
    />
    <Tooltip.Box className="w-[270px] px-[16px] py-5" trianglePos="br">
      <Tooltip.Content className="text-left">
        보드가 완성되었다면 <span className="font-semiBold">앨범에 저장!</span>
      </Tooltip.Content>
      <Tooltip.NextBtn hasNext={false} useTutorial={useDecorateTutorial} />
    </Tooltip.Box>
  </Tooltip>
)
