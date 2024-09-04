import { createQueryString } from '@/lib/utils/query'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { twMerge } from 'tailwind-merge'

const FilterTabBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryStringCallback = useCallback(
    (name: string, value: string) => {
      return createQueryString(searchParams, name, value)
    },
    [searchParams],
  )
  const isParticipant = searchParams.get('participant') === 'true'

  const selectedStyle = 'bg-gray-800 font-semiBold text-gray-0'
  const unselectedStyle = 'text-gray-600 border border-gray-500'

  return (
    <div className="mx-7 mt-3 flex">
      <button
        type="button"
        onClick={() => router.replace(pathname)}
        className={twMerge(
          'w-1/2 rounded-l-lg py-2.5 text-center text-sm',
          isParticipant ? unselectedStyle : selectedStyle,
        )}
      >
        내가 만든 보드
      </button>
      <button
        type="button"
        onClick={() =>
          router.replace(
            `${pathname}?${createQueryStringCallback('participant', 'true')}`,
          )
        }
        className={twMerge(
          'w-1/2 rounded-r-lg py-2.5 text-center text-sm',
          isParticipant ? selectedStyle : unselectedStyle,
        )}
      >
        내가 참여한 보드
      </button>
    </div>
  )
}

export default FilterTabBar
