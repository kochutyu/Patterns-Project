import {ICreatePatternState} from "../store/state/settings/patterns/create-pattern-state.interface";
import {IStructurePatternState} from "../store/state/settings/patterns/structure-pattern-state.interface";

export interface ISettingsPatternReduce {
  keyName: string;
  state: ICreatePatternState | IStructurePatternState;
  value: boolean;
}
