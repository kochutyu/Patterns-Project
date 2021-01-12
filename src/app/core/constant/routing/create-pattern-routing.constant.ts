import {ITabLink} from "../../interfaces/components/tabs/tab-link.interface";

export class CreatePatternRoutingConstant {

  static get getFactory(): ITabLink {
    return {
      name: 'factory',
      route: ['preview', 'factory']
    };
  }

  static get getBuilder(): ITabLink {
    return {
      name: 'builder',
      route: ['preview', 'builder']
    };
  }

}
