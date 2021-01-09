export class StorageHelper {

  private static readonly types: Storage[] = [localStorage, sessionStorage];

  constructor() {
  }

  static type(status: number): Storage {
    return this.types[status];
  }

}
