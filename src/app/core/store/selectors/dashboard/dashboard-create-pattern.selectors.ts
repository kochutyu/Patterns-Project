import {createSelector, select} from "@ngrx/store";
import {pipe} from "rxjs";
import {switchMap, tap} from "rxjs/operators";

import {DashboardPatternStateStorage} from "../../../storage/routs/dashboard-pattern-state.storage";

import {EDashboardPatternStorage} from "../../../../shared/enums/storage/dashboard/dashboard-pattern-storage.enum";

import {IAppState} from "../../../../shared/interfaces/store/state/app-state.interface";
import {IDashboardCategoryList} from "../../../../shared/interfaces/category/dashboard-category-list.interface";

export class DashboardCreatePatternSelectors {

  public static selectCategory = createSelector(
    DashboardCreatePatternSelectors.selectPatternState,
    (state: IDashboardCategoryList) => state
  );

  public static selectTitle = createSelector(
    DashboardCreatePatternSelectors.selectPatternState,
    (state: IDashboardCategoryList) => state.categoryName
  );

  public static selectPatterns = createSelector(
    DashboardCreatePatternSelectors.selectPatternState,
    (state: IDashboardCategoryList) => state.content
  );

  public static selectStoragePipe = pipe(
    switchMap(() => select(DashboardCreatePatternSelectors.selectCategory)),
    tap(v => DashboardPatternStateStorage.setState(EDashboardPatternStorage.STRUCTURE_PATTERNS, v))
  );

  static selectPatternState(state: IAppState): IDashboardCategoryList {
    return state.dashboardCreatePatterns;
  }

}
