import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../Input';

const meta: Meta<typeof Input> = {
  title: 'Controllers',
  component: Input,
  args: {
    isDisabled: false,
    isLoading: false,
    value: 'Значение',
    inputType: 'text',
    size: 'md',
  },
  parameters: {
      controls: {
          exclude: ['inputType','value'],
          include: ['isDisabled','isLoading','placeholder','size','label']
      }
  }
};

type Story = StoryObj<typeof Input>;

export default meta;

export const Primary: Story = {
  name: 'Input Type Text',
  args: {
    label: 'Описание',
    placeholder: 'Плейсхолдер',
  },
};

export const InputPasswordType: Story = {
    name: 'Input Type Password',
    args: {
        label: 'Введите пароль',
        inputType: 'password',
        placeholder: 'Пароль',
    },
};
