'use client'

import Image from 'next/image'
import SpeechBalloon from 'public/icons/speech_balloon.svg'
import TwoPolaroids from 'public/icons/twopolaroids.svg'

interface LoadingProps {
  message: string
}

const Loader = ({ message }: LoadingProps) => (
  <>
    <div className="relative mb-1">
      <SpeechBalloon />
      <Image
        src="/icons/loading.gif"
        width={48}
        height={48}
        alt="loading"
        className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
    <TwoPolaroids />
    <div className="text-xl font-regular font-jooree">{message}</div>
  </>
)

export default Loader
