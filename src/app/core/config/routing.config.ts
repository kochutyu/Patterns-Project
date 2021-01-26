import {ExtraOptions, PreloadAllModules} from "@angular/router";

export class RoutingConfig {
  public static get option(): ExtraOptions {
    return {
      preloadingStrategy: PreloadAllModules
    }
  }
}
