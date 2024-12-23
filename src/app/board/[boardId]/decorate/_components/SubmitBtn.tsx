'use client'

import Button from '@/components/Button'
import { DecorateTutorial } from '@/components/Tutorial'
import { Step2Tooltip } from './Tooltips'

const SubmitBtn = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="mx-5">
      <DecorateTutorial
        step={2}
        hasNext={false}
        tooltip={<Step2Tooltip />}
        targetStyle="FIT"
        targetStyleProperites={{ borderRadius: '12px' }}
      >
        <Button
          size="lg"
          variant="secondary"
          className="w-full"
          onClick={onClick}
        >
          꾸미기 완료
        </Button>
      </DecorateTutorial>
    </div>
  )
}

export default SubmitBtn
