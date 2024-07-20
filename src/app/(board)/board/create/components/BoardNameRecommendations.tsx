import SketchIcon1 from 'public/icons/sketchIcons-1.svg'
import SketchIcon2 from 'public/icons/sketchIcons-2.svg'
import SketchIcon3 from 'public/icons/sketchIcons-3.svg'
import SketchIcon4 from 'public/icons/sketchIcons-4.svg'
import SketchIcon5 from 'public/icons/sketchIcons-5.svg'
import SketchIcon6 from 'public/icons/sketchIcons-6.svg'
import { ReactNode } from 'react'

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border border-gray-900 bg-gray-0 text-xxs rounded-[36px] h-[26px] flex items-center justify-center px-2.5 first:ml-2 gap-1.5">
      {children}
    </div>
  )
}

type RecommendationBtnsProps = {
  recommendations: {
    title: string
    icon: ReactNode
  }[]
  direction: 'left' | 'right'
}

const RecommendationBtns = ({
  direction,
  recommendations,
}: RecommendationBtnsProps) => {
  const animationClass =
    direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'

  const delayedAnimationClass =
    direction === 'left'
      ? 'animate-slide-left-delay'
      : 'animate-slide-right-delay'

  return (
    <div className="relative flex w-screen max-w-md overflow-x-hidden">
      <div className={`${animationClass} whitespace-nowrap flex gap-2`}>
        {recommendations.map((recommendation) => (
          <Tag key={recommendation.title}>
            {recommendation.icon}
            {recommendation.title}
          </Tag>
        ))}
      </div>
      <div className={`${delayedAnimationClass} whitespace-nowrap flex gap-2`}>
        {recommendations.map((recommendation) => (
          <Tag key={recommendation.title}>
            {recommendation.icon}
            {recommendation.title}
          </Tag>
        ))}
      </div>
    </div>
  )
}

const BoardNameRecommendations = () => {
  const topRecommendations = [
    {
      title: '내 첫인상에 대해 알려줘',
      icon: <SketchIcon1 />,
    },
    {
      title: '장하오 데뷔 1주년',
      icon: <SketchIcon2 />,
    },
    {
      title: '23학번 디자인과 MT',
      icon: <SketchIcon3 />,
    },
  ]

  const bottomRecommendations = [
    {
      title: '2024년 여름 일본여행',
      icon: <SketchIcon4 />,
    },
    {
      title: '고등학교 졸사찍은 날',
      icon: <SketchIcon5 />,
    },
    {
      title: '100일 축하보드',
      icon: <SketchIcon6 />,
    },
  ]

  return (
    <div>
      <div className="text-gray-400 text-xs text-center my-5">
        다른 사용자들은 이런 보드를 만들었어요
      </div>
      <div className="flex flex-col gap-3 mb-20">
        <RecommendationBtns
          recommendations={topRecommendations}
          direction="left"
        />
        <RecommendationBtns
          recommendations={bottomRecommendations}
          direction="right"
        />
      </div>
    </div>
  )
}

export default BoardNameRecommendations
