import React, { useState } from 'react';
import { SizeType } from '../props';
import cn from 'classnames';
import styles from './style.scss';
import { Dice } from '../Loading/components/Dice';
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

export const Input = ({
  value = '',
  size = 'md',
  onChange,
  label,
  placeholder,
  isLoading = false,
  isDisabled = false,
  inputType = 'text'
}: TInputProps) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [typeInputValue, setTypeInputValue] = useState(inputType)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    setInputValue(event.target.value);
  };
  const changeTypeInputValueHandler = () => setTypeInputValue((prevState) => {
    return prevState === 'text' ? 'password' : 'text'
  })

  return (
    <>
      {label && (
        <div className={cn(styles.label, styles[`label-size-${size}`])}>
          <label>{label}</label>
        </div>
      )}
      <div
        className={cn(styles.inputWrapper, styles[`size-${size}`], {
          [styles.isLoading]: isLoading,
          [styles.isDisabled]: isDisabled,
        })}
      >
        <input
          disabled={isLoading || isDisabled}
          placeholder={placeholder}
          className={styles.input}
          type={typeInputValue}
          onChange={handleChange}
          value={inputValue}
        />
        {isLoading && (
          <div className={styles.diceWrapper}>
            <Dice />
          </div>
        )}
        {inputType === 'password' && !isLoading && !isDisabled && (
          <div className={styles.isPasswordType} onClick={changeTypeInputValueHandler}>
            {typeInputValue === 'text' &&
            <div className={styles.openEye}></div>}
          </div>
        )}
      </div>
    </>
  );
};
