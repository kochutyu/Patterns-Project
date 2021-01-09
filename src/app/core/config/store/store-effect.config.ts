import {CreatePatternEffects} from "../../store/effects/settings/create-pattern.effects";
import {StructurePatternEffects} from "../../store/effects/settings/structure-pattern.effects";

export class StoreEffectConfig {

  static get getAllEffects(): Array<any> {
    return [
      CreatePatternEffects,
      StructurePatternEffects
    ]
  }
}
