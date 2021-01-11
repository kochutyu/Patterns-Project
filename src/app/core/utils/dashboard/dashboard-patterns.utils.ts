import {EDashboardPatternStorage} from "../../enums/storage/dashboard/dashboard-pattern-storage.enum";
import {IDashboardCard} from "../../interfaces/components/card/dashboard-card.interface";
import {DashboardCreatePatternConstant} from "../../constant/components/dashboard/dashboard-create-pattern.constant";
import {DashboardStructurePatternConstant} from "../../constant/components/dashboard/dashboard-structure-pattern.constant";
import {UArray} from "../array.utils";
import {IAppState} from "../../interfaces/store/state/app-state.interface";
import {IDashboardCategoryList} from "../../interfaces/category/dashboard-category-list.interface";

export class UDashboardPatterns {

  public static getPatternList(type: EDashboardPatternStorage): Array<IDashboardCard> {
    switch (type) {
      case EDashboardPatternStorage.CREATE_PATTERNS:
        return DashboardCreatePatternConstant.getPatternsList.content;
      case EDashboardPatternStorage.STRUCTURE_PATTERNS:
        return DashboardStructurePatternConstant.getPatternsList.content;
    }
  }

  public static getInitialPatternList(type: EDashboardPatternStorage): Array<IDashboardCard> {
    switch (type) {
      case EDashboardPatternStorage.CREATE_PATTERNS:
        return DashboardCreatePatternConstant.initialState.content;
      case EDashboardPatternStorage.STRUCTURE_PATTERNS:
        return DashboardStructurePatternConstant.initialState.content;
    }
  }

  public static getInitialCategory(type: EDashboardPatternStorage): IDashboardCategoryList {
    switch (type) {
      case EDashboardPatternStorage.CREATE_PATTERNS:
        return DashboardCreatePatternConstant.initialState;
      case EDashboardPatternStorage.STRUCTURE_PATTERNS:
        return DashboardStructurePatternConstant.initialState;
    }
  }

  public static togglePattern(patterns: Array<IDashboardCard>, id: string, type: EDashboardPatternStorage): Array<IDashboardCard> {
    const isExist = patterns.some(c => c.id === id);
    if (isExist) {
      return patterns.filter(c => c.id !== id)
    } else {
      const content = this.getPatternList(type);
      const patternIndex: number = content.findIndex(c => c.id === id);
      return UArray.insert(patterns, patternIndex, content[patternIndex]);
    }
  }

  public static getPatternState(state: IAppState, type: EDashboardPatternStorage): IDashboardCategoryList {
    switch (type) {
      case EDashboardPatternStorage.CREATE_PATTERNS:
        return state.dashboardCreatePatterns;
      case EDashboardPatternStorage.STRUCTURE_PATTERNS:
        return state.dashboardStructurePatterns;
    }
  }

}
