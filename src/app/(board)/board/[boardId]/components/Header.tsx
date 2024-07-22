import PinIcon from 'public/icons/pinFilled.svg'
import ShareBtn from './ShareBtn'

interface BoardHeaderProps {
  name: string
}

const BoardHeader = ({ name }: BoardHeaderProps) => {
  return (
    <div className="flex justify-between items-center px-3">
      <div className="w-6" />
      <div className="flex flex-col justify-center items-center">
        <PinIcon />
        <h1 className="text-md font-semiBold leading-6">{name}</h1>
      </div>
      <ShareBtn />
    </div>
  )
}

export default BoardHeader
