import type { Meta, StoryObj } from '@storybook/react'
import Button from './button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['button'],
  parameters: {
    controls: {
      componentSubtitle: 'This is the subtitle of the button component',
      expanded: true
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

/**
 * This is the primary button.
 */
export const Primary: Story = {
  args: {
    children: 'This is a button!',
  },
}

/**
 * This is the secondary button.
 */
export const Secondary = {
  args: {
    secondary: true,
    children: 'This is a button!',
  },
}
