import {IRouterButton} from "../../../../shared/interfaces/router/router-button.interface";

export class DashboardNotFoundConstant {

  static get getLinkInfo(): IRouterButton {
    return {
      route: '/settings',
      name: 'Go to settings'
    }
  }

  static get getMessage(): string{
    return 'Patterns not found!';
  }

}
