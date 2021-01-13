import {ITabLink} from "../../../interfaces/components/tabs/tab-link.interface";
import {AppRoutingConstant} from "../app-routing.constant";

export class CreatePatternRoutingConstant {

  static get getFactory(): ITabLink {
    return {
      name: 'factory',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'factory'],
      path: 'factory'
    };
  }

  static get getBuilder(): ITabLink {
    return {
      name: 'builder',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'builder'],
      path: 'builder'
    };
  }

}
