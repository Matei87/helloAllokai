import { FC } from 'react';
import { InputProps } from './Input.types';
import './Input.css';

const Input: FC<InputProps> = ({ onClick }) => {
  return <input className='my-input' onClick={onClick} data-testid='input' />;
};

export default Input;
