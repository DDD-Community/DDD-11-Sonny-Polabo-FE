/* eslint-disable @typescript-eslint/naming-convention */
import type { Meta, StoryObj } from '@storybook/react'
import TagButton from '.'

const meta: Meta<typeof TagButton> = {
  title: 'TagButton',
  component: TagButton,
  parameters: {
    layout: 'centered',
  },
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
    className: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary_Small: Story = {
  args: {
    size: 'small',
    children: 'small',
  },
}

export const Primary_Medium: Story = {
  args: {
    size: 'medium',
    children: 'medium',
  },
}
