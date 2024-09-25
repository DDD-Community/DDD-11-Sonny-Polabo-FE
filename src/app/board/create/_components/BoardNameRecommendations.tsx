'use client'

import { HTMLAttributes, useEffect, useState } from 'react'
import { getBoardNameRecommendations } from '@/lib'

const Tag = ({ children, onClick }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      onClick={onClick}
      className="flex h-[26px] cursor-pointer items-center justify-center gap-1.5 rounded-[36px] border border-gray-900 bg-gray-0 px-2.5 text-xxs first:ml-2"
    >
      {children}
    </div>
  )
}

type RecommendationBtnsProps = {
  recommendations: string[]
  direction: 'left' | 'right'
  setBoardName: (boardName: string) => void
}

const RecommendationBtns = ({
  direction,
  recommendations,
  setBoardName,
}: RecommendationBtnsProps) => {
  const animationClass =
    direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'

  const delayedAnimationClass =
    direction === 'left'
      ? 'animate-slide-left-delay'
      : 'animate-slide-right-delay'

  return (
    <div className="relative flex w-screen max-w-md overflow-x-hidden">
      <div className={`${animationClass} flex gap-2 whitespace-nowrap`}>
        {recommendations.map((recommendation) => (
          <Tag
            key={recommendation}
            onClick={() => setBoardName(recommendation)}
          >
            {recommendation}
          </Tag>
        ))}
      </div>
      <div className={`${delayedAnimationClass} flex gap-2 whitespace-nowrap`}>
        {recommendations.map((recommendation) => (
          <Tag
            key={recommendation}
            onClick={() => setBoardName(recommendation)}
          >
            {recommendation}
          </Tag>
        ))}
      </div>
    </div>
  )
}

interface BoardNameRecommendationsProps {
  setBoardName: (boardName: string) => void
}

const BoardNameRecommendations = ({
  setBoardName,
}: BoardNameRecommendationsProps) => {
  const [recommendations, setRecommendations] = useState<string[]>([])

  useEffect(() => {
    getBoardNameRecommendations().then((data) => {
      setRecommendations(data)
    })
  }, [])

  if (!recommendations.length) {
    return null
  }

  return (
    <div>
      <div className="my-5 text-center text-sm leading-4 text-gray-400">
        다른 사용자들은 이런 보드를 만들었어요
      </div>
      <div className="mb-20 flex flex-col gap-3">
        <RecommendationBtns
          recommendations={recommendations.slice(0, 8)}
          setBoardName={setBoardName}
          direction="left"
        />
        <RecommendationBtns
          recommendations={recommendations.slice(8)}
          setBoardName={setBoardName}
          direction="right"
        />
      </div>
    </div>
  )
}

export default BoardNameRecommendations
