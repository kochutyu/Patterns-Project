import {ITabLink} from "../../../../shared/interfaces/components/tabs/tab-link.interface";
import {AppRoutingConstant} from "../../routing/app-routing.constant";

export class NavbarTabLinkConstant {

  static get getTabLink(): Array<ITabLink> {
    return [
      {
        icon: 'preview',
        name: AppRoutingConstant.getPreviewRoute.name.toUpperCase(),
        route: AppRoutingConstant.getPreviewRoute.route,
        path: AppRoutingConstant.getPreviewRoute.path
      },
      {
        icon: 'dashboard',
        name: AppRoutingConstant.getDashboardRoute.name.split('-').map(v => v.toUpperCase()).join(' '),
        route: AppRoutingConstant.getDashboardRoute.route,
        path: AppRoutingConstant.getDashboardRoute.path
      },
      {
        icon: 'settings',
        name: AppRoutingConstant.getSettingsRoute.name.toUpperCase(),
        route: AppRoutingConstant.getSettingsRoute.route,
        path: AppRoutingConstant.getSettingsRoute.path
      }
    ]
  }

}
