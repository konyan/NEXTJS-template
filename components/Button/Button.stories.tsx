// Chip.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'string' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'explore me',
  },
};

Default.play = async ({ canvasElement }) => {
  const button = await within(canvasElement).getByRole('button');
  expect(button.innerText).toBe('EXPLORE ME');
};
