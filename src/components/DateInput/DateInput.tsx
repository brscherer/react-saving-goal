import { useEffect, useState } from 'react';

import { ReactComponent as ChevronLeft } from '@/assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '@/assets/icons/chevron-right.svg';

import { FormatOption } from '@/models/Date';

import {
  getAvailableMonth,
  getFormattedDate,
  parseDate,
} from '@/utils/dateUtils';

import * as S from './DateInput.styled';

type DateInputProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const DateInput: React.VFC<
  DateInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ value: valueFromProps, defaultValue, onChange, ...rest }) => {
  const isControlled = typeof valueFromProps != 'undefined';
  const hasDefaultValue = typeof defaultValue != 'undefined';

  const [internalValue, setInternalValue] = useState(
    hasDefaultValue ? defaultValue : getAvailableMonth()
  );

  const value = isControlled ? valueFromProps : internalValue;

  const dateFromValue = parseDate(value as string) as Date;

  const [month, setMonth] = useState(
    getFormattedDate({
      value: dateFromValue,
      getFormatted: FormatOption.MONTH,
    })
  );
  const [year, setYear] = useState(
    getFormattedDate({
      value: dateFromValue,
      getFormatted: FormatOption.YEAR,
    })
  );

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    if (!isControlled) {
      setInternalValue(event.target.value);
    }
  };

  const handleDecreaseDate = () => {
    const newDate = new Date(
      dateFromValue.getFullYear(),
      dateFromValue.getMonth() - 1,
      dateFromValue.getDate()
    );

    handleDateChange({
      target: { value: newDate.toISOString().split('T')[0] },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleIncreaseDate = () => {
    const newDate = new Date(
      dateFromValue.getFullYear(),
      dateFromValue.getMonth() + 1,
      dateFromValue.getDate()
    );

    handleDateChange({
      target: { value: newDate.toISOString().split('T')[0] },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const options: { [key: string]: () => void } = {
      ArrowLeft: () => handleDecreaseDate(),
      ArrowRight: () => handleIncreaseDate(),
    };

    return (
      Object.prototype.hasOwnProperty.call(options, event.key) &&
      options[event.key]()
    );
  };

  useEffect(() => {
    const selectedDate = parseDate(value as string);

    setMonth(
      getFormattedDate({
        value: selectedDate as Date,
        getFormatted: FormatOption.MONTH,
      })
    );
    setYear(
      getFormattedDate({
        value: selectedDate as Date,
        getFormatted: FormatOption.YEAR,
      })
    );
  }, [value]);

  return (
    <S.FieldWrapper>
      <ChevronLeft data-testid="chevron-left" onClick={handleDecreaseDate} />
      <S.InputWrapper>
        <input
          type="date"
          value={value}
          onClick={(e) => e.preventDefault()}
          onChange={handleDateChange}
          onKeyDown={handleKeyDown}
          data-testid="date-input"
          {...rest}
        />
        <S.InputValue>
          <S.MonthValue>{month}</S.MonthValue>
          <S.YearValue>{year}</S.YearValue>
        </S.InputValue>
      </S.InputWrapper>
      <ChevronRight data-testid="chevron-right" onClick={handleIncreaseDate} />
    </S.FieldWrapper>
  );
};

export default DateInput;
