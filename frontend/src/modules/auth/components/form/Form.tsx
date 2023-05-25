import React, { useState } from 'react';

import MainInput from '../../../../ui/input/main-input/MainInput';
import BigBlueButton from '../../../../ui/button/BigBlueButton/BigBlueButton';

import styles from './Form.module.scss';

interface FormProps {
  type: 'email' | 'code';
}

export default function Form({ type }: FormProps) {
  const [value, setValue] = useState<string>('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const checkCode = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log(event);
  };

  const sendCode = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    console.log(event);
  };

  const placeholder = type === 'email' ? 'Email' : 'Code';
  const inputType = type === 'email' ? 'text' : 'number';
  const btnText = type === 'email' ? 'Send code' : 'Check code';
  const onBtnClick = type === 'email' ? sendCode : checkCode;

  return (
    <form className={styles.form}>
      <MainInput value={value} onChange={onInputChange} type={inputType} placeholder={placeholder} />
      <BigBlueButton onClick={onBtnClick}>{btnText}</BigBlueButton>
    </form>
  );
}
