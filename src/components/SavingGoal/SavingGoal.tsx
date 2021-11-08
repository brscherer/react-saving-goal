import { useState, useEffect, useRef } from 'react';

import { ReactComponent as HouseIcon } from '@/assets/icons/buy-a-house.svg';

import Logo from '@/components/Logo/Logo';
import CurrencyInput from '@/components/CurrencyInput/CurrencyInput';
import DateInput from '@/components/DateInput/DateInput';

import { FormatOption } from '@/models/Date';

import {
  getAvailableMonth,
  getFormattedDate,
  getTotalMonthsFromNow,
  isFutureMonth,
  parseDate,
} from '@/utils/dateUtils';
import { parseCurrency } from '@/utils/currencyUtils';

import * as S from './SavingGoal.styled';

const SavingGoal: React.VFC = () => {
  const [amount, setAmount] = useState('0');
  const [monthlyAmount, setMonthlyAmount] = useState('0');
  const [reachDate, setReachDate] = useState(getAvailableMonth());
  const [formattedReachDate, setFormattedReachDate] = useState('');

  const currencyFormatter = useRef(
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })
  );

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleReachDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!isFutureMonth(event.target.value)) return;

    setReachDate(event.target.value);
  };

  useEffect(() => {
    const monthsCount = getTotalMonthsFromNow(reachDate);
    const value = amount ? parseCurrency(amount) / monthsCount : 0;
    setMonthlyAmount(currencyFormatter.current.format(value));
  }, [amount, reachDate]);

  useEffect(() => {
    const selectedDate = parseDate(reachDate);

    setFormattedReachDate(
      `${getFormattedDate({
        value: selectedDate as Date,
        getFormatted: FormatOption.MONTH,
      })} ${getFormattedDate({
        value: selectedDate as Date,
        getFormatted: FormatOption.YEAR,
      })}`
    );
  }, [reachDate]);

  return (
    <>
      <S.Header>
        <Logo />
      </S.Header>
      <S.Main>
        <S.Title>
          Let&apos;s plan your <strong>saving goal.</strong>
        </S.Title>
        <S.Card>
          <S.CardHeader>
            <HouseIcon />
            <S.CardInfo>
              <h2>Buy a house</h2>
              <h3>Saving goal</h3>
            </S.CardInfo>
          </S.CardHeader>
          <S.Form>
            <S.FormField>
              <S.Label htmlFor="amount">Total amount</S.Label>
              <CurrencyInput
                id="amount"
                value={amount}
                onChange={handleAmountChange}
              ></CurrencyInput>
            </S.FormField>
            <S.FormField flexBasis={'40%'}>
              <S.Label htmlFor="reachDate">Reach goal by</S.Label>
              <DateInput
                id="reachDate"
                value={reachDate}
                onChange={handleReachDateChange}
              ></DateInput>
            </S.FormField>
          </S.Form>
          <S.MonthlyAmount>
            <S.MonthlyAmountSection>
              Monthly amount
              <S.MonthlyAmountValue title={monthlyAmount}>
                {monthlyAmount}
              </S.MonthlyAmountValue>
            </S.MonthlyAmountSection>
            <S.MonthlyAmountSectionBottom>
              You’re planning{' '}
              <strong>
                {getTotalMonthsFromNow(reachDate)} monthly deposits
              </strong>{' '}
              to reach your{' '}
              <strong>
                {currencyFormatter.current.format(
                  amount ? parseCurrency(amount) : 0
                )}
              </strong>{' '}
              goal by <strong>{formattedReachDate}.</strong>
            </S.MonthlyAmountSectionBottom>
          </S.MonthlyAmount>
          <S.Button>Confirm</S.Button>
        </S.Card>
      </S.Main>
    </>
  );
};

export default SavingGoal;
