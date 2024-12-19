import { FontKeyType } from '@/types'
import { FONTS, GTM_EVENT } from '@/lib'
import { twMerge } from 'tailwind-merge'
import TagButton from '@/components/TagButton'
import { forwardRef } from 'react'
import { sendGTMEvent } from '@next/third-parties/google'

interface FontSelectProps {
  selectedFont: FontKeyType
  onSelect: (fontKey: FontKeyType) => void
}

const FontSelect = forwardRef<HTMLDivElement, FontSelectProps>(
  ({ selectedFont, onSelect }, ref) => {
    const selectedFontClass = 'bg-gray-0 text-gray-1000 border border-gray-900'
    const fontClass = 'text-neutral-500 bg-gray-300 border border-gray-500 '
    return (
      <div className="overflow-x-scroll scrollbar-hide" ref={ref}>
        <div className="mx-[calc((100%-272px)/2)] inline-flex items-center gap-2">
          {Object.entries(FONTS).map(([key, font]) => (
            <TagButton
              className={twMerge(
                'shrink-0',
                FONTS[selectedFont].title === font.title
                  ? selectedFontClass
                  : fontClass,
                font.className,
              )}
              key={key}
              onClick={() => {
                sendGTMEvent({
                  event: GTM_EVENT.CLICK_FONT(key as FontKeyType),
                })
                onSelect(key as FontKeyType)
              }}
            >
              {font.title}
            </TagButton>
          ))}
        </div>
      </div>
    )
  },
)

FontSelect.displayName = 'FontSelect'

export default FontSelect
