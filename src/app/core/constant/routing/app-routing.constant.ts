import {ITabLink} from "../../interfaces/tabs/tab-link.interface";

export class AppRoutingConstant {

  static get getHomeRoute(): ITabLink {
    return {
      name: 'home',
      route: ['home']
    };
  }

  static get getSettingsRoute(): ITabLink {
    return {
      name: 'settings',
      route: ['settings']
    };
  }

  static get getAdminPanelRoute(): ITabLink {
    return {
      name: 'admin-panel',
      route: ['admin-panel']
    };
  }

}
