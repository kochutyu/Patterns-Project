import {Action, createReducer, on} from "@ngrx/store";

import {AppState} from "../../state/app.state";

import {UpdateDashboardCreatePattern} from "../../actions/dashboard/dashboard.action";

import {EDashboardPatternStorage} from "../../../../shared/enums/storage/dashboard/dashboard-pattern-storage.enum";

import {UDashboardPatterns} from "../../../utils/dashboard/dashboard-patterns.utils";

import {IDashboardCategoryList} from "../../../../shared/interfaces/category/dashboard-category-list.interface";


const _dashboardCreatePatternsReducer = createReducer(
  AppState.initialState.dashboardCreatePatterns,
  on(UpdateDashboardCreatePattern, (state: IDashboardCategoryList, {id}) => {
    return {
      ...state,
      content: UDashboardPatterns.togglePattern(state.content, id, EDashboardPatternStorage.CREATE_PATTERNS)
    }
  }),
);

export const dashboardCreatePatternsReducer = (state: IDashboardCategoryList, action: Action) => {
  return _dashboardCreatePatternsReducer(state, action);
}
