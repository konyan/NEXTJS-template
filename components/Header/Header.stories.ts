// Chip.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Header from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

Default.play = async ({ canvasElement }) => {
  const button = await within(canvasElement).getByRole('heading');
  expect(button.innerText).toBe('A Dev');
};
