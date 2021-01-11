import {IAppState} from "../../../interfaces/store/state/app-state.interface";
import {createSelector, select} from "@ngrx/store";
import {IDashboardCategoryList} from "../../../interfaces/category/dashboard-category-list.interface";
import {pipe} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {DashboardCreatePatternConstant} from "../../../constant/components/dashboard/dashboard-create-pattern.constant";
import {IDashboardCard} from "../../../interfaces/components/card/dashboard-card.interface";
import {DashboardPatternStateStorage} from "../../../storage/routs/dashboard-pattern-state.storage";
import {EDashboardPatternStateStorage} from "../../../enums/storage/dashboard/dashboard-pattern-state-storage.enum";

const selectPatternState = (state: IAppState) => state.dashboardCreatePatterns;

export const selectDashboardCreatePattern = createSelector(
  selectPatternState,
  (state: IDashboardCategoryList) => state
);

export const selectDashboardCreatePatternTitle = createSelector(
  selectPatternState,
  (state: IDashboardCategoryList) => state.categoryName
);

export const selectDashboardCreatePatternList = createSelector(
  selectPatternState,
  (state: IDashboardCategoryList) => state.content
);

export const selectDashboardCreatePatternStoragePipe = pipe(
  switchMap(() => select(selectDashboardCreatePattern)),
  tap(v => DashboardPatternStateStorage.setState(EDashboardPatternStateStorage.CREATE_PATTERNS, v))
);

const insert = (arr, index, newItem) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index)
]

export const togglePattern = (patterns: Array<IDashboardCard>, id: string): Array<IDashboardCard> => {
  const isExist = patterns.some(c => c.id === id);
  if (isExist) {
    return patterns.filter(c => c.id !== id)
  } else {
    const content: Array<IDashboardCard> = DashboardCreatePatternConstant.getPatternsList.content;
    const patternIndex: number = content.findIndex(c => c.id === id);
    return insert(patterns, patternIndex, content[patternIndex]);
  }
}
