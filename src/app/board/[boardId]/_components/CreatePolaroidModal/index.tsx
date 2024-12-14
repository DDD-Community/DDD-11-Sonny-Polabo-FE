'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { getPolaroidNickname } from '@/lib/utils/polaroid'
import { FontKeyType, ThemaKeyType } from '@/types'
import ThemaSelect from '@/app/board/[boardId]/_components/CreatePolaroidModal/ThemaSelect'
import CreatePolaroid from '@/app/board/[boardId]/_components/CreatePolaroidModal/CreatePolaroid'
import { useBoardContext } from '@/app/board/[boardId]/_contexts/BoardContext'
import { uploadAction } from '../../_actions/uploadAction'
import { useModal } from './ModalContext'

const CreatePolaroidModal = () => {
  const { boardId: id } = useBoardContext()
  const [isValid, setIsValid] = useState<boolean>(false)
  const [image, setImage] = useState<File | null>(null)
  const [nickname, setNickname] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [selectedFontKey, setSelectedFontKey] = useState<FontKeyType>('HESOM')
  const [showFontSelect, setShowFontSelect] = useState<boolean>(false)
  const [selectedThemaKey, setSelectedThemaKey] = useState<ThemaKeyType>('F-0')
  const [showThemaSelect, setShowThemaSelect] = useState<boolean>(false)
  const { closeModal } = useModal()

  const { data: session } = useSession()

  const submit = async () => {
    if (!isValid) {
      return
    }

    const formData = new FormData()
    formData.append('fileInput', image!)
    formData.append('oneLineMessage', message)
    formData.append('nickname', getPolaroidNickname(nickname, session))
    formData.append('font', selectedFontKey)
    formData.append('thema', selectedThemaKey)

    const res = await uploadAction(id, formData)

    if (res) {
      closeModal()
    }
  }

  if (showThemaSelect) {
    return (
      <ThemaSelect
        selectedThema={selectedThemaKey}
        setSelectedThema={setSelectedThemaKey}
        setShowThemaSelect={setShowThemaSelect}
      />
    )
  }

  return (
    <CreatePolaroid
      image={image}
      selectedFontKey={selectedFontKey}
      selectedThemaKey={selectedThemaKey}
      message={message}
      nickname={nickname}
      showFontSelect={showFontSelect}
      isValid={isValid}
      submit={submit}
      setImage={setImage}
      setMessage={setMessage}
      setNickname={setNickname}
      setShowFontSelect={setShowFontSelect}
      setSelectedFontKey={setSelectedFontKey}
      setShowThemaSelect={setShowThemaSelect}
      setIsValid={setIsValid}
    />
  )
}

export default CreatePolaroidModal
