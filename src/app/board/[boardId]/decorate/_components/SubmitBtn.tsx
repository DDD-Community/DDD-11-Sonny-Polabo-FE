'use client'

import Button from '@/components/Button'
import { DecorateTutorial } from '@/components/Tutorial'
import { ReactNode } from 'react'
import { Step2Tooltip } from './Tooltips'

const SubmitBtn = ({
  onClick,
  children,
  disabled,
}: {
  onClick: () => void
  children: ReactNode
  disabled: boolean
}) => {
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
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </Button>
      </DecorateTutorial>
    </div>
  )
}

export default SubmitBtn
