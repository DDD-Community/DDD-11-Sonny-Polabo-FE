'use client'

import Button from '@/components/Button'
import Modal from '@/components/Modal'
import PolaroidMaker from '@/components/Polaroid/PolaroidMaker'
import { getPreSignedUrl, uploadImage } from '@/lib'
import ArrowBack from 'public/icons/arrow_back_ios.svg'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import SurprisedIcon from 'public/icons/surprised.svg'

interface ModalProps {
  id: string
  setModalOpen: (open: boolean) => void
  setImageKey: (imageKey: string) => void
  text: string
  setText: (text: string) => void
  setReady: (ready: boolean) => void
}

const CreatePolaroidModal = ({
  id,
  setModalOpen,
  setImageKey,
  text,
  setText,
  setReady,
}: ModalProps) => {
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [showAskBfCloseModal, setShowAskBfCloseModal] = useState<boolean>(false)

  const uploadHandler = async () => {
    try {
      setButtonDisabled(true)
      const { url, imageKey } = await getPreSignedUrl(id)
      setImageKey(imageKey)

      // 파일 업로드
      if (!selectedFile) {
        throw new Error('이미지 파일이 선택되지 않음')
      }

      const uploadResponse = await uploadImage({ url, file: selectedFile })

      if (!uploadResponse.ok) {
        throw new Error('Image upload failed')
      }

      setButtonDisabled(false)
      setModalOpen(false)
      setReady(true)
    } catch (error) {
      console.error('Failed to upload image', error)
    }
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-950/60">
      <div className="max-w-md mx-auto min-h-screen px-5 py-10 flex flex-col justify-between">
        <ArrowBack
          className="text-gray-0"
          onClick={() => setShowAskBfCloseModal(true)}
        />

        {showAskBfCloseModal && (
          <Modal
            isOpen={showAskBfCloseModal}
            onClose={() => setShowAskBfCloseModal(false)}
          >
            <Modal.CenterModal icon={<SurprisedIcon />}>
              <Modal.Title>
                {'폴라로이드 제작을\n 그만 하시겠습니까?'}
              </Modal.Title>
              <Modal.Content>여태까지 작성한 내용이 사라져요</Modal.Content>

              <Modal.BottomConfirmCancel
                cancelText="아니요"
                confirmText="예"
                onConfirm={() => setModalOpen(false)}
              />
            </Modal.CenterModal>
          </Modal>
        )}

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <PolaroidMaker
            setButtonDisabled={setButtonDisabled}
            setSelectedFile={setSelectedFile}
            selectedFile={selectedFile}
            setText={setText}
            text={text}
          />
        </div>
        <div className="px-5">
          <Button
            onClick={uploadHandler}
            size="lg"
            className="w-full"
            disabled={buttonDisabled}
          >
            업로드하기
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  )
}

export default CreatePolaroidModal
