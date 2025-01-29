import { ExchangeRate } from '../models/exchange-rate';

type Props = {
  currencySelected: string;
  data: ExchangeRate;
};

export class ExchangeRateMapper {
  static toModel({ currencySelected, data }: Props) {
    const currency = `${currencySelected}BRL` as keyof ExchangeRate;

    return {
      currency: data[currency].ask,
    };
  }
}
