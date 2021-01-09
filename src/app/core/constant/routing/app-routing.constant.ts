import {ITabLink} from "../../interfaces/components/tabs/tab-link.interface";

export class AppRoutingConstant {

  static get getHomeRoute(): ITabLink {
    return {
      name: 'preview',
      route: ['preview']
    };
  }

  static get getDashboardRoute(): ITabLink {
    return {
      name: 'dashboard',
      route: ['dashboard']
    };
  }

  static get getSettingsRoute(): ITabLink {
    return {
      name: 'settings',
      route: ['settings']
    };
  }

}
