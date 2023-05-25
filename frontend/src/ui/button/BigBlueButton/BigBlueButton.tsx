import { ButtonProps } from '../../../types';

import styles from './BigBlueButton.module.scss';

export default function BigBlueButton({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
