// Chip.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import ProfileSummary from './ProfileSummary';

const meta: Meta<typeof ProfileSummary> = {
  component: ProfileSummary,
  title: 'ProfileSummary',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'string' },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileSummary>;

export const Default: Story = {
  args: {
    label: 'explore me',
  },
};

Default.play = async ({ canvasElement }) => {
  const button = await within(canvasElement).getByRole('button');
  expect(button.innerText).toBe('EXPLORE ME');
};
