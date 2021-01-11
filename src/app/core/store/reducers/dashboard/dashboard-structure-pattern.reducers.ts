import {Action, createReducer, on} from "@ngrx/store";
import {AppState} from "../../state/app.state";
import {IDashboardCategoryList} from "../../../interfaces/category/dashboard-category-list.interface";
import {togglePattern} from "../../selectors/dashboard/dashboard-create-pattern.selectors";
import {UpdateDashboardCreatePattern, UpdateDashboardStructurePattern} from "../../actions/dashboard/dashboard.action";

const _dashboardCreatePatternsReducer = createReducer(
  AppState.initialState.dashboardCreatePatterns,
  on(UpdateDashboardCreatePattern, (state: IDashboardCategoryList, {id}) => {
    return {...state, content: togglePattern(state.content, id)}
  }),
  on(UpdateDashboardStructurePattern, (state: IDashboardCategoryList, {id}) => {
    return {...state, content: togglePattern(state.content, id)}
  }),
);

export const dashboardCreatePatternsReducer = (state: any, action: Action) => {
  return _dashboardCreatePatternsReducer(state, action);
}
