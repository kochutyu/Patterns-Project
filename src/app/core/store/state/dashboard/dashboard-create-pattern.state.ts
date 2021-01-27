import {DashboardPatternStateStorage} from "../../../storage/routs/dashboard-pattern-state.storage";

import {EDashboardPatternStorage} from "../../../../shared/enums/storage/dashboard/dashboard-pattern-storage.enum";

import {IDashboardCategoryList} from "../../../../shared/interfaces/category/dashboard-category-list.interface";



const storage: IDashboardCategoryList = DashboardPatternStateStorage.getState(EDashboardPatternStorage.CREATE_PATTERNS);

export const initialDashboardCreatePatterns: IDashboardCategoryList = {
  categoryName: storage.categoryName,
  content: storage.content
}
