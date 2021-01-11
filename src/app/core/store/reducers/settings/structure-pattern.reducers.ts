import {createReducer, on} from "@ngrx/store";

import {AppState} from "../../state/app.state";

import {
  TurnOffAdapterPatternAction,
  TurnOffBridgePatternAction,
  TurnOffCompositePatternAction,
  TurnOnAdapterPatternAction,
  TurnOnBridgePatternAction,
  TurnOnCompositePatternAction
} from "../../actions/settings/structure-pattern.action";

import {USettings} from "../../../utils/store/settings.utils";

import {ICreatePatternState} from "../../../interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {IStructurePatternState} from "../../../interfaces/store/state/settings/patterns/structure-pattern-state.interface";


const _structurePatternReducer = createReducer(
  AppState.initialState.settingsStructurePatterns,
  on(TurnOnAdapterPatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'adapterPattern', value: true})
  ),
  on(TurnOffAdapterPatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'adapterPattern', value: false})
  ),
  on(TurnOnBridgePatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'bridgePattern', value: true})
  ),
  on(TurnOffBridgePatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'bridgePattern', value: false})
  ),
  on(TurnOnCompositePatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'compositePattern', value: true})
  ),
  on(TurnOffCompositePatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'compositePattern', value: false})
  ),
);

export function structurePatternReducer(state, action): ICreatePatternState | IStructurePatternState {
  return _structurePatternReducer(state, action);
}
