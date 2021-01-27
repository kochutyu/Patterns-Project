import {ICreatePatternState} from "../../../shared/interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {IStructurePatternState} from "../../../shared/interfaces/store/state/settings/patterns/structure-pattern-state.interface";
import {ISettingsPatternReduce} from "../../../shared/interfaces/settings/settings-pattern-reduce.interface";

export class USettings {

  public static patternReduce(payload: ISettingsPatternReduce): ICreatePatternState | IStructurePatternState {
    return {
      ...payload.state,
      [payload.keyName]: {
        ...payload.state[payload.keyName],
        isChecked: payload.value
      }
    }
  }

}
