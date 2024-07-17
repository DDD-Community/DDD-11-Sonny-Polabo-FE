import PinFilledIcon from 'public/icons/pinFilled.svg'
import TagButton from '@/components/TagButton'

type RecommendationBtnsProps = {
  recommendations: {
    title: string
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
    <div className="relative flex overflow-hidden w-screen">
      <div className={`${animationClass} whitespace-nowrap`}>
        {recommendations.map((recommendation) => (
          <TagButton size="medium" key={recommendation.title} className="mr-2">
            <PinFilledIcon className="inline mr-1" />
            {recommendation.title}
          </TagButton>
        ))}
      </div>
      <div className={`${delayedAnimationClass} whitespace-nowrap`}>
        {recommendations.map((recommendation) => (
          <TagButton size="medium" key={recommendation.title} className="mr-2">
            <PinFilledIcon className="inline mr-1" />
            {recommendation.title}
          </TagButton>
        ))}
      </div>
    </div>
  )
}

const BoardNameRecommendations = () => {
  const topRecommendations = [
    {
      title: '내 첫인상에 대해 알려줘',
    },
    {
      title: '장하오 데뷔 1주년',
    },
    {
      title: '23학번 디자인과 MT',
    },
  ]

  const bottomRecommendations = [
    {
      title: '2024년 여름 일본여행1',
    },
    {
      title: '고등학교 졸사찍은 날',
    },
    {
      title: '100일 축하보드',
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
