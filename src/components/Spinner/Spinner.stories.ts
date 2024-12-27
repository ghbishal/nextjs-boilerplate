import type { Meta, StoryObj } from '@storybook/react';
import type { SpinnerProps } from './Spinner';
import { Spinner } from './Spinner';

const meta: Meta<SpinnerProps> = {
  component: Spinner,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<SpinnerProps>;

export const Default: Story = {
  args: {},
};
