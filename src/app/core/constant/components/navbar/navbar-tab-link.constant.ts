import {ITabLink} from "../../../interfaces/components/tabs/tab-link.interface";
import {AppRoutingConstant} from "../../routing/app-routing.constant";

export class NavbarTabLinkConstant {

  static get getTabLink(): Array<ITabLink> {
    return [
      {
        name: AppRoutingConstant.getPreviewRoute.name.toUpperCase(),
        route: AppRoutingConstant.getPreviewRoute.route,
        icon: 'preview'
      },
      {
        name: AppRoutingConstant.getDashboardRoute.name.split('-').map(v => v.toUpperCase()).join(' '),
        route: AppRoutingConstant.getDashboardRoute.route,
        icon: 'dashboard'
      },
      {
        name: AppRoutingConstant.getSettingsRoute.name.toUpperCase(),
        route: AppRoutingConstant.getSettingsRoute.route,
        icon: 'settings'
      }
    ]
  }

}
