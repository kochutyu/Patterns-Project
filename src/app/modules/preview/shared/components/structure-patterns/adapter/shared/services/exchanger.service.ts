import {Injectable} from '@angular/core';
import {Exchanger} from "../models/exchanger";

@Injectable({
  providedIn: 'root'
})
export class ExchangerService extends Exchanger {

  constructor() {
    super()
  }

}
