import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getRecentStickers, postStickers } from '@/lib/api/sticker'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useSticker } from '../../_contexts/StickerContext'
import { useStickerModal } from '../../_contexts/ModalContext'
import { getStickerFile } from '../../_utils/getStickerFile'

const Contents = () => {
  const { selectedMenu, addSticker } = useSticker()
  const { closeModal } = useStickerModal()
  const [stickerFiles, setStickerFiles] = useState<string[]>([])
  const { boardId } = useParams<{ boardId: string }>()
  const { status } = useSession()

  useEffect(() => {
    const fetchStickers = async () => {
      const files =
        selectedMenu === 0
          ? (await getRecentStickers()).reverse()
          : await getStickerFile(selectedMenu)

      setStickerFiles(files)
    }

    fetchStickers()
  }, [selectedMenu])

  const handleClickSticker = (file: string) => {
    if (status === 'authenticated') {
      postStickers({ stickerIds: [file], boardId })
    }
    addSticker(file)
    closeModal()
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
