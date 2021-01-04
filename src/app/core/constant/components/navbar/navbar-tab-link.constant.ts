import {ITabLink} from "../../../interfaces/tabs/tab-link.interface";
import {RoutingModuleConstant} from "../../routing/routing-module.constant";

export class NavbarTabLinkConstant {
  static get getTabLink(): Array<ITabLink>{
    return [
      {
        name: RoutingModuleConstant.getHomeRoute.name.toUpperCase(),
        route: RoutingModuleConstant.getHomeRoute.route
      },
      {
        name: RoutingModuleConstant.getAdminPanelRoute.name.split('-').map(v => v.toUpperCase()).join(' '),
        route: RoutingModuleConstant.getAdminPanelRoute.route
      },
      {
        name: RoutingModuleConstant.getSettingsRoute.name.toUpperCase(),
        route: RoutingModuleConstant.getSettingsRoute.route
      }
    ]
  }
}
