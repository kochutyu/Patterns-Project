import {RouterReducerState} from "@ngrx/router-store";
import {ICreatePatternState} from "./settings/patterns/create-pattern-state.interface";
import {IStructurePatternState} from "./settings/patterns/structure-pattern-state.interface";

export interface IAppState {
  router?: RouterReducerState;
  settingsCreatePatterns: ICreatePatternState | IStructurePatternState;
  settingsStructurePatterns: ICreatePatternState | IStructurePatternState;
}
