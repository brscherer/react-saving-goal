export const currencyMask = (
  event: React.ChangeEvent<HTMLInputElement>
): React.ChangeEvent<HTMLInputElement> => {
  let { value } = event.target;
  value = value.replace(/^[0]/g, '');
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1.$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ',');
  event.target.value = value;
  return event;
};

export const parseCurrency = (value: string): number => {
  return parseFloat(value.replace(/[,]/g, ''));
};
