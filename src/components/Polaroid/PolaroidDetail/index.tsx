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
  isBoardOwner: boolean
}

const PolaroidDetailModal = ({
  isOpen,
  onClose,
  selectedIdx,
  polaroids,
  boardId,
  isBoardOwner,
}: PolaroidDetailModalProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<Carousel | null>(null)

  useEffect(() => {
    if (isOpen && carouselRef.current) {
      carouselRef.current.goToSlide(selectedIdx + 1)
    }
  }, [selectedIdx, isOpen])

  const onDelete = () => {
    deletePolaroid(polaroids[currentSlide - 1].id, boardId)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOutsideClick={false}>
      <div className="relative mx-auto flex h-dvh max-w-md flex-1 touch-pan-x flex-col justify-center overflow-x-hidden py-10">
        <CloseIcon
          className="absolute left-5 top-5 cursor-pointer text-gray-0"
          onClick={onClose}
        />

        <div className="overflow-x-hidden">
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
            containerClass="-mx-28"
            itemClass="my-auto"
            beforeChange={(nextSlide) => {
              setCurrentSlide(nextSlide)
            }}
          >
            <div />
            {polaroids.map((item) => (
              <PolaroidItem polaroid={item} key={item.id} />
            ))}
          </Carousel>
          <div className="mt-4 text-center text-gray-400">
            <span>
              <span className="text-gray-100">
                {currentSlide === 0 ? 1 : currentSlide}
              </span>
              {` / ${polaroids.length}`}
            </span>
          </div>
        </div>

        {isBoardOwner && (
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
            <PolaroidDeleteBtn
              onDetailModalClose={onClose}
              onDelete={onDelete}
            />
          </div>
        )}
      </div>
    </Modal>
  )
}

export default PolaroidDetailModal
