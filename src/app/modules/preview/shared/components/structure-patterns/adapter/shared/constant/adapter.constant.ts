import {ICurrency} from "../interfaces/currency.interface";

export class AdapterConstant {
  public static get getCurrency(): Array<ICurrency> {
    return [
      {
        name: 'UAN',
        amount: 28
      },
      {
        name: 'USD',
        amount: 1
      },
      {
        name: 'RUB',
        amount: 75
      }
    ]
  }
}
