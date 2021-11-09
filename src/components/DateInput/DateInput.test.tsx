import { render, screen, fireEvent } from '@testing-library/react';

import DateInput from './DateInput';

describe('DateInput', () => {
  it('should change value with arrow keys when focused', () => {
    render(<DateInput />);

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
    fireEvent.keyDown(input, { key: 'ArrowRight' });

    const expectedMonth = new Date(
      currentDate.setMonth(currentDate.getMonth() + 1)
    );

    expect(
      screen.getByText(expectedMonth.toLocaleString('en-US', { month: 'long' }))
    ).toBeInTheDocument();

    fireEvent.keyDown(input, { key: 'ArrowLeft' });

    expect(
      screen.getByText(
        expectedInitialMonth.toLocaleString('en-US', { month: 'long' })
      )
    ).toBeInTheDocument();
  });

  it('should change value by clicking on chevron icons', () => {
    render(<DateInput />);

    const currentDate = new Date();
    const expectedInitialMonth = new Date(
      currentDate.setMonth(currentDate.getMonth() + 1)
    );

    const chevronLeft = screen.getByTestId('chevron-left');
    const chevronRight = screen.getByTestId('chevron-right');

    expect(
      screen.getByText(
        expectedInitialMonth.toLocaleString('en-US', { month: 'long' })
      )
    ).toBeInTheDocument();

    fireEvent.click(chevronRight);

    const expectedMonth = new Date(
      currentDate.setMonth(currentDate.getMonth() + 1)
    );

    expect(
      screen.getByText(expectedMonth.toLocaleString('en-US', { month: 'long' }))
    ).toBeInTheDocument();

    fireEvent.click(chevronLeft);

    expect(
      screen.getByText(
        expectedInitialMonth.toLocaleString('en-US', { month: 'long' })
      )
    ).toBeInTheDocument();
  });
});
