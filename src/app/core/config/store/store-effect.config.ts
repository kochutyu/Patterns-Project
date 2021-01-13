import {CreatePatternEffects} from "../../store/effects/settings/create-pattern.effects";
import {StructurePatternEffects} from "../../store/effects/settings/structure-pattern.effects";
import {RoutingEffects} from "../../store/effects/routing/routing.effects";


export class StoreEffectConfig {

  static get getAllEffects(): Array<any> {
    return [
      CreatePatternEffects,
      StructurePatternEffects,
      RoutingEffects
    ]
  }

}
