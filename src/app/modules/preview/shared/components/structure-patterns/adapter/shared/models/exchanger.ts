import {IExchanger} from "../interfaces/exchanger.interface";
import {ICurrency} from "../interfaces/currency.interface";
import {AdapterConstant} from "../constant/adapter.constant";

export class Exchanger implements IExchanger {

  public pairs: Array<ICurrency> = AdapterConstant.getCurrency

  public convertCurrencyToStableCurrency(currency: ICurrency, amount: number): number {
    return this._stableCurrency.amount * (amount / currency.amount);
  }

  public sellToBuy(sell: ICurrency, buy: ICurrency, amount: number): number {
    if (sell.name === buy.name){
      return amount;
    }
    return +(this.convertCurrencyToStableCurrency(sell, amount) * buy.amount).toFixed(2);
  }

  public buyToSell(sell: ICurrency, buy: ICurrency, amount: number): number {
    if (sell.name === buy.name){
      return amount;
    }
    return +(this.convertCurrencyToStableCurrency(buy, amount) * sell.amount).toFixed(2);
  }

  private get _stableCurrency(): ICurrency {
    return this.pairs.find(p => p.name === 'USD');
  }

}
