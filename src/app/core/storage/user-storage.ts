import {EStorageType} from "../../shared/enums/storage/srorage-type.enum";


export class UserStorage {

  static storageType: EStorageType = EStorageType.LOCAL;

  private static readonly types: Storage[] = [localStorage, sessionStorage];

  static type(status: number): Storage {
    return this.types[status];
  }

}
