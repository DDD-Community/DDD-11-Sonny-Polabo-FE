'use client'

import TooltipIcon from 'public/icons/linkShare.svg'
import Tooltip from './Tooltip'

const Step1Tooltip = () => {
  return (
    <Tooltip className="absolute right-4 top-[100%]">
      <Tooltip.Icon
        icon={<TooltipIcon className="scale-150" />}
        sendToBack
        className="-left-[270px]"
      />
      <Tooltip.Box className="w-[270px] px-[18px] py-[15px]">
        <Tooltip.Content>친구들에게 보드를 공유해보세요!</Tooltip.Content>
        <Tooltip.NextBtn hasNext />
      </Tooltip.Box>
    </Tooltip>
  )
}

export default Step1Tooltip
