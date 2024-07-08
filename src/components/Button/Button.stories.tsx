/* eslint-disable @typescript-eslint/naming-convention */

import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
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
    variant: 'primary',
    size: 'sm',
    children: 'Primary Button',
  },
}

export const Primary_Medium: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Button',
  },
}

export const Primary_Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Primary Button',
  },
}

export const Secondary_Small: Story = {
  args: {
    variant: 'secondary',
    size: 'sm',
    children: 'Secondary Button',
  },
}

export const Secondary_Medium: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Button',
  },
}

export const Secondary_Large: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    children: 'Secondary Button',
  },
}

export const disabled: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    disabled: true,
    children: 'Secondary Button',
  },
}
