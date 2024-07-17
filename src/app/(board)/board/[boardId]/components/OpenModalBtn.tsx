'use client'

import { postPolaroid } from '@/lib'
import AddPolaroid from 'public/icons/add_polaroid.svg'
import { useEffect, useState } from 'react'
import Modal from '@/components/Modal'
import SurprisedIcon from 'public/icons/surprised.svg'
import CreatePolaroidModal from './Modal'

interface OpenModalBtnProps {
  id: string
  polaroidNum: number
}

const OpenModalBtn = ({ id, polaroidNum }: OpenModalBtnProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [ready, setReady] = useState<boolean>(false)

  //   폴라로이드 생성
  const [imageKey, setImageKey] = useState<string>('')
  const [text, setText] = useState<string>('')

  const createPolaroid = async () => {
    await postPolaroid(id, { imageKey, oneLineMessage: text })
    setReady(false)
  }

  useEffect(() => {
    if (ready) {
      createPolaroid()
    }
  }, [ready])

  const renderModalContent = () => {
    if (polaroidNum > 50) {
      return (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <Modal.CenterModal icon={<SurprisedIcon />}>
            <Modal.Body>
              <Modal.BodyTitle>
                {'이 보드에는 더이상 업로드가\n 불가합니다.'}
              </Modal.BodyTitle>
              <Modal.BodyContent>(한 보드당 최대 50개 가능)</Modal.BodyContent>
            </Modal.Body>
            <Modal.Footer>
              <Modal.FooterConfirm confirmText="확인" />
            </Modal.Footer>
          </Modal.CenterModal>
        </Modal>
      )
    }
    return (
      <CreatePolaroidModal
        id={id}
        setModalOpen={setModalOpen}
        setImageKey={setImageKey}
        text={text}
        setText={setText}
        setReady={setReady}
      />
    )
  }

  return (
    <div>
      {modalOpen && renderModalContent()}
      <AddPolaroid
        onClick={() => setModalOpen(true)}
        className="absolute right-10 bottom-10"
      />
    </div>
  )
}

export default OpenModalBtn
