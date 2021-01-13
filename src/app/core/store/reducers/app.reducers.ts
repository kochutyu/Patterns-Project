import {ActionReducerMap} from "@ngrx/store";

import {routerReducer} from "@ngrx/router-store";
import {createPatternReducer} from "./settings/create-pattern.reducers";
import {structurePatternReducer} from "./settings/structure-pattern.reducers";

import {IAppState} from "../../interfaces/store/state/app-state.interface";
import {dashboardCreatePatternsReducer} from "./dashboard/dashboard-create-pattern.reducers";
import {dashboardStructurePatternsReducer} from "./dashboard/dashboard-structure-pattern.reducers";
import {routingReducer} from "./routing/routing.reducers";

export class AppReducers {

  static get getReducers(): ActionReducerMap<IAppState, any> {
    return {
      router: routerReducer,
      routing: routingReducer,
      settingsCreatePatterns: createPatternReducer,
      settingsStructurePatterns: structurePatternReducer,
      dashboardCreatePatterns: dashboardCreatePatternsReducer,
      dashboardStructurePatterns: dashboardStructurePatternsReducer
    }
  }

}
