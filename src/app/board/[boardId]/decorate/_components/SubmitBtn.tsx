'use client'

import Button from '@/components/Button'
import { DecorateTutorial } from '@/components/Tutorial'
import { Step2Tooltip } from './Tooltips'

const SubmitBtn = () => {
  return (
    <div className="mb-10 mt-5">
      <DecorateTutorial
        step={2}
        hasNext={false}
        tooltip={<Step2Tooltip />}
        targetStyle="FIT"
      >
        <Button size="lg" variant="secondary" className="w-full">
          꾸미기 완료
        </Button>
      </DecorateTutorial>
    </div>
  )
}

export default SubmitBtn
