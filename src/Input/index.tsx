import React from 'react';
import { TInputProps } from './types';
import DefaultInput from './Input';

export const Input = (props: TInputProps) => {
  return <DefaultInput {...props} />;
};
