'use client'

import PinIcon from 'public/icons/pinFilled.svg'
import Share from 'public/icons/ios_share.svg'

interface BoardHeaderProps {
  name: string
}

// HTTPS에서만 동작
const ShareButton = () => {
  const handleClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Polabo',
        text: 'Polabo',
        url: window.location.href,
      })
    }
  }
  return <Share onClick={handleClick} className="w-6" />
}

const BoardHeader = ({ name }: BoardHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-6" />
      <div className="flex flex-col justify-center items-center">
        <PinIcon />
        <h1 className="text-xl">{name}</h1>
      </div>
      <ShareButton />
    </div>
  )
}

export default BoardHeader
