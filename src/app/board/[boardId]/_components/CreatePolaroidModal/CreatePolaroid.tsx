import ArrowBack from '@/app/board/[boardId]/_components/CreatePolaroidModal/ArrowBack'
import PolaroidMaker from '@/components/Polaroid/PolaroidMaker'
import TagButton from '@/components/TagButton'
import { twMerge } from 'tailwind-merge'
import FontSelect from '@/app/board/[boardId]/_components/CreatePolaroidModal/FontSelect'
import UploadBtn from '@/app/board/[boardId]/_components/CreatePolaroidModal/UploadBtn'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { FontKeyType, ThemaKeyType } from '@/types'
import PolaroidIcon from 'public/icons/polaroid.svg'
import { sendGTMEvent } from '@next/third-parties/google'
import { GTM_EVENT } from '@/lib'

interface CreatePolaroidProps {
  image: File | null
  selectedFontKey: FontKeyType
  selectedThemaKey: ThemaKeyType
  message: string
  nickname: string
  showFontSelect: boolean
  isValid: boolean
  submit: () => Promise<void>
  setImage: Dispatch<SetStateAction<File | null>>
  setMessage: Dispatch<SetStateAction<string>>
  setNickname: Dispatch<SetStateAction<string>>
  setShowFontSelect: Dispatch<SetStateAction<boolean>>
  setSelectedFontKey: Dispatch<SetStateAction<FontKeyType>>
  setShowThemaSelect: Dispatch<SetStateAction<boolean>>
  setIsValid: Dispatch<SetStateAction<boolean>>
}

const CreatePolaroid = ({
  image,
  selectedFontKey,
  selectedThemaKey,
  message,
  nickname,
  setImage,
  setMessage,
  setNickname,
  showFontSelect,
  setShowFontSelect,
  setSelectedFontKey,
  setShowThemaSelect,
  submit,
  isValid,
  setIsValid,
}: CreatePolaroidProps) => {
  const fontSelectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsValid(!!image)
  }, [image])

  useEffect(() => {
    if (fontSelectRef.current) {
      fontSelectRef.current.scrollIntoView()
    }
  }, [fontSelectRef, showFontSelect])

  return (
    <div className="relative flex h-dvh w-full max-w-md touch-none flex-col items-center justify-between bg-gray-900/50">
      <ArrowBack />
      <div className="w-full overflow-y-scroll overscroll-none pb-[114px] pt-16 scrollbar-hide">
        <div className="mx-auto w-[272px]">
          <PolaroidMaker
            image={image}
            fontKey={selectedFontKey}
            themaKey={selectedThemaKey}
            message={message}
            nickname={nickname}
            setImage={setImage}
            setMessage={setMessage}
            setNickname={setNickname}
          />
          <div className="flex gap-5 py-5">
            <TagButton
              className={twMerge(
                'font-hesom text-md leading-5',
                showFontSelect ? 'border-gray-0 bg-gray-800 text-gray-0' : '',
              )}
              onClick={() => {
                sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_FONT })
                setShowFontSelect((prev) => !prev)
              }}
            >
              폰트 고르기
            </TagButton>
            <TagButton
              className="flex gap-2 p-2.5 text-sm leading-4"
              onClick={() => {
                sendGTMEvent({ event: GTM_EVENT.CLICK_BTN_FRAME })
                setShowThemaSelect((prev) => !prev)
              }}
            >
              <PolaroidIcon />
              프레임 고르기
            </TagButton>
          </div>
        </div>
        {showFontSelect && (
          <FontSelect
            ref={fontSelectRef}
            selectedFont={selectedFontKey}
            onSelect={setSelectedFontKey}
          />
        )}
      </div>
      <div className="absolute bottom-10 flex w-full justify-center">
        <UploadBtn submitForm={submit} btnDisabled={!isValid} />
      </div>
    </div>
  )
}

export default CreatePolaroid
