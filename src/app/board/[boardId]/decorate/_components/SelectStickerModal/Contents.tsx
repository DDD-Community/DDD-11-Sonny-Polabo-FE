import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useSticker } from '../../_contexts/StickerContext'
import { useStickerModal } from '../../_contexts/ModalContext'
import { getStickerFile } from '../../_utils/getStickerFile'

const Contents = () => {
  const { selectedMenu, addSticker } = useSticker()
  const { closeModal } = useStickerModal()
  const [stickerFiles, setStickerFiles] = useState<string[]>([])

  useEffect(() => {
    const fetchStickers = async () => {
      const files = await getStickerFile(selectedMenu)
      setStickerFiles(files)
    }

    if (selectedMenu === 0) {
      // TODO: selectedMenu 0일 때는 서버에서 최근 사용한 스티커 가져옴
      setStickerFiles([])
    } else {
      fetchStickers()
    }
  }, [selectedMenu])

  const handleClickSticker = (file: string) => {
    closeModal()
    addSticker(file)
  }

  return (
    <div className="m-5 grid grid-cols-3 gap-[6px] overflow-y-scroll scrollbar-hide">
      {stickerFiles.map((file) => (
        <div
          className="flex h-[90px] cursor-pointer items-center justify-center"
          key={file}
          onClick={() => handleClickSticker(file)}
        >
          <div className="flex items-center justify-center">
            <Image
              src={`/icons/stickers/${parseInt(file.split('-')[0], 10)}/${file}`}
              alt="Sticker"
              width={90}
              height={90}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Contents
