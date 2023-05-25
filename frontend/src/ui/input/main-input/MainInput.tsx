import { InputProps } from '../../../types';

import styles from './MainInput.module.scss';

export default function MainInput({ type, placeholder, value, onChange }: InputProps) {
  return <input className={styles.input} type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}
