import {UserStorage} from "../user-storage";

import {UDashboardPatterns} from "../../utils/dashboard/dashboard-patterns.utils";

import {EStorageType} from '../../enums/storage/srorage-type.enum';
import {EDashboardPatternStorage} from "../../enums/storage/dashboard/dashboard-pattern-storage.enum";

import {IDashboardCategoryList} from "../../interfaces/category/dashboard-category-list.interface";


export class DashboardPatternStateStorage extends UserStorage {

  static storageType: EStorageType = EStorageType.LOCAL;

  constructor() {
    super();
  }

  static setState(pattern: EDashboardPatternStorage, state: IDashboardCategoryList): void {
    this.type(this.storageType).setItem(pattern, JSON.stringify(state));
  }

  static getState(pattern: EDashboardPatternStorage): IDashboardCategoryList {
    if (this.type(this.storageType).getItem(pattern)) {
      return JSON.parse(this.type(this.storageType).getItem(pattern));
    } else {
      return UDashboardPatterns.getInitialCategory(pattern);
    }
  }

  static remove(pattern: EDashboardPatternStorage): void {
    this.type(this.storageType).removeItem(pattern);
  }
}
