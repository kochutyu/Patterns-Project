import {EStorageType} from "../enums/storage/srorage-type.enum";

export class Storage {

  static storageType: EStorageType = EStorageType.LOCAL;

  private static readonly types: Storage[] = [localStorage, sessionStorage];

  constructor() {
  }

  static type(status: number): Storage {
    return this.types[status];
  }

}
