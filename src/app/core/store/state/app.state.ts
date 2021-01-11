import {IAppState} from "../../interfaces/store/state/app-state.interface";

import {initialCreatePatternState} from "./settings/create-pattern.state";
import {initialStructurePatternState} from "./settings/structure-pattern.state";
import {initialDashboardCreatePatterns} from "./dashboard/dashboard-create-pattern.state";
import {initialDashboardStructurePatterns} from "./dashboard/dashboard-structure-pattern.state";

export class AppState {

  static get initialState(): IAppState {
    return {
      settingsCreatePatterns: initialCreatePatternState,
      settingsStructurePatterns: initialStructurePatternState,
      dashboardCreatePatterns: initialDashboardCreatePatterns,
      dashboardStructurePatterns: initialDashboardStructurePatterns
    }
  };

}
