import {ITabLink} from "../../interfaces/components/tabs/tab-link.interface";

export class StructurePatternRoutingConstant {

  static get getAdapter(): ITabLink {
    return {
      name: 'adapter',
      route: ['preview', 'adapter']
    };
  }

  static get getBridge(): ITabLink {
    return {
      name: 'bridge',
      route: ['preview', 'bridge']
    };
  }

  static get getComposite(): ITabLink {
    return {
      name: 'composite',
      route: ['preview', 'composite']
    };
  }

}
