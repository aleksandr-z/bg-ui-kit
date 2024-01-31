import { SizeType } from '../props';
import React from 'react';

export type TInputProps = {
  isDisabled?: boolean;
  isLoading?: boolean;
  placeholder?: string;
  size?: SizeType;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType?: 'text' | 'password';
};
