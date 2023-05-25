import React from 'react';

interface ChildrenProps {
  children: React.ReactNode;
}

interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ButtonProps extends ChildrenProps {
  // eslint-disable-next-line no-unused-vars
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export type { ChildrenProps, InputProps, ButtonProps };
