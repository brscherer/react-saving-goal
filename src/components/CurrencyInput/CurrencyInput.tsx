import { useState } from 'react';

import { ReactComponent as DollarSign } from '@/assets/icons/dollar-sign.svg';

import { currencyMask } from '@/utils/currencyUtils';

import * as S from './CurrencyInput.styled';

type CurrencyInputProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CurrencyInput: React.VFC<
  CurrencyInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ value: valueFromProps, defaultValue, onChange, ...rest }) => {
  const isControlled = typeof valueFromProps != 'undefined';
  const hasDefaultValue = typeof defaultValue != 'undefined';

  const [internalValue, setInternalValue] = useState(
    hasDefaultValue ? defaultValue : ''
  );

  const value = isControlled ? valueFromProps : internalValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(currencyMask(event));
    }
    if (!isControlled) {
      const {
        target: { value },
      } = currencyMask(event);
      setInternalValue(value);
    }
  };

  return (
    <S.InputWrapper>
      <DollarSign />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        data-testid="currency-input"
        {...rest}
      />
    </S.InputWrapper>
  );
};

export default CurrencyInput;
