import { useStep } from './StepContext'

const Circle = ({ step, active }: { step: number; active: boolean }) => (
  <div
    className={
      active
        ? `flex h-5 w-5 items-center justify-center rounded-full bg-gray-950 text-sm text-gray-0`
        : 'h-2 w-2 rounded-full bg-gray-400'
    }
  >
    {active ? step : ''}
  </div>
)

const Indicator = () => {
  const { step } = useStep()
  return (
    <div className="mb-2 flex items-center gap-2">
      <Circle step={1} active={step === 1} />
      <Circle step={2} active={step === 2} />
      <Circle step={3} active={step === 3} />
    </div>
  )
}

export default Indicator
