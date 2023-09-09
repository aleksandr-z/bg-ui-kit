import React from 'react';
import { BaseTextProps, BaseText, BaseTextType } from './components/BaseText';
import cn from 'classnames';
import styles from './style.scss';

interface ITitle extends BaseTextType {
  H1: typeof H1;
  H2: typeof H2;
  H3: typeof H3;
  H4: typeof H4;
  H5: typeof H5;
  H6: typeof H6;
}

const H1 = (props: BaseTextProps) => {
  return (
    <BaseText
      {...props}
      tag={'h1'}
      className={cn(props.className, styles.h1)}
    />
  );
};

const H2 = (props: BaseTextProps) => {
  return (
    <BaseText
      {...props}
      tag={'h2'}
      className={cn(props.className, styles.h2)}
    />
  );
};

const H3 = (props: BaseTextProps) => {
  return (
    <BaseText
      {...props}
      tag={'h3'}
      className={cn(props.className, styles.h3)}
    />
  );
};

const H4 = (props: BaseTextProps) => {
  return (
    <BaseText
      {...props}
      tag={'h4'}
      className={cn(props.className, styles.h4)}
    />
  );
};

const H5 = (props: BaseTextProps) => {
  return (
    <BaseText
      {...props}
      tag={'h5'}
      className={cn(props.className, styles.h5)}
    />
  );
};

const H6 = (props: BaseTextProps) => {
  return (
    <BaseText
      {...props}
      tag={'h6'}
      className={cn(props.className, styles.h6)}
    />
  );
};

export const Title: ITitle = BaseText as ITitle;

Title.H1 = H1;
Title.H2 = H2;
Title.H3 = H3;
Title.H4 = H4;
Title.H5 = H5;
Title.H6 = H6;
