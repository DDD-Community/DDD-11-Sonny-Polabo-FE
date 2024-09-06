import { ComponentProps, MouseEventHandler, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface SectionProps {
  title: string
  children: ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <div className="flex w-full flex-col border-b-[1px] border-gray-200 pb-6 pt-5">
    <h2 className="pb-5 pl-5 text-sm">{title}</h2>
    <div className="flex gap-4 overflow-x-scroll px-5 scrollbar-hide">
      {children}
    </div>
  </div>
)

const Item = ({
  icon,
  desc = '',
  bg = '',
  onClick = () => {},
}: {
  icon: ReactNode
  desc?: string
  bg?: ComponentProps<'div'>['className']
  onClick?: MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <button
      className="flex flex-col items-center gap-2"
      type="button"
      onClick={onClick}
    >
      <div
        className={twMerge(
          'flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 bg-cover',
          bg,
        )}
      >
        {icon}
      </div>
      {desc && <span className="text-xs text-gray-700">{desc}</span>}
    </button>
  )
}

Section.Item = Item
export default Section
