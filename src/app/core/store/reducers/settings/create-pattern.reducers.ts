import {ICreatePatternState} from "../../../interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {createReducer, on} from "@ngrx/store";
import {
  TurnOffBuilderPatternAction,
  TurnOffFactoryPatternAction,
  TurnOnBuilderPatternAction,
  TurnOnFactoryPatternAction
} from "../../actions/settings/create-pattern.action";
import {patternReduce} from "../../../transform/store/settings.transforms";
import {IStructurePatternState} from "../../../interfaces/store/state/settings/patterns/structure-pattern-state.interface";
import {AppState} from "../../state/app.state";

const _createPatternReducer = createReducer(
  AppState.initialState.settingsCreatePatterns,
  on(TurnOnFactoryPatternAction, (state: ICreatePatternState) =>
    patternReduce({state, keyName: 'factoryPattern', value: true})
  ),
  on(TurnOffFactoryPatternAction, (state: ICreatePatternState) =>
    patternReduce({state, keyName: 'factoryPattern', value: false})
  ),
  on(TurnOnBuilderPatternAction, (state: ICreatePatternState) =>
    patternReduce({state, keyName: 'builderPattern', value: true})
  ),
  on(TurnOffBuilderPatternAction, (state: ICreatePatternState) =>
    patternReduce({state, keyName: 'builderPattern', value: false})
  ),
);

export function createPatternReducer(state, action): ICreatePatternState | IStructurePatternState {
  return _createPatternReducer(state, action);
}
