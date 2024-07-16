/* eslint-disable react-hooks/rules-of-hooks,@typescript-eslint/naming-convention */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable-next-line @typescript-eslint/naming-convention */

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import BottomModalSvg from 'public/icons/bottom_modal.svg'
import ModalSvg from 'public/icons/modal.svg'
import Button from '@/components/Button'
import Modal from './index'

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Bottom_Modal_Confirm: Story = {
  render: () => {
    const [{ isOpen }, setIsOpen] = useArgs()

    const onClose = () => {
      setIsOpen({ isOpen: false })
    }
    return (
      <div>
        <Button type="button" onClick={() => setIsOpen({ isOpen: true })}>
          Show Modal
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <Modal.BottomModal icon={<BottomModalSvg />}>
            <Modal.Close />
            <Modal.Body>
              <Modal.BodyTitle>링크가 복사되었습니다!</Modal.BodyTitle>
              <Modal.BodyContent>
                {'POLABO를\n지인들에게도 알려주세요!'}
              </Modal.BodyContent>
            </Modal.Body>
            <Modal.Footer>
              <Modal.FooterConfirm confirmText="확인" />
            </Modal.Footer>
          </Modal.BottomModal>
        </Modal>
      </div>
    )
  },
}

export const Bottom_Modal_Confirm_Cancel: Story = {
  render: () => {
    const [{ isOpen }, setIsOpen] = useArgs()

    const onClose = () => {
      setIsOpen({ isOpen: false })
    }
    return (
      <div>
        <Button type="button" onClick={() => setIsOpen({ isOpen: true })}>
          Show Modal
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <Modal.BottomModal icon={<BottomModalSvg />}>
            <Modal.Close />
            <Modal.Body>
              <Modal.BodyTitle>링크가 복사되었습니다!</Modal.BodyTitle>
              <Modal.BodyContent>
                {'POLABO를\n지인들에게도 알려주세요!'}
              </Modal.BodyContent>
            </Modal.Body>
            <Modal.Footer>
              <Modal.FooterConfirmCancel
                cancelText="돌아가기"
                confirmText="확인"
              />
            </Modal.Footer>
          </Modal.BottomModal>
        </Modal>
      </div>
    )
  },
}

export const Center_Modal_Confirm: Story = {
  render: () => {
    const [{ isOpen }, setIsOpen] = useArgs()

    const onClose = () => {
      setIsOpen({ isOpen: false })
    }
    return (
      <div>
        <Button type="button" onClick={() => setIsOpen({ isOpen: true })}>
          Show Modal
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <Modal.CenterModal icon={<ModalSvg />}>
            <Modal.Close />
            <Modal.Body>
              <Modal.BodyTitle>링크가 복사되었습니다!</Modal.BodyTitle>
              <Modal.BodyContent>
                {'POLABO를\n지인들에게도 알려주세요!'}
              </Modal.BodyContent>
            </Modal.Body>
            <Modal.Footer>
              <Modal.FooterConfirm confirmText="확인" />
            </Modal.Footer>
          </Modal.CenterModal>
        </Modal>
      </div>
    )
  },
}

export const Center_Modal_Confirm_Cancel: Story = {
  render: () => {
    const [{ isOpen }, setIsOpen] = useArgs()

    const onClose = () => {
      setIsOpen({ isOpen: false })
    }
    return (
      <div>
        <Button type="button" onClick={() => setIsOpen({ isOpen: true })}>
          Show Modal
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <Modal.CenterModal icon={<ModalSvg />}>
            <Modal.Close />
            <Modal.Body>
              <Modal.BodyTitle>링크가 복사되었습니다!</Modal.BodyTitle>
              <Modal.BodyContent>
                {'POLABO를\n지인들에게도 알려주세요!'}
              </Modal.BodyContent>
            </Modal.Body>
            <Modal.Footer>
              <Modal.FooterConfirmCancel
                cancelText="돌아가기"
                confirmText="확인"
              />
            </Modal.Footer>
          </Modal.CenterModal>
        </Modal>
      </div>
    )
  },
}
