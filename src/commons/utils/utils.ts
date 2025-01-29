export const customFormatCurrency = (currency: string, value: number) =>
  new Intl.NumberFormat(currency, {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(value);

export const currentBRL = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
