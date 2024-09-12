import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getStickerFile } from '../../utils/staticFile'
import { useSticker } from './StickerContext'

const Contents = () => {
  const { selectedMenu } = useSticker()
  const [stickerFiles, setStickerFiles] = useState<string[]>([])

  useEffect(() => {
    const fetchStickers = async () => {
      const files = await getStickerFile(selectedMenu)
      setStickerFiles(files)
    }

    fetchStickers()
  }, [selectedMenu])

  return (
    <div className="m-5 grid grid-cols-3 gap-[6px] overflow-y-scroll scrollbar-hide">
      {stickerFiles.map((file) => (
        <div className="flex h-[90px] items-center justify-center" key={file}>
          <div className="flex items-center justify-center">
            <Image
              src={`/stickers/${parseInt(file.split('-')[0], 10)}/${file}`}
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