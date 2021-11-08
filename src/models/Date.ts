export enum FormatOption {
  YEAR = 'year',
  MONTH = 'month',
}

export type FormattedDateProps = {
  value: Date;
  getFormatted: FormatOption;
};
