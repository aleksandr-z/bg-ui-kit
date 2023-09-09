import React from 'react';
import { BaseTextProps, BaseText, BaseTextType } from './components/BaseText';
import cn from 'classnames';
import styles from './style.scss';

interface IText extends BaseTextType {
  Xs: typeof Xs;
  Sm: typeof Sm;
  Md: typeof Md;
  Xl: typeof Xl;
  Lg: typeof Lg;
}

const Xs = (props: BaseTextProps) => {
  return (
    <BaseText
      {...props}
      tag={'span'}
      className={cn(props.className, styles.textXs)}
    />
  );
};

const Sm = (props: BaseTextProps) => {
  return (
    <BaseText
      {...props}
      tag={'span'}
      className={cn(props.className, styles.textSm)}
    />
  );
};

const Md = (props: BaseTextProps) => {
  return (
    <BaseText
      {...props}
      tag={'span'}
      className={cn(props.className, styles.textMd)}
    />
  );
};

const Xl = (props: BaseTextProps) => {
  return (
    <BaseText
      {...props}
      tag={'span'}
      className={cn(props.className, styles.textXl)}
    />
  );
};

const Lg = (props: BaseTextProps) => {
  return (
    <BaseText
      {...props}
      tag={'span'}
      className={cn(props.className, styles.textLg)}
    />
  );
};

export const Text: IText = BaseText as IText;

Text.Lg = Lg;
Text.Xl = Xl;
Text.Md = Md;
Text.Sm = Sm;
Text.Xs = Xs;
