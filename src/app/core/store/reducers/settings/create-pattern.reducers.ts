import {createReducer, on} from "@ngrx/store";

import {AppState} from "../../state/app.state";

import {
  TurnOffAbstractFactoryPatternAction,
  TurnOffBuilderPatternAction,
  TurnOffFactoryMethodPatternAction, TurnOffPrototypePatternAction, TurnOffSingletonPatternAction,
  TurnOnAbstractFactoryPatternAction,
  TurnOnBuilderPatternAction,
  TurnOnFactoryMethodPatternAction, TurnOnPrototypePatternAction, TurnOnSingletonPatternAction,
} from "../../actions/settings/create-pattern.action";

import {USettings} from "../../../utils/store/settings.utils";

import {ICreatePatternState} from "../../../../shared/interfaces/store/state/settings/patterns/create-pattern-state.interface";
import {IStructurePatternState} from "../../../../shared/interfaces/store/state/settings/patterns/structure-pattern-state.interface";


const _createPatternReducer = createReducer(
  AppState.initialState.settingsCreatePatterns,
  on(TurnOnAbstractFactoryPatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'abstractFactoryPattern', value: true})
  ),
  on(TurnOffAbstractFactoryPatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'abstractFactoryPattern', value: false})
  ),
  on(TurnOnFactoryMethodPatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'factoryMethodPattern', value: true})
  ),
  on(TurnOffFactoryMethodPatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'factoryMethodPattern', value: false})
  ),
  on(TurnOnBuilderPatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'builderPattern', value: true})
  ),
  on(TurnOffBuilderPatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'builderPattern', value: false})
  ),
  on(TurnOnPrototypePatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'prototypePattern', value: true})
  ),
  on(TurnOffPrototypePatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'prototypePattern', value: false})
  ),
  on(TurnOnSingletonPatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'singletonPattern', value: true})
  ),
  on(TurnOffSingletonPatternAction, (state: ICreatePatternState) =>
    USettings.patternReduce({state, keyName: 'singletonPattern', value: false})
  ),
);

export function createPatternReducer(state, action): ICreatePatternState | IStructurePatternState {
  return _createPatternReducer(state, action);
}
