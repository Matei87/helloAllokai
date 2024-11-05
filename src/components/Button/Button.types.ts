import { MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
  // onClick: () => void;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}
