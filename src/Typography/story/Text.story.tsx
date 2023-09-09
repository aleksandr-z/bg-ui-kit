import type { Meta } from '@storybook/react';
import { BaseTextProps } from '../components/BaseText';
import { Text } from '../Text';
import React from 'react';
import { StoryObj } from '@storybook/react';

const meta: Meta<BaseTextProps> = {
  title: 'Typography',
  component: Text.Xs,
};

export default meta;

type Story = StoryObj<BaseTextProps>;

export const TextXs: Story = {
  name: 'Text',
  render: () => {
    const text = 'Съешь ещё этих мягких французских булок, да выпей чаю';
    return (
      <>
        <div>
          <Text.Lg>{text}</Text.Lg>
        </div>
        <div>
          <Text.Xl>{text}</Text.Xl>
        </div>
        <div>
          <Text.Md>{text}</Text.Md>
        </div>
        <div>
          <Text.Sm>{text}</Text.Sm>
        </div>
        <div>
          <Text.Xs>{text}</Text.Xs>
        </div>
      </>
    );
  },
};
