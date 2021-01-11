import {IDashboardCategoryList} from "../../../interfaces/category/dashboard-category-list.interface";
import {DashboardPatternStateStorage} from "../../../storage/routs/dashboard-pattern-state.storage";
import {EDashboardPatternStateStorage} from "../../../enums/storage/dashboard/dashboard-pattern-state-storage.enum";


const storage: IDashboardCategoryList = DashboardPatternStateStorage.getState(EDashboardPatternStateStorage.CREATE_PATTERNS);

const isCategoryName: boolean = !!storage.categoryName;
const isContent: boolean = !!storage.content;

export const initialDashboardCreatePatterns: IDashboardCategoryList = {
  categoryName: storage.categoryName,
  content: storage.content
}
