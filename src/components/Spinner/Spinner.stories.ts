import { Meta, StoryObj } from '@storybook/react';
import { Spinner, SpinnerProps } from './Spinner';

const meta: Meta<SpinnerProps> = {
  component: Spinner,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<SpinnerProps>;

export const Default: Story = {
  args: {},
};
