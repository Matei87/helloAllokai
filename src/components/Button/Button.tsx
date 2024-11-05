import { FC } from 'react';
import { ButtonProps } from './Button.types';
import './Button.css';

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className='my-button' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
