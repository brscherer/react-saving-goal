import { render, screen, fireEvent } from '@testing-library/react';
import user from '@testing-library/user-event';

import SavingGoal from './SavingGoal';

describe('SavingGoal', () => {
  it('should not let user input a month that is equal or less than actual month on date input', () => {
    render(<SavingGoal />);

    const currentDate = new Date();
    const expectedInitialMonth = new Date(
      currentDate.setMonth(currentDate.getMonth() + 1)
    );

    const input = screen.getByTestId('date-input');

    expect(
      screen.getByText(
        expectedInitialMonth.toLocaleString('en-US', { month: 'long' })
      )
    ).toBeInTheDocument();

    input.focus();
    fireEvent.keyDown(input, { key: 'ArrowLeft' });

    const unexpectedMonth = new Date(
      currentDate.setMonth(currentDate.getMonth() + 1)
    );

    expect(
      screen.queryByText(
        unexpectedMonth.toLocaleString('en-US', { month: 'long' })
      )
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(
        expectedInitialMonth.toLocaleString('en-US', { month: 'long' })
      )
    ).toBeInTheDocument();
  });

  it('should update monthly amount accordingly to amount value and reach date value', () => {
    render(<SavingGoal />);

    const currencyInput = screen.getByTestId('currency-input');
    const dateInput = screen.getByTestId('date-input');
    const monthlyAmount = screen.getByTestId('monthly-amount');

    const currentDate = new Date();

    user.type(currencyInput, '100000000');

    dateInput.focus();
    fireEvent.keyDown(dateInput, { key: 'ArrowRight' });
    fireEvent.keyDown(dateInput, { key: 'ArrowRight' });
    fireEvent.keyDown(dateInput, { key: 'ArrowRight' });
    fireEvent.keyDown(dateInput, { key: 'ArrowRight' });

    const expectedDate = new Date(
      currentDate.setMonth(currentDate.getMonth() + 5)
    );

    expect(
      screen.getByText(expectedDate.toLocaleString('en-US', { month: 'long' }))
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue('1,000,000.00')).toBeInTheDocument();
    expect(monthlyAmount.innerHTML).toBe('$200,000');
  });
});
