import {createReducer, on} from "@ngrx/store";

import {AppState} from "../../state/app.state";

import {
  TurnOffAdapterPatternAction,
  TurnOffBridgePatternAction,
  TurnOffCompositePatternAction,
  TurnOffDecoratorPatternAction,
  TurnOffFacadePatternAction,
  TurnOffFlyweightPatternAction, TurnOffProxyPatternAction,
  TurnOnAdapterPatternAction,
  TurnOnBridgePatternAction,
  TurnOnCompositePatternAction,
  TurnOnDecoratorPatternAction,
  TurnOnFacadePatternAction,
  TurnOnFlyweightPatternAction, TurnOnProxyPatternAction
} from "../../actions/settings/structure-pattern.action";

import {USettings} from "../../../utils/store/settings.utils";

import {ICreatePatternState} from "../../../../shared/interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {IStructurePatternState} from "../../../../shared/interfaces/store/state/settings/patterns/structure-pattern-state.interface";


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
  on(TurnOnDecoratorPatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'decoratorPattern', value: true})
  ),
  on(TurnOffDecoratorPatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'decoratorPattern', value: false})
  ),
  on(TurnOnFacadePatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'facadePattern', value: true})
  ),
  on(TurnOffFacadePatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'facadePattern', value: false})
  ),
  on(TurnOnFlyweightPatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'flyweightPattern', value: true})
  ),
  on(TurnOffFlyweightPatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'flyweightPattern', value: false})
  ),
  on(TurnOnProxyPatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'proxyPattern', value: true})
  ),
  on(TurnOffProxyPatternAction, (state: IStructurePatternState) =>
    USettings.patternReduce({state, keyName: 'proxyPattern', value: false})
  ),
);

export function structurePatternReducer(state, action): ICreatePatternState | IStructurePatternState {
  return _structurePatternReducer(state, action);
}
