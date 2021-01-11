import {createSelector, select} from "@ngrx/store";
import {pipe} from "rxjs";
import {switchMap, tap} from "rxjs/operators";

import {DashboardPatternStateStorage} from "../../../storage/routs/dashboard-pattern-state.storage";

import {EDashboardPatternStorage} from "../../../enums/storage/dashboard/dashboard-pattern-storage.enum";

import {IAppState} from "../../../interfaces/store/state/app-state.interface";
import {IDashboardCategoryList} from "../../../interfaces/category/dashboard-category-list.interface";


export class DashboardStructurePatternSelectors {

  public static selectCategory = createSelector(
    DashboardStructurePatternSelectors.selectPatternState,
    (state: IDashboardCategoryList) => state
  );

  public static selectTitle = createSelector(
    DashboardStructurePatternSelectors.selectPatternState,
    (state: IDashboardCategoryList) => state.categoryName
  );

  public static selectPatterns = createSelector(
    DashboardStructurePatternSelectors.selectPatternState,
    (state: IDashboardCategoryList) => state.content
  );

  public static selectStoragePipe = pipe(
    switchMap(() => select(DashboardStructurePatternSelectors.selectCategory)),
    tap(v => DashboardPatternStateStorage.setState(EDashboardPatternStorage.STRUCTURE_PATTERNS, v))
  );

  public static selectPatternState(state: IAppState): IDashboardCategoryList {
    return state.dashboardStructurePatterns;
  }

}
