import type { Meta } from '@storybook/react';
import { BaseTextProps } from '../components/BaseText';
import { Title } from '../Title';
import React from 'react';
import { StoryObj } from '@storybook/react';

const meta: Meta<BaseTextProps> = {
  title: 'Typography',
  component: Title.H1,
};

export default meta;

type Story = StoryObj<BaseTextProps>;

export const H1: Story = {
  name: 'Title',
  render: () => {
    return (
      <div>
        <Title.H1>Заголовок первого уровня</Title.H1>
        <Title.H2>Заголовок второго уровня</Title.H2>
        <Title.H3>Заголовок третьего уровня</Title.H3>
        <Title.H4>Заголовок четвертого уровня</Title.H4>
        <Title.H5>Заголовок пятого уровня</Title.H5>
        <Title.H6>Заголовок шестого уровня</Title.H6>
      </div>
    );
  },
};
