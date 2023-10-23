// Chip.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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

Default.play = async ({ canvasElement }) => {
  const chip = await within(canvasElement).getByRole('button');
  expect(chip.innerText).toBe('#React');
  expect(chip).not.toHaveClass('rounded-full');
};

export const RoundedChip: Story = {
  args: {
    title: 'TypeScript',
    rounded: true,
  },
};

RoundedChip.play = async ({ canvasElement }) => {
  const chip = await within(canvasElement).getByRole('button');
  expect(chip.innerText).toBe('#TypeScript');
  expect(chip).toHaveClass('rounded-full');
};
