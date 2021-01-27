import {IDashboardCategoryList} from "../../../../shared/interfaces/category/dashboard-category-list.interface";
import {DashboardPatternStateStorage} from "../../../storage/routs/dashboard-pattern-state.storage";
import {EDashboardPatternStorage} from "../../../../shared/enums/storage/dashboard/dashboard-pattern-storage.enum";


const storage: IDashboardCategoryList = DashboardPatternStateStorage.getState(EDashboardPatternStorage.STRUCTURE_PATTERNS);

export const initialDashboardStructurePatterns: IDashboardCategoryList = {
  categoryName: storage.categoryName,
  content: storage.content
}
