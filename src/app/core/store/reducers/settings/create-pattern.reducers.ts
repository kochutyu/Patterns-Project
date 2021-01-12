import {createReducer, on} from "@ngrx/store";

import {AppState} from "../../state/app.state";

import {
  TurnOffBuilderPatternAction,
  TurnOffFactoryPatternAction,
  TurnOnBuilderPatternAction,
  TurnOnFactoryPatternAction
} from "../../actions/settings/create-pattern.action";

import {USettings} from "../../../utils/store/settings.utils";

import {ICreatePatternState} from "../../../interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {IStructurePatternState} from "../../../interfaces/store/state/settings/patterns/structure-pattern-state.interface";


const _createPatternReducer = createReducer(
  AppState.initialState.settingsCreatePatterns,
  on(TurnOnFactoryPatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'factoryPattern', value: true})
  ),
  on(TurnOffFactoryPatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'factoryPattern', value: false})
  ),
  on(TurnOnBuilderPatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'builderPattern', value: true})
  ),
  on(TurnOffBuilderPatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'builderPattern', value: false})
  ),
);

export function createPatternReducer(state, action): ICreatePatternState | IStructurePatternState {
  return _createPatternReducer(state, action);
}