import {ITabLink} from "../../../interfaces/components/tabs/tab-link.interface";
import {AppRoutingConstant} from "../app-routing.constant";

export class StructurePatternRoutingConstant {

  static get getAdapter(): ITabLink {
    return {
      name: 'adapter',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'adapter'],
      path: 'adapter'
    };
  }

  static get getBridge(): ITabLink {
    return {
      name: 'bridge',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'bridge'],
      path: 'bridge'
    };
  }

  static get getComposite(): ITabLink {
    return {
      name: 'composite',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'composite'],
      path: 'composite'
    };
  }

}
