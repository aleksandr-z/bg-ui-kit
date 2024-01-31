import React, {
  CSSProperties,
  LegacyRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import styles from './style.scss';

type LoadingProps = {
  classNameWrapper?: string;
  classNameDice?: string;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
};

export const Dice = ({
  classNameWrapper,
  classNameDice,
  style,
  onClick,
}: LoadingProps) => {
  return (
    <div onClick={onClick} className={cn(styles.diceWrapper, classNameWrapper)}>
      <div style={style} className={cn(styles.dice, classNameDice)}>
        <div className={styles.surface1}>
          <span className={cn(styles.dot, styles.dot1)}></span>
        </div>
        <div className={styles.surface2}>
          <span className={cn(styles.dot, styles.dot1)}></span>
          <span className={cn(styles.dot, styles.dot2)}></span>
        </div>
        <div className={styles.surface3}>
          <span className={cn(styles.dot, styles.dot1)}></span>
          <span className={cn(styles.dot, styles.dot2)}></span>
          <span className={cn(styles.dot, styles.dot3)}></span>
        </div>
        <div className={styles.surface4}>
          <span className={cn(styles.dot, styles.dot1)}></span>
          <span className={cn(styles.dot, styles.dot2)}></span>
          <span className={cn(styles.dot, styles.dot3)}></span>
          <span className={cn(styles.dot, styles.dot4)}></span>
        </div>
        <div className={styles.surface5}>
          <span className={cn(styles.dot, styles.dot1)}></span>
          <span className={cn(styles.dot, styles.dot2)}></span>
          <span className={cn(styles.dot, styles.dot3)}></span>
          <span className={cn(styles.dot, styles.dot4)}></span>
          <span className={cn(styles.dot, styles.dot5)}></span>
        </div>
        <div className={styles.surface6}>
          <span className={cn(styles.dot, styles.dot1)}></span>
          <span className={cn(styles.dot, styles.dot2)}></span>
          <span className={cn(styles.dot, styles.dot3)}></span>
          <span className={cn(styles.dot, styles.dot4)}></span>
          <span className={cn(styles.dot, styles.dot5)}></span>
          <span className={cn(styles.dot, styles.dot6)}></span>
        </div>
      </div>
    </div>
  );
};
