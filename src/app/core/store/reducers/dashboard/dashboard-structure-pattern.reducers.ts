import {Action, createReducer, on} from "@ngrx/store";

import {AppState} from "../../state/app.state";

import {UpdateDashboardStructurePattern} from "../../actions/dashboard/dashboard.action";

import {EDashboardPatternStorage} from "../../../../shared/enums/storage/dashboard/dashboard-pattern-storage.enum";

import {UDashboardPatterns} from "../../../utils/dashboard/dashboard-patterns.utils";

import {IDashboardCategoryList} from "../../../../shared/interfaces/category/dashboard-category-list.interface";


const _dashboardStructurePatternsReducer = createReducer(
  AppState.initialState.dashboardStructurePatterns,
  on(UpdateDashboardStructurePattern, (state: IDashboardCategoryList, {id}) => {
    return {
      ...state,
      content: UDashboardPatterns.togglePattern(state.content, id, EDashboardPatternStorage.STRUCTURE_PATTERNS)
    }
  }),
);

export const dashboardStructurePatternsReducer = (state: IDashboardCategoryList, action: Action) => {
  return _dashboardStructurePatternsReducer(state, action);
}
