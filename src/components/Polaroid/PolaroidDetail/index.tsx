import Modal from '@/components/Modal'
import { deletePolaroid } from '@/lib'
import { Polaroid } from '@/types'
import CloseIcon from 'public/icons/close.svg'
import { useEffect, useRef, useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import PolaroidDeleteBtn from './PolaroidDeleteBtn'
import PolaroidItem from './PolaroidItem'

const responsive = {
  all: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    partialVisibilityGutter: 0,
  },
}

interface PolaroidDetailModalProps {
  isOpen: boolean
  onClose: () => void
  selectedIdx: number
  polaroids: Polaroid[]
  boardId: string
}

const PolaroidDetailModal = ({
  isOpen,
  onClose,
  selectedIdx,
  polaroids,
  boardId,
}: PolaroidDetailModalProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<Carousel | null>(null)

  useEffect(() => {
    if (isOpen && carouselRef.current) {
      carouselRef.current.goToSlide(selectedIdx + 1)
    }
  }, [selectedIdx, isOpen])

  const handleBeforeChange = (nextSlide: number) => {
    setCurrentSlide(nextSlide)
  }

  const onDelete = () => {
    deletePolaroid(polaroids[currentSlide - 1].id, boardId)
  }

  // TODO: 내가 만든 보드인지 확인하고, 보드 생성자에게만 삭제 버튼 렌더

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOutsideClick={false}>
      <div className="mx-auto flex h-dvh max-w-md flex-1 flex-col justify-between py-10">
        <CloseIcon
          className="ml-5 cursor-pointer text-gray-0"
          onClick={onClose}
        />

        <div className="w-full overflow-x-hidden">
          <Carousel
            ref={carouselRef}
            swipeable
            draggable
            arrows={false}
            additionalTransfrom={0}
            ssr={false}
            responsive={responsive}
            customTransition="all .5"
            centerMode
            containerClass="-mx-20"
            itemClass="my-auto"
            beforeChange={(nextSlide) => {
              handleBeforeChange(nextSlide)
            }}
          >
            <div />
            {polaroids.map((item) => (
              <PolaroidItem polaroid={item} key={item.id} />
            ))}
          </Carousel>
          <div className="mt-4 text-center text-gray-400">
            <span className="text-gray-100">
              {currentSlide === 0 ? 1 : currentSlide}
            </span>
            <span className="px-1">/</span>
            <span>{polaroids.length}</span>
          </div>
        </div>

        <PolaroidDeleteBtn detailModalClose={onClose} onDelete={onDelete} />
      </div>
    </Modal>
  )
}

export default PolaroidDetailModal
