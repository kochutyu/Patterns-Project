import {ActionReducerMap} from "@ngrx/store";

import {routerReducer} from "@ngrx/router-store";
import {createPatternReducer} from "./settings/create-pattern.reducers";
import {structurePatternReducer} from "./settings/structure-pattern.reducers";

import {IAppState} from "../../interfaces/store/state/app-state.interface";

export class AppReducers {

  static get getReducers(): ActionReducerMap<IAppState, any> {
    return {
      router: routerReducer,
      settingsCreatePatterns: createPatternReducer,
      settingsStructurePatterns: structurePatternReducer
    }
  }

}
