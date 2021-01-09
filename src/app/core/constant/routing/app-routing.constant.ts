import {ITabLink} from "../../interfaces/components/tabs/tab-link.interface";

export class AppRoutingConstant {

  static get getHomeRoute(): ITabLink {
    return {
      name: 'preview',
      route: ['preview']
    };
  }

  static get getAdminPanelRoute(): ITabLink {
    return {
      name: 'admin-panel',
      route: ['admin-panel']
    };
  }

  static get getSettingsRoute(): ITabLink {
    return {
      name: 'settings',
      route: ['settings']
    };
  }

}
