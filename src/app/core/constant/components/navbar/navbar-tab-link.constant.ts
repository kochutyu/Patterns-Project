import {ITabLink} from "../../../interfaces/components/tabs/tab-link.interface";
import {AppRoutingConstant} from "../../routing/app-routing.constant";

export class NavbarTabLinkConstant {
  static get getTabLink(): Array<ITabLink> {
    return [
      {
        name: AppRoutingConstant.getHomeRoute.name.toUpperCase(),
        route: AppRoutingConstant.getHomeRoute.route
      },
      {
        name: AppRoutingConstant.getAdminPanelRoute.name.split('-').map(v => v.toUpperCase()).join(' '),
        route: AppRoutingConstant.getAdminPanelRoute.route
      },
      {
        name: AppRoutingConstant.getSettingsRoute.name.toUpperCase(),
        route: AppRoutingConstant.getSettingsRoute.route
      }
    ]
  }
}
