'use client'

import { useEffect, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import { getPolaroidNickname } from '@/lib/utils/polaroid'
import PolaroidMaker from '@/components/Polaroid/PolaroidMaker'
import TagButton from '@/components/TagButton'
import { FontKeyType } from '@/types'
import { twMerge } from 'tailwind-merge'
import FontSelect from './FontSelect'
import { uploadAction } from '../../_actions/uploadAction'
import ArrowBack from './ArrowBack'
import { useModal } from './ModalContext'
import UploadBtn from './UploadBtn'

interface CreatePolaroidProps {
  id: string
}

const CreatePolaroid = ({ id }: CreatePolaroidProps) => {
  const [isValid, setIsValid] = useState<boolean>(false)
  const [image, setImage] = useState<File | null>(null)
  const [nickname, setNickname] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [fontKey, setFontKey] = useState<FontKeyType>('HESOM')
  const [showFontSelect, setShowFontSelect] = useState<boolean>(false)
  const { closeModal } = useModal()

  const fontSelectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsValid(!!image)
  }, [image])

  useEffect(() => {
    if (fontSelectRef.current) {
      fontSelectRef.current.scrollIntoView()
    }
  }, [fontSelectRef, showFontSelect])

  const { data: session } = useSession()

  const submit = async () => {
    if (!isValid) {
      return
    }

    const formData = new FormData()
    formData.append('fileInput', image!)
    formData.append('oneLineMessage', message)
    formData.append('nickname', getPolaroidNickname(nickname, session))
    formData.append('font', fontKey)

    const res = await uploadAction(id, formData)

    if (res) {
      closeModal()
    }
  }

  return (
    <div className="flex h-dvh w-full max-w-md flex-col items-center justify-between gap-5">
      <ArrowBack />
      <div className="overflow-y-scroll pt-20 scrollbar-hide">
        <div className="mx-auto w-[272px]">
          <PolaroidMaker
            image={image}
            fontKey={fontKey}
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
              onClick={() => setShowFontSelect((prev) => !prev)}
            >
              폰트 고르기
            </TagButton>
            <TagButton className="py-2.5 text-sm leading-4">
              프레임 고르기
            </TagButton>
          </div>
        </div>
        {showFontSelect && (
          <FontSelect
            ref={fontSelectRef}
            selectedFont={fontKey}
            onSelect={setFontKey}
          />
        )}
      </div>
      <div className="flex w-full justify-center pb-10">
        <UploadBtn submitForm={submit} btnDisabled={!isValid} />
      </div>
    </div>
  )
}

export default CreatePolaroid
