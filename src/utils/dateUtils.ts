import { FormattedDateProps, FormatOption } from '@/models/Date';

export const getAvailableMonth = (): string => {
  const currentDate = new Date();

  return new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    currentDate.getDate()
  )
    .toISOString()
    .split('T')[0];
};

export const parseDate = (value: string): Date => {
  if (!value) throw Error('value should be passed');

  const [year, month, day] = value.split('-');

  return new Date(+year, +month - 1, +day);
};

export const getFormattedDate = ({
  value,
  getFormatted,
}: FormattedDateProps): string => {
  if (!value) return '';

  const optionValue = getFormatted === FormatOption.YEAR ? 'numeric' : 'long';

  return value.toLocaleString('en-US', { [getFormatted]: optionValue });
};

export const isFutureMonth = (value: string): boolean => {
  const targetDate = parseDate(value);
  const currentDate = new Date();

  const monthTargetDate = new Date(
    targetDate.getFullYear(),
    targetDate.getMonth()
  );
  const monthCurrentDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  return monthTargetDate > monthCurrentDate;
};

export const getTotalMonthsFromNow = (value: string): number => {
  const targetDate = parseDate(value);
  const currentDate = new Date();

  return Math.max(
    (targetDate.getFullYear() - currentDate.getFullYear()) * 12 +
      targetDate.getMonth() -
      currentDate.getMonth(),
    0
  );
};
