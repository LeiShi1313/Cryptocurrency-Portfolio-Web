/**
 * Created by DickyShi on 12/17/17.
 */
export class Asset {
  symbol: string;
  amount: number;
  status: string;
}

export interface Assets {
  [key: string]: Asset[];
}

export interface Sums {
  [key: string]: number;
}

export class Price {
  legacy: boolean;
  price: number;
}

export const Exchanges: string[] = [
  'gate.io',
  'okex',
  'binance',
  'huobi',
  'zb',
  'cryptopia'
];
