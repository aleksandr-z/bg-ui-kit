import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Loading } from './index';

const meta: Meta<typeof Loading> = {
  title: 'Loading',
  component: Loading,
};

type Story = StoryObj<typeof Loading>;

export default meta;

export const Primary: Story = {
  name: 'Loading',
  render: () => {
    return <Loading />;
  },
};
