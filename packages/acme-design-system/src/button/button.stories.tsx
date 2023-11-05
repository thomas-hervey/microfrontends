import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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



// NOTE: This is an interaction test
const interaction_hover = () => async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  // find the button
  const button = await canvas.findByRole('button')

  // hover over the button
  await userEvent.hover(button)

  // expect that the button has a background color of gray-100
  await expect(button).toHaveClass('hover:bg-gray-100')
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'This is a button!',
  },

  // Hover interaction test
  play: interaction_hover()
}

export const Secondary: Story = {
  args: {
    secondary: true,
    children: 'This is a button!',
  },

  // Hover interaction test
  play: interaction_hover()
}


