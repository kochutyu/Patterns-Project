import {ICreatePatternState} from "../../interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {IStructurePatternState} from "../../interfaces/store/state/settings/patterns/structure-pattern-state.interface";
import {ISettingsPatternReduce} from "../../interfaces/settings/settings-pattern-reduce.interface";

export const patternReduce = (payload: ISettingsPatternReduce): ICreatePatternState | IStructurePatternState => {
  return {
    ...payload.state,
    [payload.keyName]: {
      ...payload.state[payload.keyName],
      isChecked: payload.value
    }
  }
}
