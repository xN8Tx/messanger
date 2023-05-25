import { log } from 'console';

const createCode = () => {
  const code = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

  return code;
};

export { createCode };
