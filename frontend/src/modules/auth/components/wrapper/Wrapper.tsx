import Form from '../form/Form';
import Title from '../title/Title';

import style from './Wrapper.module.scss';

export default function Wrapper() {
  return (
    <main className={style.wrapper}>
      <Title />
      <Form type="code" />
    </main>
  );
}
