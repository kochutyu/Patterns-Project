import {ICurrency} from "./currency.interface";

export interface IExchanger {
  convertCurrencyToStableCurrency(currency: ICurrency, amount: number): number;

  sellToBuy(sell: ICurrency, buy: ICurrency, amount: number): number;
}
