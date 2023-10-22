// Chip.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import Chip from './Chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: 'Chip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'string' },
    rounded: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    title: 'React',
    rounded: false,
  },
};

export const RoundedChip: Story = {
  args: {
    title: 'TypeScript',
    rounded: true,
  },
};
