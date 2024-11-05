import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input Component', () => {
  test('fires onClick handler', async () => {
    const handleClick = jest.fn();
    render(<Input onClick={handleClick} />);

    await userEvent.click(screen.getByTestId('input'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
