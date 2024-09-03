import PolaroidImage from '@/components/Polaroid/Base/PolaroidImage'
import AddPhotoIcon from 'public/icons/add_photo_alternate.svg'
import { useRef } from 'react'

interface PolaroidImageInputProps {
  imageUrl: string | null
  changeImage: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PolaroidImageInput = ({
  imageUrl,
  changeImage,
}: PolaroidImageInputProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const openFileInput = () => {
    if (ref.current) {
      ref.current.click()
    }
  }

  return (
    <div className="cursor-pointer bg-gray-950" onClick={openFileInput}>
      <input
        ref={ref}
        accept="image/*"
        type="file"
        onChange={changeImage}
        className="hidden"
        id="fileInput"
        name="fileInput"
      />
      {imageUrl ? (
        <PolaroidImage imageUrl={imageUrl} />
      ) : (
        <div className="flex h-[314px] items-center justify-center">
          <AddPhotoIcon className="h-[72px] w-[72px] text-gray-0" />
        </div>
      )}
    </div>
  )
}

export default PolaroidImageInput
