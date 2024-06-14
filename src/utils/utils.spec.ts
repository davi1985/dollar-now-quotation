import { currentBRL, customFormatCurrency } from './utils';

describe('utils functions', () => {
  it('should return currency in BRL format', () => {
    const result = currentBRL(20);
    expect(result).toContain('R$');
  });

  it('should return currency in format required', () => {
    const [brl, usd, euro] = ['BRL', 'USD', 'EUR'];
    const BrazilianCurrency = customFormatCurrency(brl, 20);
    const AmericanCurrency = customFormatCurrency(usd, 20);
    const EuropeCurrency = customFormatCurrency(euro, 20);

    expect(BrazilianCurrency).toContain('R$');
    expect(AmericanCurrency).toContain('US$');
    expect(EuropeCurrency).toContain('€');
  });
});
