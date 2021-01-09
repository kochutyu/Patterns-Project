import {ICreatePatternState} from "../../../interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {createReducer, on} from "@ngrx/store";
import {IStructurePatternState} from "../../../interfaces/store/state/settings/patterns/structure-pattern-state.interface";
import {
  TurnOffAdapterPatternAction,
  TurnOffBridgePatternAction,
  TurnOffCompositePatternAction,
  TurnOnAdapterPatternAction,
  TurnOnBridgePatternAction,
  TurnOnCompositePatternAction
} from "../../actions/settings/structure-pattern.action";
import {patternReduce} from "../../../transform/store/settings.transforms";
import {AppState} from "../../state/app.state";


const _structurePatternReducer = createReducer(
  AppState.initialState.settingsStructurePatterns,
  on(TurnOnAdapterPatternAction, (state: IStructurePatternState) =>
    patternReduce({state, keyName: 'adapterPattern', value: true})
  ),
  on(TurnOffAdapterPatternAction, (state: IStructurePatternState) =>
    patternReduce({state, keyName: 'adapterPattern', value: false})
  ),
  on(TurnOnBridgePatternAction, (state: IStructurePatternState) =>
    patternReduce({state, keyName: 'bridgePattern', value: true})
  ),
  on(TurnOffBridgePatternAction, (state: IStructurePatternState) =>
    patternReduce({state, keyName: 'bridgePattern', value: false})
  ),
  on(TurnOnCompositePatternAction, (state: IStructurePatternState) =>
    patternReduce({state, keyName: 'compositePattern', value: true})
  ),
  on(TurnOffCompositePatternAction, (state: IStructurePatternState) =>
    patternReduce({state, keyName: 'compositePattern', value: false})
  ),
);

export function structurePatternReducer(state, action): ICreatePatternState | IStructurePatternState {
  return _structurePatternReducer(state, action);
}
