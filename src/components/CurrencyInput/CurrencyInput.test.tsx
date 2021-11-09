import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import CurrencyInput from './CurrencyInput';

describe('CurrencyInput', () => {
  it('should accept only numbers and format value', () => {
    render(<CurrencyInput />);

    const input = screen.getByTestId('currency-input');
    user.type(input, 'asd12345678');

    expect(screen.getByDisplayValue('123,456.78')).toBeInTheDocument();
  });
});
