import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../Input';

const meta: Meta<typeof Input> = {
  title: 'Controllers',
  component: Input,
};

type Story = StoryObj<typeof Input>;

export default meta;

export const Primary: Story = {
  name: 'Input',
  args: {
    label: 'Описание',
    value: 'Значение',
    placeholder: 'Плейсхолдер'
  },
  argTypes: {
      size: ['xs', 'sm', 'md', 'xl', 'lg'],
  },
};
