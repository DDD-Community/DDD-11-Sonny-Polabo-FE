'use client'

import ReactDOM from 'react-dom'
import SpeechBalloon from 'public/icons/speech_balloon.svg'
import TwoPolaroids from 'public/icons/twopolaroids.svg'

interface LoadingProps {
  message: string
}

const Loading = ({ message }: LoadingProps) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-0 z-10">
      <div className="max-w-md mx-auto min-h-screen px-5 py-10 flex flex-col justify-center items-center gap-2">
        <div className="relative mb-1">
          <SpeechBalloon />
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 -translate-y-[2px] flex items-center justify-center space-x-1">
            <div className="w-[6px] h-[6px] bg-gray-0 rounded-full" />
            <div className="w-[6px] h-[6px] bg-gray-0 rounded-full" />
            <div className="w-[6px] h-[6px] bg-gray-0 rounded-full" />
          </div>
        </div>
        <TwoPolaroids />
        <div className="text-xl font-regular font-jooree ">{message}</div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  )
}

export default Loading
