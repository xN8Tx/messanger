import { ChildrenProps } from '../../../types';

import styles from './BBHeading.module.scss';

export default function BBHeading({ children }: ChildrenProps) {
  return <h1 className={styles.bbheading}>{children}</h1>;
}
