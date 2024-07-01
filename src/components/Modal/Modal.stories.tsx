/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import Modal from '.'

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '375px',
          height: '800px',
          border: '1px solid black',
          borderRadius: '8px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isOpen: { control: 'boolean' },
    position: { control: 'radio', options: ['center', 'bottom'] },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

const Template: Story = {
  render: (args) => {
    const [{ isOpen }, setIsOpen] = useArgs()

    function onChange() {
      setIsOpen({ isOpen: !isOpen })
    }

    return (
      <div>
        <div id="modal-root" />
        <button
          type="button"
          onClick={onChange}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Open Modal
        </button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen({ isOpen: false })}
        >
          <Modal.Header>Header</Modal.Header>
          <Modal.Body>Body</Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              onClick={onChange}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  },
}

export const CenterModal = {
  ...Template,
  args: {
    items: [],
  },
}
