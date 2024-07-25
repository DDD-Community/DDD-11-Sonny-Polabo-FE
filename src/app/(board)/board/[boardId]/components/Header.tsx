import PinIcon from 'public/icons/pinFilled.svg'
import ShareBtn from './ShareBtn'

interface BoardHeaderProps {
  name: string
}

const BoardHeader = ({ name }: BoardHeaderProps) => {
  return (
    <div className="flex items-center justify-between bg-gray-0 px-4 py-5 shadow-header">
      <div className="w-6" />
      <div className="flex items-center justify-center gap-[3px] text-center">
        <PinIcon />
        <h1 className="text-md font-semiBold leading-6">{name}</h1>
      </div>
      <ShareBtn />
    </div>
  )
}

export default BoardHeader
