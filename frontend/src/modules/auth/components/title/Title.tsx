import BBHeading from '../../../../ui/heading/BBHeading/BBHeading';

import logo from '../../../../assets/logo.png';

import styles from './Title.module.scss';

export default function Title() {
  return (
    <div className={styles.title}>
      <img src={logo} alt="" />
      <BBHeading>Blossom</BBHeading>
    </div>
  );
}
