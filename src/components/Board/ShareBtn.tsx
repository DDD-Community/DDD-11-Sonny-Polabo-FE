'use client'

import Share from 'public/icons/ios_share.svg'

const ShareBtn = () => {
  // HTTPS에서만 동작
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

export default ShareBtn
