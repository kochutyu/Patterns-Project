import {UserStorage} from '../user-storage';

import {EStorageType} from '../../enums/storage/srorage-type.enum';
import {PREVIOUS_ROUTE} from "../../constant/route.constant";


export class RouteStorage extends UserStorage {

  static storageType: EStorageType = EStorageType.LOCAL;

  constructor() {
    super();
  }

  static set(route: Array<string>): void {
    this.type(this.storageType).setItem(PREVIOUS_ROUTE, JSON.stringify(route));
  }

  static get(): Array<string>{
    return this.type(this.storageType).getItem(PREVIOUS_ROUTE) ?
      JSON.parse(this.type(this.storageType).getItem(PREVIOUS_ROUTE)) :
      [];
  }

  static remove(): void {
    this.type(this.storageType).removeItem(PREVIOUS_ROUTE);
  }

}
