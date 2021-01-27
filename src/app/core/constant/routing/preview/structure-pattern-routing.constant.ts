import {ITabLink} from "../../../../shared/interfaces/components/tabs/tab-link.interface";
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

  static get getDecorator(): ITabLink {
    return {
      name: 'decorator',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'decorator'],
      path: 'decorator'
    };
  }

  static get getFacade(): ITabLink {
    return {
      name: 'facade',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'facade'],
      path: 'facade'
    };
  }

  static get getFlyweight(): ITabLink {
    return {
      name: 'flyweight',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'flyweight'],
      path: 'flyweight'
    };
  }

  static get getProxy(): ITabLink {
    return {
      name: 'proxy',
      route: [...AppRoutingConstant.getPreviewRoute.route, 'proxy'],
      path: 'proxy'
    };
  }

}
