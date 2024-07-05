import PinIcon from 'public/icons/pinFilled.svg'
import Share from 'public/icons/ios_share.svg'

interface BoardHeaderProps {
  name: string
}

const BoardHeader = ({ name }: BoardHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-6" />
      <div className="flex flex-col justify-center items-center">
        <PinIcon />
        <h1 className="text-xl">{name}</h1>
      </div>
      <Share className="w-6" />
    </div>
  )
}

export default BoardHeader
