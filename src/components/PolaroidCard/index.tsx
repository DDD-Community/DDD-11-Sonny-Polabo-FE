import { Polaroid } from '@/types'
import PolaroidImage from '@/components/Polaroid/Base/PolaroidImage'

interface PolaroidCardProps {
  polaroid: Polaroid
}

function PolaroidCard({ polaroid }: PolaroidCardProps) {
  return (
    <div className="cursor-pointer rounded bg-[#f3f3f3] font-hesom shadow-polaroid">
      <div className="p-2">
        <PolaroidImage imageUrl={polaroid.imageUrl} />
      </div>
      <div
        className="flex flex-col gap-0.5 px-4 pb-2"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 10.71%, rgba(255, 255, 255, 0.50) 57.96%, rgba(255, 255, 255, 0.00) 100%), #EAEAEA',
        }}
      >
        <span className="h-6 overflow-hidden overflow-ellipsis whitespace-nowrap pb-1 text-sm leading-5">
          {polaroid.oneLineMessage}
        </span>
        <span className="h-3 py-0.5 text-right text-xs leading-3 text-gray-950">
          From. {polaroid.nickname}
        </span>
      </div>
    </div>
  )
}

export default PolaroidCard
